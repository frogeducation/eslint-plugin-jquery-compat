const {
  isHTMLString,
  resolveIdentifier,
  detectJQueryCollections
} = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when HTML string does not begin with <',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-html-strings-must-start-with--character'
    },
    messages: {
      'html-string-must-start-with-tag': 'HTML strings must start with \'<\' character'
    },
    type: 'problem'
  },
  create: detectJQueryCollections((context, { foundAPositiveMatch }) => ({
    "CallExpression:exit": node => {
      if (!foundAPositiveMatch(node)) return

      const args = node.arguments.map(arg =>
        arg.type === 'Identifier'
          ? resolveIdentifier(arg, context)
          : arg
      ).filter(arg => arg)

      args.forEach(arg => {
        if (
          arg.type === 'Literal' &&
          isHTMLString(arg.value.trim()) &&
          !/^</.test(arg.value)
        ) {
          context.report({
            node: arg,
            messageId: 'html-string-must-start-with-tag'
          })
        }
      })
    }
  }))
}
