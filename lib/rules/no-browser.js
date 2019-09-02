const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.browser',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerybrowser-is-deprecated'
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
