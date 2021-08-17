const {
  isHTMLString,
  resolveIdentifier,
  detectJQueryCollections,
} = require('../util')

module.exports = {
  meta: {
    docs: {
      description:
        "JQMIGRATE: `$(html)` HTML strings must start with '<' character",
      detail: {
        body:
          '**Cause:** In jQuery 1.9, HTML strings passed to `$()` must start with a tag; in other words the first character of the string must be a `<` character. There _cannot_ be any preceding characters, including whitespace. This is done to reduce the chances of inadvertent execution of scripts that might be present in HTML that is obtained from the URL, AJAX, or other sources. Use of simple literal HTML strings like `$("<div />")` or `$("<p>hello</p>")` are unaffected since they should not have leading spaces or text.\n' +
          '\n' +
          '**Solution**: Use the `$.parseHTML()` method to parse arbitrary HTML, especially HTML from external sources. To obtain a jQuery object that has the parsed HTML without running scripts, use `$($.parseHTML("string"))`. To run scripts in the HTML as well, use `$($.parseHTML("string", document, true))` instead. We do not recommend running `$.trim()` on the string to circumvent this check.',
        examples: {
          incorrect: ['$("hello <strong>world</strong>")'],
          correct: [
            '$($.parseHTML("hello <strong>world</strong>"))',
            '$("<span>hello <strong>world</strong></span>")',
          ],
        },
        links: [
          "[JQMIGRATE: `$(html)` HTML strings must start with '<' character](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-html-strings-must-start-with--character)",
          '[$.parseHTML](https://api.jquery.com/jQuery.parseHTML)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-html-strings-must-start-with--character',
      tags: ['v1.9'],
      removed: '1.9.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'html-string-must-start-with-tag':
        "HTML strings must start with '<' character",
    },
    type: 'problem',
  },
  create: detectJQueryCollections((context, { foundAPositiveMatch }) => ({
    'CallExpression:exit': node => {
      if (!foundAPositiveMatch(node)) return

      const args = node.arguments
        .map(arg =>
          arg.type === 'Identifier' ? resolveIdentifier(arg, context) : arg
        )
        .filter(arg => arg)

      args.forEach(arg => {
        if (
          arg.type === 'Literal' &&
          isHTMLString(arg.value) &&
          !/^</.test(arg.value)
        ) {
          context.report({
            node: arg,
            messageId: 'html-string-must-start-with-tag',
          })
        }
      })
    },
  })),
}
