const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.sub()',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysub-is-deprecated',
      version: '1.9'
    },
    messages: {
      'no-sub': 'jQuery.sub() is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    MemberExpression: node => {
      const { object, property } = node

      if (
        !isJQuery(object) ||
        property.type !== 'Identifier' ||
        property.name !== 'sub'
      ) {
        return
      }

      context.report({
        node: property,
        messageId: 'no-sub'
      })
    }
  })
}
