const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.browser is deprecated',
      detail: {
        body: 'jQuery.browser was deprecated in version 1.3, and finally removed in 1.9.\n' +
          'Browser sniffing is notoriously unreliable as means of detecting whether to\n' +
          'implement particular features.\n' +
          '\n' +
          'Where possible, use feature detection to make code decisions rather\n' +
          'than trying to detect a specific browser. The Modernizr library provides a wide\n' +
          'variety of feature detections. As a last resort, you can directly look at the\n' +
          'navigator.userAgent string to detect specific strings returned by the browser.',
        examples: {
          correct: [
            'if (window.someFeature) {\n' +
            '  console.log("supported!")\n' +
            '}'
          ],
          incorrect: [
            'if (!$.browser.msie) {\n' +
            '  console.log("supported!")\n' +
            '}'
          ]
        },
        links: [
          '[JQMIGRATE: jQuery.browser is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerybrowser-is-deprecated)',
          '[`jQuery.browser`](https://api.jquery.com/jQuery.browser)'
        ]
      },
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
