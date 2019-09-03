const { detectJQueryCollections, resolveIdentifier } = require('../util')

const BANNED_ATTRS = [
  'selected',
  'checked',
  'disabled'
]

module.exports = {
  meta: {
    docs: {
      description: 'Warn when using binary attributes where properties may differ e.g. .attr("select")',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrselected-might-use-property-instead-of-attribute',
      version: '1.9'
    },
    messages: {
      'attr-select': '.attr("{{string}}") is only for the initial html ' +
        'value, it no longer {{getOrSet}} DOM properties; use ' +
        '.prop("{{string}}") in stead'
    },
    type: 'problem',
    fixable: 'code'
  },
  create: detectJQueryCollections((context, { foundAPositiveMatch, foundOnlyPositiveMatches }) => ({
    'CallExpression:exit': node => {
      if (
        node.callee.type !== 'MemberExpression' ||
        node.callee.property.type !== 'Identifier' ||
        node.callee.property.name !== 'attr' ||
        node.arguments.length < 1 ||
        !foundAPositiveMatch(node)
      ) { return }

      const args = node.arguments;
      const arg0 = (
        args[0].type === 'Identifier' ?
          resolveIdentifier(args[0], context) :
          args[0]
      )

      if (!BANNED_ATTRS.includes(arg0.value)) { return }

      const sourceCode = context.getSourceCode();

      const report = {
        node,
        messageId: 'attr-select',
        data: {
          getOrSet: args.length > 1 ? 'sets' : 'gets',
          string: arg0.value
        }
      }

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          [
            sourceCode.getIndexFromLoc(node.callee.property.loc.start),
            sourceCode.getIndexFromLoc(node.callee.property.loc.end)
          ],
          'prop'
        )
      }

      context.report(report)
    }
  }))
}
