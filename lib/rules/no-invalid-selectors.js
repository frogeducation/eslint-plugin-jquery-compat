const { isJQuery, detectJQueryCollections, resolve } = require('../util')
const CSSselect = require('css-select')

module.exports = {
  meta: {
    docs: {
      description: 'Invalid selectors throw errors',
      detail: {
        body: '**Cause:** Sizzle may throw errors if an invalid selector is passed to a jQuery function.\n' +
          '\n' +
          'Sizzle is the CSS selector library maintained by the jQuery foundation, and used until jQuery v3.4.0.\n' +
          '\n' +
          '**Solution:** Update CSS selectors to avoid passing in invalid selectors.',
        examples: {
          incorrect: [
            '$("#."); // dot needs to be escaped',
            '$foo.find("div:nth-child(NaN)"); // Expects a number, got NaN',
            '$bar.is("[data-key=\\"value\\""); // no closing bracket "]"'
          ],
          correct: [
            '$("#\\\\.");',
            '$foo.find("div:nth-child(42)");',
            '$bar.is("[data-key=\\"value\\"]");'
          ]
        },
        links: []
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-ajax-events-should-be-attached-to-document',
      tags: [ 'v1.9' ],
      removed: '1.9.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'no-invalid-selectors': `Invalid selector passed to {{method}}: '{{selector}}'`
    },
    type: 'problem'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !(isJQuery(node.callee) || foundAPositiveMatch(node)) ||
        !Array.isArray(node.arguments) ||
        node.arguments.length < 1
      ) {
        return
      }

      const maybeSelector = resolve()(node.arguments[0], context)

      if (typeof maybeSelector !== "string") {
        return
      }

      const selector = maybeSelector

      try {
        CSSselect.compile(selector)
        return;
      } catch (error) {
        context.report({
          node: node.arguments[0],
          data: {
            method: isJQuery(node.callee) ? "$()" : `$.fn.${node.callee.property.name}()`,
            selector: selector
          },
          messageId: 'no-invalid-selectors'
        })
      }
    }
    // Identifier: node => {
    //   let name = node.name;
    //   if (
    //     !AJAX_EVENTS.includes(name)
    //   ) {
    //     return
    //   }
    //
    //   if (
    //     node.parent.type === "MemberExpression" &&
    //     node.parent.object.type === "CallExpression" &&
    //     isJQuery(node.parent.object.callee) &&
    //     node.parent.object.arguments.length === 1 &&
    //     node.parent.object.arguments[0].type === 'Identifier' &&
    //     node.parent.object.arguments[0].name === 'document'
    //   ) {
    //     return
    //   }
    //
    //   context.report({
    //     node,
    //     data: {
    //       fn: name
    //     },
    //     messageId: 'no-scoped-ajax-events'
    //   })
    // }
  }))
}
