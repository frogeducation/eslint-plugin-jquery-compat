const { detectJQueryCollections, resolveIdentifier } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: `jQuery.fn.attr(\'value\')` no longer gets properties',
      detail: {
        body: 'Prior to jQuery 1.9, `$().attr("value")` retrieved the value property instead of\n' +
          'the value attribute (which generally reflects the value that was read from HTML\n' +
          'markup). `$().attr( "value", val )` set the value property instead of the value\n' +
          'attribute. This caused inconsistent behavior with selectors referencing the\n' +
          'value attribute.\n' +
          '\n' +
          'Use $().val() (for form controls) or $().prop("value") (for other elements) to\n' +
          'get the current value, and try to explicitly limit the use of [value=…] in\n' +
          'selectors to input and/or option elements wherever possible.  Use $().val( val )\n' +
          '(for form controls) or $().prop( "value", val ) (for other elements) to set the\n' +
          'current value.',
        examples: {
          correct: [
            'var value = $(\'input.foo\').val()\n' +
            '$(\'input.foo\').val(\'newValue\')\n' +
            '\n' +
            'var value2 = $(\'div.bar\').prop(\'value\')\n' +
            '$(\'div.bar\').prop(\'value\', \'newValue\')'
          ],
          incorrect: [
            'var value = $(\'input.foo\').attr(\'value\')\n' +
            '$(\'input.foo\').attr(\'value\', \'newValue\')'
          ]
        }
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrvalue-no-longer-gets-properties',
      tags: [ 'v1.9' ],
      removed: '1.9.0',
      fixFrom: '1.6.0'
    },
    messages: {
      'no-attr-value': '.attr("value") no longer {{getOrSet}} properties; use' +
        '$().val() for form controls or $().prop("value") for other elements'
    },
    type: 'problem'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.callee.type !== 'MemberExpression' ||
        node.callee.property.type !== 'Identifier' ||
        node.callee.property.name !== 'attr'
      ) {
        return
      }

      const args = node.arguments

      const arg0 = args[0] && args[0].type === 'Identifier'
        ? resolveIdentifier(args[0], context)
        : args[0]

      if (!arg0 || arg0.type !== 'Literal' || arg0.value !== 'value') return

      context.report({
        node: node.callee.property,
        messageId: 'no-attr-value',
        data: {
          getOrSet: args.length > 1 ? 'sets' : 'gets'
        }
      })
    }
  }))
}
