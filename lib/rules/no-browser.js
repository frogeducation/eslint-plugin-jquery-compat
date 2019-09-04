const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.browser is deprecated',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerybrowser-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.3.0',
      removed: '1.9.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'no-browser': '$.browser is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    MemberExpression: node => {
      const { object, property } = node

      if (
        !isJQuery(object) ||
        property.type !== 'Identifier' ||
        property.name !== 'browser'
      ) {
        return
      }

      context.report({
        node: property,
        messageId: 'no-browser'
      })
    }
  })
}
