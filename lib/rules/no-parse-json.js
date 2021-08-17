const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.parseJSON requires a valid JSON string',
      detail: {
        body:
          'As of jQuery 1.9+ `$.parseJSON` is identical to native `JSON.parse` and will not\n' +
          'attempt to "fix" invalid JSON.\n' +
          '\n' +
          'To retain the old behaviour and "fix" invalid falsy behaviour, use:\n' +
          '\n' +
          '```js\n' +
          "JSON.parse(input || 'null')\n" +
          '```',
        examples: {
          correct: ['JSON.parse(input)', "JSON.parse(input || 'null')"],
          incorrect: ['$.parseJSON(input)', 'jQuery.parseJSON(input)'],
        },
        links: [
          '[`jQuery.parseJSON()`](http://api.jquery.com/jQuery.parseJSON/)',
        ],
      },
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryparsejson-requires-a-valid-json-string',
      tags: ['v1.9'],
      deprecated: '3.0.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-parse-json': 'Use JSON.parse instead of $.parseJSON',
    },
    type: 'problem',
    fixable: 'code',
  },
  create: context => ({
    CallExpression: node => {
      const { object, property } = node.callee

      if (
        node.callee.type !== 'MemberExpression' ||
        !isJQuery(object) ||
        property.name !== 'parseJSON'
      ) {
        return
      }

      const sourceCode = context.getSourceCode()
      const arg0 = sourceCode.getText(node.arguments[0])

      context.report({
        node: property,
        messageId: 'no-parse-json',
        fix: fixer => [
          fixer.replaceText(node.callee, 'JSON.parse'),
          fixer.replaceText(node.arguments[0], `${arg0} || 'null'`),
        ],
      })
    },
  }),
}
