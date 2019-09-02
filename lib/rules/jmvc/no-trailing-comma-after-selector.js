const REGEXP_SELECTOR_WITH_TRAILING_COMMA = /[^'"\n]+(,) [{]*[a-zA-Z]+[}]*$/

module.exports = {
  meta: {
    docs: {
      description: 'Disallow trailing commas after jQuery selectors in JMVC event listeners',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      'no-trailing-comma-after-selector':
        'Do not put trailing commas after jQuery selectors - this is a parsing error in jQuery 1.9+'
    },
    type: 'problem',
    fixable: true
  },
  create: context => ({
    Property: node => {
      const { type, value } = node.key

      if (type !== 'Literal' ||
        !REGEXP_SELECTOR_WITH_TRAILING_COMMA.test(value)
      ) {
        return
      }

      const column = value.lastIndexOf(',')

      const loc = node.key.loc.start
      const sourceCode = context.getSourceCode()

      context.report({
        messageId: 'no-trailing-comma-after-selector',
        node,
        loc: {
          start: {
            ...loc,
            column: loc.column + column + 1
          }
        },
        fix: fixer => fixer.removeRange([
          sourceCode.getIndexFromLoc({
            line: loc.line,
            column: loc.column + column + 1
          }),
          sourceCode.getIndexFromLoc({
            line: loc.line,
            column: loc.column + column + 2
          })
        ])
      })
    }
  })
}
