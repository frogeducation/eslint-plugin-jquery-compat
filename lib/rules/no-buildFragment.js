const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.buildFragment()',
      category: 'Possible Errors',
      recommended: true,
    },
    messages: {
      'no-buildFragment': 'jQuery.buildFragment() is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    CallExpression: node => {
      if (
        node.callee.type !== 'MemberExpression' ||
        !isJQuery(node.callee.object) ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "buildFragment"
      ) {
        return
      }

      context.report({
        node: node.callee.property,
        messageId: 'no-buildFragment'
      })
    }
  })
}