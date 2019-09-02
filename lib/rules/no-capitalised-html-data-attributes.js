const kebabCase = require('lodash.kebabcase')

const REGEXP_CAPITALISED_HTML_DATA_ATTRIBUTE =
  /data-([a-z]*[A-Z]+[a-z]*)+\s*=\s*['"]/

module.exports = {
  meta: {
    docs: {
      description: 'Disallow capitalised HTML data attributes',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      'no-capitalised-html-data-attributes': 'Use lowercase for HTML data attribute names'
    },
    type: 'problem',
    fixable: 'code'
  },
  create: context => ({
    Literal: node => {
      const { value } = node

      if (typeof value !== 'string' ||
        !REGEXP_CAPITALISED_HTML_DATA_ATTRIBUTE.test(value)
      ) {
        return
      }

      const loc = node.loc.start
      const match = value.match(/[A-Z]+/)
      const sourceCode = context.getSourceCode()

      context.report({
        messageId: 'no-capitalised-html-data-attributes',
        node,
        loc: {
          ...loc,
          column: loc.column + match.index + 1
        },
        fix: fixer => fixer.replaceTextRange(
          [
            sourceCode.getIndexFromLoc({
              line: loc.line,
              column: loc.column + match.index
            }),
            sourceCode.getIndexFromLoc({
              line: loc.line,
              column: loc.column + match.index + match[0].length + 1
            })
          ],
          kebabCase(value.substr(match.index - 1, match[0].length + 1))
        )
      })
    }
  })
}
