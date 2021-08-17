const { detectJQueryCollections } = require('../util')

module.exports = {
  meta: {
    docs: {
      description:
        'JQMIGRATE: jQuery.fn.size() is deprecated; use the .length property',
      detail: {
        body:
          'The .size() method returns the number of elements in the current jQuery object,\n' +
          'but duplicates the more-efficient .length property which provides the same\n' +
          'functionality. As of jQuery 1.9 the .length property is the preferred way to\n' +
          'retrieve this value.\n' +
          '\n' +
          'Solution: Replace any use of .size() with .length.',
        examples: {
          correct: ["$('.foo').length"],
          incorrect: ["$('.foo').size()"],
        },
        links: [
          '[JQMIGRATE: jQuery.fn.size() is deprecated; use the .length property](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnsize-is-deprecated-use-the-length-property)',
          '[`.size()`](https://api.jquery.com/size)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnsize-is-deprecated-use-the-length-property',
      tags: ['v1.9'],
      deprecated: '1.8.0',
      removed: '3.0.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-fn-size':
        'jQuery.fn.size() is deprecated, use the .length property instead',
    },
    type: 'problem',
    fixable: 'code',
  },
  create: detectJQueryCollections(
    (context, { foundAPositiveMatch, foundOnlyPositiveMatches }) => ({
      'CallExpression:exit': node => {
        if (
          !foundAPositiveMatch(node) ||
          node.arguments.length > 0 ||
          node.callee.type !== 'MemberExpression' ||
          node.callee.property.type !== 'Identifier' ||
          node.callee.property.name !== 'size'
        ) {
          return
        }

        const identifier = node.callee.property

        const report = {
          node: identifier,
          messageId: 'no-fn-size',
        }

        if (foundOnlyPositiveMatches(node)) {
          report.fix = fixer =>
            fixer.replaceTextRange(
              [identifier.range[0], node.range[1]],
              'length'
            )
        }

        context.report(report)
      },
    })
  ),
}
