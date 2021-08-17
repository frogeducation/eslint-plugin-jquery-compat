const { detectJQueryCollections, resolveIdentifier } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: "JQMIGRATE: Use of jQuery.fn.data('events') is deprecated",
      detail: {
        body:
          'Prior to 1.9, .data("events") could be used to retrieve jQuery\'s undocumented\n' +
          'internal event data structure for an element if no other code had defined a data\n' +
          'element with the name "events". This special case has been removed in 1.9.\n' +
          '\n' +
          'There is no public interface to retrieve this internal data structure, and it\n' +
          'remains undocumented. The only useful applications might be for debugging. The\n' +
          'data is available via jQuery.\\_data("events") but this is not a documented\n' +
          'interface.\n' +
          '\n' +
          'If this rule is flagging up code where an element is known to have custom data\n' +
          'with the name "events", either use a different name to avoid confusion, or\n' +
          'disable the rule for that particular piece of code:\n' +
          '\n' +
          '```js\n' +
          "$('.foo').data('events', 'my-custom-event-data')\n" +
          '\n' +
          '// ...snip...\n' +
          '\n' +
          '// eslint-disable-next-line jquery-compat/no-fn-data-events\n' +
          "var customEventData = $('.foo').data('events')\n" +
          '```',
        examples: {
          correct: ["$('.foo').data('custom-events')"],
          incorrect: ["$('.foo').data('events')"],
        },
        links: [
          "[JQMIGRATE: Use of jQuery.fn.data('events') is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-use-of-jqueryfndataevents-is-deprecated)",
          '[`.data()`](https://api.jquery.com/data/)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-use-of-jqueryfndataevents-is-deprecated',
      tags: ['v1.9'],
      removed: '1.9.0',
      fixFrom: '0.0.0',
    },
    messages: {
      'no-fn-data-events':
        'Potential use of removed special case for .data("events"); if this is intentional and this element has custom data with the name "events", disable this rule for this specific line.',
    },
    type: 'problem',
  },
  create: detectJQueryCollections((context, { foundAPositiveMatch }) => ({
    'CallExpression:exit': node => {
      if (
        !foundAPositiveMatch(node) ||
        node.callee.type !== 'MemberExpression' ||
        node.callee.property.type !== 'Identifier' ||
        node.callee.property.name !== 'data' ||
        node.arguments.length !== 1
      ) {
        return
      }

      const args = node.arguments

      const arg0 = resolveIdentifier(args[0], context) || args[0]

      if (!arg0 || arg0.type !== 'Literal' || arg0.value !== 'events') return

      context.report({
        node: node.callee.property,
        messageId: 'no-fn-data-events',
      })
    },
  })),
}
