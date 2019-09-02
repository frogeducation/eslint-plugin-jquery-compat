const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated .attrFn()',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      'no-attrfn': 'jQuery.attrFn is deprecated in jQuery 1.8'
    },
    type: 'problem',
    fixable: false
  },
  create: context => ({
    Identifier: node => {
      if (
        node.type !== 'Identifier' ||
        node.name !== 'attrFn' ||
        node.parent.type !== 'MemberExpression' ||
        !isJQuery(node.parent.object)
      ) {
        return
      }

      context.report({
        node,
        messageId: 'no-attrfn'
      })
    }
  })
}
