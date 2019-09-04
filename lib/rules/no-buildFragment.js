const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.buildFragment() is deprecated',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryclean-is-deprecated',
      tags: [ 'v1.9' ],
      removed: '1.8.0',
      fixFrom: '1.0.0'
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