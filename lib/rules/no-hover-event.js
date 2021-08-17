const { detectJQueryCollections, resolveIdentifier } = require('../util')

const bindingFunctions = ['on', 'bind', 'delegate', 'live']

module.exports = {
  meta: {
    docs: {
      description:
        "JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'",
      detail: {
        body:
          '**Cause:** Until jQuery 1.9, the string "hover" was allowed as an alias for the string "mouseenter mouseleave" when attaching an event handler. This unusual exception provided no real benefit and prevented the use of the name "hover" as a triggered event. _Note: This is not related to the `.hover()` method, which has not been deprecated._\n' +
          '\n' +
          '**Solution:** Replace use of the string "hover" with "mouseenter mouseleave" within any `.on()`, `.bind()`, `.delegate()`, or `.live()` event binding method.',
        examples: {
          correct: [
            '$foo.on("mouseenter mouseleave", inOutCallback)',
            '$foo.on("mouseenter", inCallback)',
            '$foo.hover(inCallback, outCallback)',
            '$foo.hover(inOutCallback)',
          ],
          incorrect: ['$foo.on("hover", callback)'],
        },
        links: [
          "[JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-hover-pseudo-event-is-deprecated-use-mouseenter-mouseleave)",
          '[.hover](https://api.jquery.com/hover/)',
          '[.on](https://api.jquery.com/on/)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-hover-pseudo-event-is-deprecated-use-mouseenter-mouseleave',
      tags: ['v1.9'],
      deprecated: '1.8.0',
      removed: '1.9.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-hover-event':
        "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'",
    },
    type: 'problem',
    fixable: 'code',
  },
  create: detectJQueryCollections(
    (context, { foundAPositiveMatch, foundOnlyPositiveMatches }) => ({
      'CallExpression:exit': node => {
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
          messageId: 'no-hover-event',
        }

        if (foundOnlyPositiveMatches(node)) {
          report.fix = fixer =>
            fixer.replaceTextRange(
              node.arguments[0].range,
              '"mouseenter mouseleave"'
            )
        }

        context.report(report)
      },
    })
  ),
}
