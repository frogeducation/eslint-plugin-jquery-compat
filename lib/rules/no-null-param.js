const { isJQuery, resolve, badValueWalker } = require('../util')

const BANNED_VALUES = [ null, undefined ]

module.exports = {
  meta: {
    docs: {
      description: '$.param no longer encodes null/undefined',
      detail: {
        body: '**Cause**: `jQuery.param()` (used to build query string parameters in `$.ajax`) no longer encodes `null` or `undefined` as strings; in stead it encodes them as empty strings.\n' +
          '\n' +
          '**Solution**: Rewrite any code that passes `null` or `undefined` to `$.param` or `$.ajax` to pass these as strings, or omit them, as appropriate.',
        examples: {
          incorrect: [
            '$.param({ foo: null, bar: undefined, baz: 42 })'
          ],
          correct: [
            '$.param({ foo: "null", bar: "undefined", baz: 42 })',
            '$.param({ baz: 42 })'
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
      'no-null-param': 'Cannot encode {{value}} in jQuery.param() on path {{path}}',
      'no-null-ajax-data': 'Cannot encode {{value}} in data key passed to $.ajax on path {{path}}'
    },
    type: 'problem'
  },
  create: context => ({
    CallExpression: node => {
      if (
        node.callee.type !== 'MemberExpression' ||
        !isJQuery(node.callee.object) ||
        node.callee.property.type !== "Identifier" ||
        !["param", "ajax"].includes(node.callee.property.name) ||
        node.arguments.length < 1
      ) {
        return
      }

      const isParam = node.callee.property.name === "param"

      const relevantArgumentNode = (
        isParam ?
          node.arguments[0] :
          node.arguments.slice(-1)[0]
      )

      let argumentObject = resolve()(relevantArgumentNode, context)

      if (!isParam) {
        argumentObject = argumentObject['data']
      }

      if (typeof argumentObject !== "object" || argumentObject === null) { return }

      let foundBadValue = badValueWalker(BANNED_VALUES)(argumentObject)

      if (!foundBadValue) { return }

      context.report({
        node: relevantArgumentNode,
        messageId: isParam ? 'no-null-param' : 'no-null-ajax-data',
        data: {
          value: "" + foundBadValue.value,
          path: foundBadValue.path.split('/').join('.')
        }
      })
    }
  })
}