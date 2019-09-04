const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.swap()',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryswap-is-undocumented-and-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.9.0',
      fixFrom: '0.0.0'
    },
    messages: {
      'no-swap': 'jQuery.swap() is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    MemberExpression: node => {
      const { object, property } = node

      if (
        !isJQuery(object) ||
        property.type !== 'Identifier' ||
        property.name !== 'swap'
      ) {
        return
      }

      context.report({
        node: property,
        messageId: 'no-swap'
      })
    }
  })
}
