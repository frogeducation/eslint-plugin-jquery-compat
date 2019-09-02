const QUOTE_MAP = {
  '"': "'",
  "'": '"'
}

module.exports = {
  meta: {
    docs: {
      description: 'Warn about attribute selectors whose values contain a "#" and are not quoted',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-attribute-selector-with--must-be-quoted'
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
