const { detectJQueryCollections } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated .size() function',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnsize-is-deprecated-use-the-length-property',
      version: '1.9'
    },
    messages: {
      'no-fn-size':
        'jQuery.fn.size() is deprecated, use the .length property instead'
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
        node.arguments.length > 0 ||
        node.callee.type !== "MemberExpression" ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "size"
      ) {
        return
      }

      const identifier = node.callee.property

      const report = {
        node: identifier,
        messageId: 'no-fn-size'
      }

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          [identifier.range[0], node.range[1]],
          'length'
        )
      }

      context.report(report)
    }
  }))
}
