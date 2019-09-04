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
      description: 'JQMIGRATE: \'hover\' pseudo-event is deprecated, use \'mouseenter mouseleave\'',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-hover-pseudo-event-is-deprecated-use-mouseenter-mouseleave',
      tags: [ 'v1.9' ],
      deprecated: '1.8.0',
      removed: '1.9.0',
      fixFrom: '1.0.0'
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

      const arg0 = resolveIdentifier(args[0], context) || args[0]

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
