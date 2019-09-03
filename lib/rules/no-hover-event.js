const { detectJQueryCollections, resolveIdentifier } = require('../util')

const bindingFunctions = [
  'on',
  'bind',
  'delegate',
  'live'
]

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of .on("hover")',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-hover-pseudo-event-is-deprecated-use-mouseenter-mouseleave',
      version: '1.9'
    },
    messages: {
      'no-hover-event': "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
    },
    type: 'problem',
    fixable: 'code'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch, foundOnlyPositiveMatches }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.callee.type !== 'MemberExpression' ||
        node.callee.property.type !== 'Identifier' ||
        !bindingFunctions.includes(node.callee.property.name)
      ) {
        return
      }

      const args = node.arguments

      const arg0 = args[0] && args[0].type === 'Identifier'
        ? resolveIdentifier(args[0], context)
        : args[0]

      if (arg0.type !== 'Literal' || arg0.value !== 'hover') return

      const report = {
        node: node.arguments[0],
        messageId: 'no-hover-event'
      }

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          node.arguments[0].range,
          '"mouseenter mouseleave"'
        )
      }

      context.report(report)
    }
  }))
}
