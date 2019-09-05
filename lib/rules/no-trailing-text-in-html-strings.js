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
      detail: {
        body: 'HTML strings passed to $() should begin and end with tags. Any text following\n' +
          'the last tag is ignored. When upgrading to jQuery 1.9 and using $.parseHTML(),\n' +
          'note that leading or trailing text is not ignored, and those text nodes will be\n' +
          'part of the data returned.\n' +
          '\n' +
          'Usually this warning is due to an error in the HTML string, where text is\n' +
          'present when it should not be there. Remove the leading or trailing text before\n' +
          'passing the string to $.parseHTML() if it should not be part of the collection.\n' +
          'Alternatively you can use $($.parseHTML(html)).filter("\\*") to remove all\n' +
          'top-level text nodes from the set and leave only elements.',
        examples: {
          correct: [
            '$(\'<h1>foo</h1>\')',
            '$(\'<h1>foo</h1>\' + \'<h2>bar</h2>\')',
            'var text = \'<h1>foo</h1>\'\n' +
            '$(text)'
          ],
          incorrect: [
            '$(\'<h1>foo</h1>bar\')',
            '$(\'<h1>foo</h1>\' + \'bar\')',
            'var text = \'<h1>foo</h1>bar\'\n' +
            '$(text)',
            'var text = \'<h1>foo</h1>\' + \'bar\'\n' +
            '$(text)'
          ]
        },
        links: [
          '[JQMIGRATE: $(html) text after last tag is ignored](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-text-after-last-tag-is-ignored)',
          '[`.html()`](http://api.jquery.com/html/)'
        ]
      },
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
