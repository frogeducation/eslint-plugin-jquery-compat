const { detectJQueryCollections, resolveIdentifier } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of .attr("value")',
      category: 'Possible Errors',
      recommended: true
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

      if (arg0.type !== 'Literal' || arg0.value !== 'value') return

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
