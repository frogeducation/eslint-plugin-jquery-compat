const kebabCase = require('lodash.kebabcase')

const REGEXP_CAPITALISED_HTML_DATA_ATTRIBUTE =
  /data-([a-z]*[A-Z]+[a-z]*)+\s*=\s*['"]/

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.data() always sets/gets camelCased names',
      detail: {
        body:
          'Data attribute capitalisation is now standardised in jQuery; only\n' +
          'word-boundaries in kebab-cased HTML data attributes are respected.\n' +
          '\n' +
          'Keeping HTML data attributes lowercased avoids confusion.',
        examples: {
          correct: ['$(\'<div data-hello-world="yes" />\')'],
          incorrect: [
            "$('<div data-helloWorld=\"no\" />').data('helloWorld') // --> undefined\n" +
              '$(\'<div data-helloWorld="no" />\').data(\'helloworld\') // --> "no"',
          ],
        },
        links: ['[`.data()`](https://api.jquery.com/data/)'],
      },
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/master/warnings.md#jqmigrate-jquerydata-always-setsgets-camelcased-names',
      tags: ['v3.0'],
      removed: '3.0.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-capitalised-html-data-attributes':
        'Use lowercase for HTML data attribute names',
    },
    type: 'problem',
    fixable: 'code',
  },
  create: context => ({
    Literal: node => {
      const { value } = node

      if (
        typeof value !== 'string' ||
        !REGEXP_CAPITALISED_HTML_DATA_ATTRIBUTE.test(value)
      ) {
        return
      }

      const loc = node.loc.start
      const match = value.match(/[A-Z]+/)
      const sourceCode = context.getSourceCode()

      context.report({
        messageId: 'no-capitalised-html-data-attributes',
        node,
        loc: {
          ...loc,
          column: loc.column + match.index + 1,
        },
        fix: fixer =>
          fixer.replaceTextRange(
            [
              sourceCode.getIndexFromLoc({
                line: loc.line,
                column: loc.column + match.index,
              }),
              sourceCode.getIndexFromLoc({
                line: loc.line,
                column: loc.column + match.index + match[0].length + 1,
              }),
            ],
            kebabCase(value.substr(match.index - 1, match[0].length + 1))
          ),
      })
    },
  }),
}
