const { detectJQueryCollections, resolveIdentifier } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using jQuery.fn.data("events")',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      'no-fn-data-events': 'Potential use of removed special case for .data("events"); if this is intentional and this element has custom data with the name "events", disable this rule for this specific line.'
    },
    type: 'problem'
  },
  create: detectJQueryCollections( (
    context,
    { foundAPositiveMatch }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.callee.type !== 'MemberExpression' ||
        node.callee.property.type !== 'Identifier' ||
        node.callee.property.name !== 'data' ||
        node.arguments.length !== 1
      ) {
        return
      }

      const args = node.arguments

      const arg0 = resolveIdentifier(args[0], context) || args[0]

      if (!arg0 || arg0.type !== 'Literal' || arg0.value !== 'events') return

      context.report({
        node: node.callee.property,
        messageId: 'no-fn-data-events'
      })
    }
  }))
}
