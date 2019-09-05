const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.event.handle is undocumented and deprecated',
      detail: {
        body: '**Cause:** `jQuery.event.handle` was never documented, and deprecated with jQuery 1.7 (see http://forum.jquery.com/topic/deprecated-event-properties-used-in-jquery). As of jQuery 1.9, it has been removed.\n' +
          '\n' +
          '**Solution:** Use documented jQuery APIs, such as [`.trigger`](http://api.jquery.com/trigger/).',
        examples: {
          incorrect: [
            'jQuery.event.handle'
          ]
        },
        links: [
          '[JQMIGRATE: jQuery.event.handle is undocumented and deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryeventhandle-is-undocumented-and-deprecated)',
          '[`.trigger`](http://api.jquery.com/trigger/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryeventhandle-is-undocumented-and-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.7.0',
      removed: '1.9.0',
      fixFrom: '0.0.0'
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
