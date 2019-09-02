const { detectJQueryCollections } = require('../util')

const DEPRECATED_METHODS = [
  'error',
  'load',
  'unload'
]

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated event method shortcuts',
      category: 'Possible Errors',
      recommended: true
    },
    messages: {
      'no-deprecated-event-methods':
        'jQuery.fn.{{fn}}(handler) is deprecated, use $(...).on(\'{{fn}}\', handler) instead'
    },
    type: 'problem',
    fixable: true
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch, foundOnlyPositiveMatches }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.callee.type !== "MemberExpression" ||
        node.callee.property.type !== "Identifier" ||
        !DEPRECATED_METHODS.includes(node.callee.property.name)
      ) {
        return
      }

      const identifier = node.callee.property;

      const report = {
        node: identifier,
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: identifier.name
        }
      }

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          [identifier.range[0], identifier.range[1] + 1],
          `on('${identifier.name}', `
        )
      }

      context.report(report)
    }
  }))
}
