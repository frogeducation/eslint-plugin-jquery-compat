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

const result = glob.sync(path.join(__dirname, rulesDir, '**', '*.js'))
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
  .map(({
    meta: {
      docs: {
        description,
        tags,
        deprecated,
        fixFrom,
        removed
      },
      fixable
    },
    [FILENAME]: filename
  }) => {
    const copy = `#### ${renderRuleTitle(filename)}

${description}

- deprecated from: ${ deprecated || removed || '(not yet deprecated)' }
- fixable from: ${ (fixFrom && semver.satisfies(fixFrom, '>=1.0.0')) ? fixFrom : '(no fix provided; must rewrite)' }
- removed from: ${ removed || '(not yet removed)' }
- supports \`--fix\`: ${ fixable ? 'Yes' : 'No' }

<details>
  <summary>Included in ${resolveTags({ tags, fixFrom }).length} configs</summary>

  - ${resolveTags({ tags, fixFrom }).join('\n  - ')}
</details>`;

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

fs.writeFileSync(
  path.join(__dirname, '..', 'README.md'),
  fs.readFileSync(path.join(__dirname, 'readme-template.md'))
    .toString()
    .replace('%%%SUPPORTED_RULES%%%', SUPPORTED_RULES)
)