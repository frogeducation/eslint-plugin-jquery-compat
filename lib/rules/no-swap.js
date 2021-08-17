const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.swap() is undocumented and deprecated',
      detail: {
        body:
          "**Cause**: The `jQuery.swap()` method temporarily exchanges a set of CSS properties. It was never documented as part of jQuery's public API and should not be used because it can cause performance problems due to forced layout.\n" +
          '\n' +
          '**Solution**: Rework the code to avoid calling `jQuery.swap()`, or explicitly set and restore the properties you need to change.',
        examples: {
          incorrect: ['$.swap(/*...*/)'],
        },
        links: [
          '[JQMIGRATE: jQuery.swap() is undocumented and deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryswap-is-undocumented-and-deprecated)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryswap-is-undocumented-and-deprecated',
      tags: ['v1.9'],
      deprecated: '1.9.0',
      fixFrom: '0.0.0',
    },
    messages: {
      'no-swap': 'jQuery.swap() is deprecated',
    },
    type: 'problem',
  },
  create: context => ({
    MemberExpression: node => {
      const { object, property } = node

      if (
        !isJQuery(object) ||
        property.type !== 'Identifier' ||
        property.name !== 'swap'
      ) {
        return
      }

      context.report({
        node: property,
        messageId: 'no-swap',
      })
    },
  }),
}
