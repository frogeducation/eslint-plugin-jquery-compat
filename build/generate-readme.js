const path = require('path')
const fs = require('fs')
const glob = require('glob')
const semver = require('semver')

const { resolveTags } = require('../lib/configs/utils')

const FILENAME = Symbol('FILENAME')

const rulesDir = path.relative(__dirname, path.join(__dirname, '..', 'lib', 'rules'))

const renderRuleTitle = filename =>
  fs.existsSync(path.resolve(path.join(__dirname, '..', 'docs', 'rules', `${filename}.md`))) ?
    `[@frogeducation/jquery-compat/${filename}](docs/rules/${filename}.md)` :
    `@frogeducation/jquery-compat/${filename}`

const renderDetail = (title, detail, suffix) => {
  if (!detail) { return '\n' + title + '\n' }

  const { body, examples: { correct, incorrect }, links} = detail

  return`
<details>
  <summary>${title}</summary>

  ${body.split('\n').join('\n  ')}

  Examples of **incorrect** code for this rule:

  \`\`\`js
  ${renderExamples(incorrect).split('\n').join('\n  ')}
  \`\`\`
  
  Examples of **correct** code for this rule:

  \`\`\`js
  ${renderExamples(correct).split('\n').join('\n  ')}
  \`\`\`
${renderLinks(links)}
${suffix}
</details>
`
}

const renderExamples = examples => {
  if (!examples) { return '(none provided)' }

  return examples.join('\n```\n```js\n')
}

const renderLinks = links => {
  if (!links) { return '' }

  return `
  Further reading:
  - ${links.join('\n  - ')}`
}

const renderTags = (tags, fixFrom) => `<details>
  <summary>Included in ${resolveTags({tags, fixFrom}).length} configs</summary>

  - ${resolveTags({tags, fixFrom}).join('\n  - ')}
</details>`

const renderTable = rules => `
| rule | deprecated | fixable from | removed | \`--fix\` |
| ---- | ---- | ---- | ---- | ---- |
${rules.map(({ meta: { docs: { deprecated, removed, fixFrom }, fixable }, [FILENAME]: filename }) =>
  `| [${filename}](#frogeducationjquery-compat${filename.replace('/', '')}) | ${deprecated || removed || ''} | ${ (fixFrom && semver.satisfies(fixFrom, '>=1.0.0')) ? fixFrom : '(no fix; must rewrite)' } | ${ removed || '' } | ${ fixable ? 'Yes' : '' } |`  
).join('\n')}
`

const rules = glob.sync(path.join(__dirname, rulesDir, '**', '*.js'))
  .map(filename => path.relative(__dirname, filename).slice(rulesDir.length + 1))
  .sort()
  .map(filename =>
    [
      require(path.join(rulesDir, filename)),
      { [FILENAME]: filename.slice(0, -3) }
    ]
      .reduce((left, right) => ({ ...left, ...right }))
  )
  .filter(rule => rule.meta)

const result = rules
  .map(({
    meta: {
      docs: {
        description,
        detail,
        tags,
        fixFrom,
      }
    },
    [FILENAME]: filename
  }) => {
    const copy = `#### ${renderRuleTitle(filename)}
${renderDetail(description, detail, renderTags(tags, fixFrom))}
`;

    return tags.map(tag => [ tag, copy ])
  })
  .reduce((acc, next) => acc.concat(next), [])
  .reduce((acc, [ tag, copy ]) => ({
    ...acc,
    [tag]: (acc[tag] || []).concat([copy])
  }), {})

const SUPPORTED_RULES = Object.keys(result)
  .sort()
  .reverse()
  .map(key => `### ${key}

${result[key].join('\n\n')}`)
  .join('\n\n')

const SUPPORTED_RULES_TABLE = renderTable(rules)

const template = fs.readFileSync(path.join(__dirname, 'readme-template.md'))
  .toString();

const built = Object.entries({ SUPPORTED_RULES, SUPPORTED_RULES_TABLE })
  .reduce((acc, [ key, value ]) => acc.replace(`%%%${key}%%%`, value), template)

fs.writeFileSync(
  path.join(__dirname, '..', 'README.md'),
  built
)

console.log(built)