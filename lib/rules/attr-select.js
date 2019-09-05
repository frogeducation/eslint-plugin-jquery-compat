const { detectJQueryCollections, resolveIdentifier } = require('../util')

const BANNED_ATTRS = [
  'selected',
  'checked',
  'disabled'
]

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: `jQuery.fn.attr(\'selected\')` might use property instead of attribute',
      detail: {
        body: '**Cause**: Prior to jQuery 1.9, `$().attr("checked")` etc. would sometimes use the checked|selected *property* instead of the *attribute* when interacting with non-XML elements, despite the fact that browsers and the HTML specifications allow the properties (current state) to differ from the attributes (initial/default state). This was a holdover from earlier versions of jQuery that did not offer `$().prop`.\n' +
          '\n' +
          '**Solution**: Boolean properties should generally not be passed to `$().attr` at all; replace with `$().prop` unless you truly intend to update the underlying HTML *attribute*.',
        examples: {
          incorrect: BANNED_ATTRS.map(attr => `if ($foo.attr("${attr}")) { /* ... */ }`),
          correct: BANNED_ATTRS.map(attr => `if ($foo.prop("${attr}")) { /* ... */ }`)
        },
        links: [
          '[JQMIGRATE: `jQuery.fn.attr(\'selected\')` might use property instead of attribute](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrselected-might-use-property-instead-of-attribute)',
          '[`.attr`](http://api.jquery.com/attr/)',
          '[`.prop`](http://api.jquery.com/prop/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrselected-might-use-property-instead-of-attribute',
      tags: [ 'v1.9' ],
      removed: '1.9.0',
      fixFrom: '1.6.0'
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
        node: node.callee.property,
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
