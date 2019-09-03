const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using undocumented $.event.trigger()',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryeventhandle-is-undocumented-and-deprecated',
      version: '1.9'
    },
    messages: {
      'no-global-handle': 'jQuery.event.handle is undocumented and was removed in jQuery 1.9'
    },
    type: 'problem'
  },
  create: context => ({
    Identifier: node => {
      if (
        node.name !== 'handle' ||
        node.parent.type !== 'MemberExpression' ||
        node.parent.object.type !== 'MemberExpression' ||
        node.parent.object.property.type !== 'Identifier' ||
        node.parent.object.property.name !== 'event' ||
        !isJQuery(node.parent.object.object)
      ) {
        return
      }

      context.report({
        node,
        messageId: 'no-global-handle'
      })
    }
  })
}
