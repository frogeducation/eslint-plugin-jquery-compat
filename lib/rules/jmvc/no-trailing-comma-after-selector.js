const REGEXP_SELECTOR_WITH_TRAILING_COMMA = /[^'"\n]+(,) [{]*[a-zA-Z]+[}]*$/

module.exports = {
  meta: {
    docs: {
      description:
        'Disallow trailing commas after jQuery selectors in JMVC event listeners',
      detail: {
        body:
          'jQuery 1.9+ will throw a parsing error if a selector contains a trailing comma.\n' +
          '\n' +
          'This rule ensures JMVC event listeners do not have a trailing comma after the\n' +
          'selector.',
        examples: {
          correct: [
            "$.Controller('MyController', {\n" +
              '}, {\n' +
              '  "div.something click": function() { /* ...snip... */ }\n' +
              '})',
            "$.Controller('MyController', {\n" +
              '}, {\n' +
              '  "div.something,div.another click": function() { /* ...snip... */ }\n' +
              '})',
          ],
          incorrect: [
            "$.Controller('MyController', {\n" +
              '}, {\n' +
              '  "div.something, click": function() { /* ...snip... */ }\n' +
              '})',
          ],
        },
      },
      category: 'Possible Errors',
      recommended: false,
      tags: ['jmvc'],
      removed: '1.9.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-trailing-comma-after-selector':
        'Do not put trailing commas after jQuery selectors - this is a parsing error in jQuery 1.9+',
    },
    type: 'problem',
    fixable: 'code',
  },
  create: context => ({
    Property: node => {
      const { type, value } = node.key

      if (
        type !== 'Literal' ||
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
            column: loc.column + column + 1,
          },
        },
        fix: fixer =>
          fixer.removeRange([
            sourceCode.getIndexFromLoc({
              line: loc.line,
              column: loc.column + column + 1,
            }),
            sourceCode.getIndexFromLoc({
              line: loc.line,
              column: loc.column + column + 2,
            }),
          ]),
      })
    },
  }),
}
