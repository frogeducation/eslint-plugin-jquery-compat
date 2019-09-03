const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated .attrFn()',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryattrfn-is-deprecated',
      version: '1.9'
    },
    messages: {
      'no-attrfn': 'jQuery.attrFn is deprecated in jQuery 1.8'
    },
    type: 'problem'
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
