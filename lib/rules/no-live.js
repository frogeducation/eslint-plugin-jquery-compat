const { detectJQueryCollections } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.fn.live() is deprecated',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnlive-is-deprecated-jqueryfndie-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.7.0',
      removed: '1.9.0',
      fixFrom: '1.7.0'
    },
    messages: {
      'no-live': '.live() was removed in jQuery 1.9, use .on() instead'
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
        node.callee.type !== "MemberExpression" ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "live"
      ) {
        return
      }

      const identifier = node.callee.property

      const report = {
        node: identifier,
        messageId: 'no-live'
      }

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          [identifier.range[0], identifier.range[1]],
          'on'
        )
      }

      context.report(report)
    }
  }))
}
