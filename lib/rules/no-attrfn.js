const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: `jQuery.attrFn` is deprecated',
      detail: {
        body:
          '**Cause:** Prior to jQuery 1.8, the undocumented `jQuery.attrFn` object provided a list of properties supported by the `$(html, props)` method. It is no longer required as of jQuery 1.8, but some developers "discovered" it by reading the source and began to use it. Their code still expects `jQuery.attrFn` to be present, attempts to assign values to it, and will throw errors if it is not present.\n' +
          '\n' +
          '**Solution:** Ensure that you are using the latest version of jQuery UI (1.8.21 or later) and jQuery Mobile (1.2.1 or later); they no longer use `jQuery.attrFn`. Examine any third-party plugins for the string `attrFn` and report its use to the plugin authors (not to jQuery team).',
        examples: {
          incorrect: ['$.attrFn.foo = "bar"'],
        },
        links: [
          '[JQMIGRATE: `jQuery.attrFn` is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryattrfn-is-deprecated)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryattrfn-is-deprecated',
      tags: ['v1.9'],
      removed: '1.9.0',
      deprecated: '1.8.0',
      fixFrom: '0.0.0',
    },
    messages: {
      'no-attrfn': 'jQuery.attrFn is deprecated in jQuery 1.8',
    },
    type: 'problem',
  },
  create: context => ({
    Identifier: node => {
      if (
        node.type !== 'Identifier' ||
        node.name !== 'attrFn' ||
        node.parent.type !== 'MemberExpression' ||
        !isJQuery(node.parent.object)
      ) {
        return
      }

      context.report({
        node,
        messageId: 'no-attrfn',
      })
    },
  }),
}
