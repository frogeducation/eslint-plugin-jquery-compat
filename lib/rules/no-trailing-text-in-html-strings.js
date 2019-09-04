const { getStaticValue } = require('eslint-utils')

const {
  resolveIdentifier,
  REGEXP_HTML_STRING,
  detectJQueryCollections
} = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: `$(html)` text after last tag is ignored',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-text-after-last-tag-is-ignored',
      tags: [ 'v1.9' ],
      removed: '1.9.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'no-trailing-text-in-html-strings': 'Trailing text after last tag in HTML strings is ignored'
    },
    type: 'problem'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch }
  ) => ({
    'CallExpression:exit': node => {
      if (
        !foundAPositiveMatch(node)
      ) {
        return
      }

      const args = node.arguments.map(arg =>
        arg.type === 'Identifier'
          ? resolveIdentifier(arg, context)
          : arg
      ).filter(arg => arg)

      args.forEach(arg => {
        let value = null

        if (arg.type === 'Literal') {
          value = arg.value
        } else {
          try {
            ({ value } = getStaticValue(arg, context.getScope()))
          } catch (e) {
            // ignore
          }
        }

        if (!value || typeof value !== 'string') return

        const match = REGEXP_HTML_STRING.exec(value)

        if (!match || !match[3]) return

        const startColumn = arg.loc.start.column + match[2].length + 1

        context.report({
          loc: {
            start: {
              line: arg.loc.start.line,
              column: startColumn
            },
            end: {
              line: arg.loc.end.line,
              column: startColumn + match[3].length
            }
          },
          messageId: 'no-trailing-text-in-html-strings'
        })
      })
    }
  }))
}
