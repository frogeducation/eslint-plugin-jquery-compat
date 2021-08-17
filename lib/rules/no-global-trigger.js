const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: Global events are undocumented and deprecated',
      detail: {
        body:
          '**Cause:** jQuery 1.9 does not support globally triggered events. The only documented global events were the AJAX events and they are now triggered only on `document` as discussed above. jQuery never provided a documented interface for outside code to trigger global events.\n' +
          '\n' +
          '**Solution:** Change the program to avoid the use of global events. The jQuery Migrate plugin warns about this case but does _not_ restore the previous behavior since it was undocumented.',
        examples: {
          incorrect: ['$.event.trigger(/*...*/)'],
        },
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-global-events-are-undocumented-and-deprecated',
      tags: ['v1.9'],
      removed: '1.9.0',
      fixFrom: '0.0.0',
    },
    messages: {
      'no-global-trigger':
        'jQuery.event.trigger is undocumented and was removed in jQuery 1.9',
    },
    type: 'problem',
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
        messageId: 'no-global-trigger',
      })
    },
  }),
}
