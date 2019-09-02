const { isFunction, detectJQueryCollections } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated $.fn.toggle(handler, handler...)',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      'no-toggle-handler': '$.fn.toggle(handler, handler...) is deprecated'
    },
    type: 'problem'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.arguments.length < 2 ||
        node.callee.type !== "MemberExpression" ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "toggle" ||
        !node.arguments.every(arg => isFunction(arg, context))
      ) {
        return
      }

      const identifier = node.callee.property

      context.report({
        node: identifier,
        messageId: 'no-toggle-handler'
      })
    }
  }))
}
