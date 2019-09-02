const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using undocumented $.event.trigger()',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      'no-global-trigger': 'jQuery.event.trigger is undocumented and was removed in jQuery 1.9'
    },
    type: 'problem'
  },
  create: context => ({
    Identifier: node => {
      if (
        node.name !== 'trigger' ||
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
        messageId: 'no-global-trigger'
      })
    }
  })
}
