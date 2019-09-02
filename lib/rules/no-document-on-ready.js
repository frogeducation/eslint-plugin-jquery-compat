const { detectJQueryCollections, resolveIdentifier } = require('../util')

const safeResolveIdentifier = (node, context) => resolveIdentifier(node, context) || node

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $(document).on("ready")',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-ready-event-is-deprecated'
    },
    messages: {
      'no-document-on-ready': '\'ready\' event is deprecated; use' +
        '$(document).ready(fn) or $(fn)'
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
        node.callee.property.name !== 'on' ||
        node.arguments.length < 2 ||
        safeResolveIdentifier(node.arguments[0], context).value !== 'ready'
      ) {
        return
      }

      const report = {
        node: node.callee.property,
        messageId: 'no-document-on-ready'
      };

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          [node.callee.property.range[0], node.arguments[1].range[0]],
          'ready('
        )
      }

      context.report(report)
    }
  }))
}
