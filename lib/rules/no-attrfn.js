const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.attrFn is deprecated',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryattrfn-is-deprecated',
      tags: [ 'v1.9' ],
      removed: '1.9.0',
      deprecated: '1.8.0',
      fixFrom: '0.0.0'
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
