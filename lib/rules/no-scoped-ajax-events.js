const { isJQuery } = require('../util')

const AJAX_EVENTS = [
  'ajaxStart',
  'ajaxStop',
  'ajaxSend',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
]

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: AJAX events should be attached to document',
      detail: {
        body:
          '**Cause:** As of jQuery 1.9, the global AJAX events (ajaxStart, ajaxStop, ajaxSend, ajaxComplete, ajaxError, and ajaxSuccess) are only triggered on the `document` element. \n' +
          '\n' +
          '**Solution:** Change the program to listen for the AJAX events on the document.',
        examples: {
          incorrect: [
            '$("#status").ajaxStart(function(){ $(this).text("Ajax started"); });',
          ],
          correct: [
            '$(document).ajaxStart(function(){ $("#status").text("Ajax started"); });',
          ],
        },
        links: [
          '[JQMIGRATE: AJAX events should be attached to document](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-ajax-events-should-be-attached-to-document)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-ajax-events-should-be-attached-to-document',
      tags: ['v1.9'],
      removed: '1.9.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-scoped-ajax-events':
        'jQuery.fn.{{fn}} is only triggered on the document element after jQuery 1.9',
    },
    type: 'problem',
  },
  create: context => ({
    Identifier: node => {
      let name = node.name
      if (!AJAX_EVENTS.includes(name)) {
        return
      }

      if (
        node.parent.type === 'MemberExpression' &&
        node.parent.object.type === 'CallExpression' &&
        isJQuery(node.parent.object.callee) &&
        node.parent.object.arguments.length === 1 &&
        node.parent.object.arguments[0].type === 'Identifier' &&
        node.parent.object.arguments[0].name === 'document'
      ) {
        return
      }

      context.report({
        node,
        data: {
          fn: name,
        },
        messageId: 'no-scoped-ajax-events',
      })
    },
  }),
}
