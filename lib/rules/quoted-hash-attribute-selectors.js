const QUOTE_MAP = {
  '"': "'",
  "'": '"'
}

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: Attribute selector with \'#\' must be quoted',
      detail: {
        body: 'Selectors such as a[href=#main] are not valid CSS syntax because the value\n' +
          'contains special characters that are not quoted. Until jQuery 1.11.3/2.1.4 this\n' +
          'was accepted, but the behavior is non-standard and was never documented. In\n' +
          'later versions this selector throws an error. In some cases with complex\n' +
          'selectors, Migrate may not attempt a repair. In those cases a fatal error will\n' +
          'be logged on the console and you will need to fix the selector manually.\n' +
          '\n' +
          'Put quotes around any attribute values that have special characters, e.g.\n' +
          'a[href="#main"]. The warning message contains the selector that caused the\n' +
          'problem, use that to find the selector in the source files.',
        examples: {
          correct: [
            '$(\'[href="#main"]\')',
            'var selector = \'[href="#main"]\''
          ],
          incorrect: [
            '$(\'[href=#main]\')',
            'var selector = \'[href=#main\']'
          ]
        },
        links: [
          '[JQMIGRATE: Attribute selector with \'#\' must be quote](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-attribute-selector-with--must-be-quoted)',
          '[Attribute Selectors](https://api.jquery.com/category/selectors/attribute-selectors/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-attribute-selector-with--must-be-quoted',
      tags: [ 'v1.9' ],
      removed: '1.11.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'quoted-hash-attribute-selectors': 'Attribute selector values which include a "#" must be quoted',
    },
    type: 'problem',
    fixable: 'code'
  },
  create: context => ({
    Literal: node => {
      if (typeof node.value !== 'string') return

      const regex = /(\[.*?=)(#.*?)(\])/g

      let match = regex.exec(node.value)

      if (!match) return

      const quote = QUOTE_MAP[node.raw[0]]
      const sourceCode = context.getSourceCode()

      while (match) {
        context.report({
          node,
          messageId: 'quoted-hash-attribute-selectors',
          fix: fixer => {
            const startColumn = node.loc.start.column + match.index + 1

            const start = sourceCode.getIndexFromLoc({
              line: node.loc.start.line,
              column: startColumn
            })
            const end = sourceCode.getIndexFromLoc({
              line: node.loc.end.line,
              column: startColumn + match[0].length
            })

            return fixer.replaceTextRange(
              [start, end],
              `${match[1]}${quote}${match[2]}${quote}${match[3]}`
            )
          }
        })

        match = regex.exec(node.value)
      }
    }
  })
}
