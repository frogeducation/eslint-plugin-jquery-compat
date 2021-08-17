const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.sub() is deprecated',
      detail: {
        body:
          '**Cause:** The `jQuery.sub()` method provided an imperfect way for a plugin to isolate itself from changes to the `jQuery` object. Due to its shortcomings, it was deprecated in version 1.8 and removed in 1.9.\n' +
          '\n' +
          "**Solution:** Rewrite the code that depends on `jQuery.sub()`, use the minified production version of the jQuery Migrate plugin to provide the functionality, or extract the `jQuery.sub()` method from the plugin's source and use it in the application.",
        examples: {
          incorrect: ['$.sub(/*...*/)'],
        },
        links: [
          '[JQMIGRATE: jQuery.sub() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysub-is-deprecated)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysub-is-deprecated',
      tags: ['v1.9'],
      deprecated: '1.7.0',
      removed: '1.9.0',
    },
    messages: {
      'no-sub': 'jQuery.sub() is deprecated',
    },
    type: 'problem',
  },
  create: context => ({
    MemberExpression: node => {
      const { object, property } = node

      if (
        !isJQuery(object) ||
        property.type !== 'Identifier' ||
        property.name !== 'sub'
      ) {
        return
      }

      context.report({
        node: property,
        messageId: 'no-sub',
      })
    },
  }),
}
