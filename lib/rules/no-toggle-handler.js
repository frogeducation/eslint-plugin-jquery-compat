const { isFunction, detectJQueryCollections } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated $.fn.toggle(handler, handler...)',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfntogglehandler-handler-is-deprecated',
      version: '1.9'
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
