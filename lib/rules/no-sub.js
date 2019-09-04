const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.sub() is deprecated',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysub-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.7.0',
      removed: '1.9.0',
      fixFrom: '1.0.0'
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
