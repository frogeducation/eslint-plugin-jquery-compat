const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.clean()',
      category: 'Possible Errors',
      recommended: true,
    },
    messages: {
      'no-clean': 'jQuery.clean() is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    CallExpression: node => {
      if (
        node.callee.type !== 'MemberExpression' ||
        !isJQuery(node.callee.object) ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "clean"
      ) {
        return
      }

      context.report({
        node: node.callee.property,
        messageId: 'no-clean'
      })
    }
  })
}