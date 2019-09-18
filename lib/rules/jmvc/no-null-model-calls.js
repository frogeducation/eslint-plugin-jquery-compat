const { resolve, badValueWalker, detectIdentifierInMemberExpression } = require('../../util')

const BANNED_VALUES = [ null, undefined ]

module.exports = {
  meta: {
    docs: {
      description: '$.param no longer encodes null/undefined',
      detail: {
        body: '**Cause**: `jQuery.param()` (used to build query string parameters in api calls from models) no longer encodes `null` or `undefined` as strings; in stead it encodes them as empty strings.\n' +
          '\n' +
          '**Solution**: Rewrite any code that passes `null` or `undefined` to model calls to pass these as strings, or omit them, as appropriate.',
        examples: {
          incorrect: [
            'Foo.Models.Bar.baz({ foo: null, bar: undefined, baz: 42 })'
          ],
          correct: [
            'Foo.Models.Bar.baz({ foo: "null", bar: "undefined", baz: 42 })',
            'Foo.Models.Bar.baz({ baz: 42 })'
          ]
        },
        links: [
          '[This was changed in v1.8.0](https://github.com/jquery/jquery/commit/36d2d9ae937f626d98319ed850905e8d1cbfd078)',
          '[Discussion of the bug](https://bugs.jquery.com/ticket/8653)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      tags: [ 'v1.9' ],
      removed: '1.8.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'no-null-model-calls': 'Cannot encode {{value}} in model call input on path {{path}}'
    },
    type: 'problem'
  },
  create: detectIdentifierInMemberExpression(
    ({ name }) => ['Models'].includes(name)
  )(
    (context, { memberExpressionContainsIdentifier }) => ({
      "CallExpression:exit": node => {
        if (
          node.callee.type !== 'MemberExpression' ||
          !memberExpressionContainsIdentifier(node.callee) ||
          node.arguments.length < 1
        ) {
          return
        }

        const badArgumentTuples = node.arguments
          .map(node => ({
            node,
            value: resolve()(node, context)
          }))
          .filter(({ value }) => typeof value === 'object')
          .map(tuple => ({
            ...tuple,
            badValue: badValueWalker(BANNED_VALUES)(tuple.value)
          }))
          .filter(({ badValue }) => !!badValue)

        if (badArgumentTuples.length < 1) { return }

        const {
          node: badNode,
          badValue
        } = badArgumentTuples[0]

        context.report({
          node: badNode,
          messageId: 'no-null-model-calls',
          data: {
            value: "" + badValue.value,
            path: badValue.path.split('/').join('.')
          }
        })
      }
    })
  )
}