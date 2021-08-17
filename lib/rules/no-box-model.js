const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description:
        'JQMIGRATE: `jQuery.boxModel` / `jQuery.support.boxModel` is deprecated',
      detail: {
        body:
          'These two deprecated properties are false when the page is using Quirks mode, and true when the page is in standards mode. Quirks mode was never supported in jQuery so these properties were removed.\n' +
          '\n' +
          'Do not use jQuery in Quirks mode, it has never been supported.',
        examples: {
          incorrect: [
            'if ($.boxModel) { /* ...snip... */ }',
            'if ($.support.boxModel) { /* ...snip... */ }',
            'if (jQuery.boxModel) { /* ...snip... */ }',
            'if (jQuery.support.boxModel) { /* ...snip... */ }',
          ],
          correct: ['// use feature detection in stead'],
        },
        links: [
          '[JQMIGRATE: jQuery.support.boxModel is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysupportboxmodel-is-deprecated)',
          '[`jQuery.boxModel`](https://api.jquery.com/jQuery.boxModel/)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryboxmodel-is-deprecated',
      tags: ['v1.9'],
      deprecated: '1.3.0',
      removed: '1.8.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-box-model': '$.{{api}} is deprecated',
    },
    type: 'problem',
  },
  create: context => ({
    Identifier: node => {
      if (node.name !== 'boxModel' || node.parent.type !== 'MemberExpression')
        return

      const { object } = node.parent

      let api = null

      if (isJQuery(object)) api = 'boxModel'

      try {
        if (object.property.name === 'support' && isJQuery(object.object)) {
          api = 'support.boxModel'
        }
      } catch (e) {
        // ignore
      }

      if (!api) return

      context.report({
        node,
        messageId: 'no-box-model',
        data: { api },
      })
    },
  }),
}
