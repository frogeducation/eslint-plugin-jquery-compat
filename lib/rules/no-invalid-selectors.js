const { isJQuery, detectJQueryCollections, resolve } = require('../util')
const CSSselect = require('css-select')

const selectorMethods = [
  "add",
  "addBack",
  "children",
  "closest",
  "filter",
  "find",
  "has",
  "is",
  "next",
  "nextAll",
  "nextUntil",
  "not",
  "parent",
  "parents",
  "parentsUntil",
  "prev",
  "prevAll",
  "prevUntil",
  "siblings"
]

const jQueryPseudoClasses = [
  'animated',
  'button',
  'checkbox',
  'even',
  'file',
  'first',
  'header',
  'hidden',
  'image',
  'input',
  'last',
  'odd',
  'parent',
  'password',
  'radio',
  'reset',
  'selected',
  'submit',
  'text',
  'visible'
]

const jQueryPseudoFunctions = [
  'eq',
  'gt',
  'has',
  'lt'
]

const otherPseudoCorrections = [
  'hover'
]

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
  ) => {
    const optionsObject = {
      ...{allowJQueryExtensions: false},
      ...(context.options.filter(option => typeof option === 'object')[0] || {})
    }

    const { allowJQueryExtensions } = optionsObject

    return ({
      "CallExpression:exit": node => {
        if (
          !(isJQuery(node.callee) || foundAPositiveMatch(node)) ||
          !Array.isArray(node.arguments) ||
          node.arguments.length < 1
        ) {
          return
        }

        if (
          node.callee.type === "MemberExpression" &&
          !selectorMethods.includes(node.callee.property.name)
        ) {
          return
        }

        const maybeSelector = resolve()(node.arguments[0], context)

        if (
          typeof maybeSelector !== "string" ||
          maybeSelector.indexOf('<') === 0
        ) {
          return
        }

        const selector = maybeSelector
        let correctedSelector = selector

        if (allowJQueryExtensions) {
          jQueryPseudoFunctions.forEach(pseudoFunc => {
            correctedSelector = correctedSelector.replace(RegExp(`/:${pseudoFunc}\\b/`, "g"), ':not')
          })
          jQueryPseudoClasses.forEach(pseudoClass => {
            correctedSelector = correctedSelector.replace(RegExp(`:${pseudoClass}\\b`, "g"), ':empty')
          })
        }

        otherPseudoCorrections.forEach(pseudoClass => {
          correctedSelector = correctedSelector.replace(RegExp(`:${pseudoClass}\\b`, "g"), ':empty')
        })

        try {
          CSSselect.compile(correctedSelector)
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
    })
  })
}
