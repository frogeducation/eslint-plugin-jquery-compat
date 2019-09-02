const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.swap()',
      category: 'Possible Errors',
      recommended: true,
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
