const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.clean() is deprecated',
      detail: {
        body: '**Cause**: `jQuery.buildFragment()` and `jQuery.clean()` are undocumented internal methods. The signature of `jQuery.buildFragment()` was changed in jQuery 1.8 and 1.9, and `jQuery.clean()` was removed in 1.9. However, we are aware of some plugins or other code that might be using them.\n' +
          '\n' +
          '**Solution**: Rewrite any code that makes use of these or any other undocumented methods. For example the `jQuery.parseHTML()` method, introduced in jQuery 1.8, can convert HTML to an array of DOM elements that you can append to a document fragment.',
        examples: {
          incorrect: [
            '$.clean()'
          ]
        },
        links: [
          '[JQMIGRATE: jQuery.clean() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryclean-is-deprecated)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryclean-is-deprecated',
      tags: [ 'v1.9' ],
      removed: '1.9.0',
      fixFrom: '0.0.0'
    },
    messages: {
      'no-clean': 'jQuery.clean() is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    CallExpression: node => {
      if (
        node.callee.type !== 'MemberExpression' ||
        !isJQuery(node.callee.object) ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "clean"
      ) {
        return
      }

      context.report({
        node: node.callee.property,
        messageId: 'no-clean'
      })
    }
  })
}