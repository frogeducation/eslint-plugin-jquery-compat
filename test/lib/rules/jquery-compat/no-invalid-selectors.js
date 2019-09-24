const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const invalidExamples = [
  `'div[data-value="something"'`,
  `'#.'`,
  `'div:nth-child(NaN)'`
]

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

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-invalid-selectors', rules['no-invalid-selectors'], {
  valid: selectorMethods
    .map(methodName => ({
      code: `$(document).${methodName}("div.className")`
    }))
    .concat([
      {
        code: `$(document).find("div:first")`,
        options: [
          {
            allowJQueryExtensions: true
          }
        ]
      },
      {
        code: `$(document).find("div:hover")`,
        options: [
          {
            allowJQueryExtensions: false
          }
        ]
      },
      {
        code: `$foo.append('div:first')`
      },
      {
        code: `$('<span>div:first</span>')`
      }
    ]),
  invalid: selectorMethods
    .map(methodName =>
      invalidExamples.map(selector => ({
        code: `$(document).${methodName}(${selector})`,
        errors: [{
          messageId: 'no-invalid-selectors',
          line: 1,
          column: `$(document).${methodName}(`.length + 1,
          data: {
            selector: selector.slice(1, -1),
            method: `$.fn.${methodName}()`
          }
        }]
      }))
    )
    .reduce((acc, next) => acc.concat(next), [])
    .concat(
      invalidExamples
        .map(selector => ({
          code: `$(${selector})`,
          errors: [{
            messageId: 'no-invalid-selectors',
            line: 1,
            column: 3,
            data: {
              selector: selector.slice(1, -1),
              method: '$()'
            }
          }]
        }))
    )
    .concat([
      {
        code: `$(document).find("div:nth-child(NaN)");
        `,
        errors: [{
          messageId: 'no-invalid-selectors',
          line: 1,
          column: 18,
          data: {
            selector: "div:nth-child(NaN)",
            method: '$.fn.find()'
          }
        }]
      },
      {
        code: `var bit = "div";
        var number = NaN;
        $(document).find(bit + ":nth-child(" + number + ")");
        `,
        errors: [{
          messageId: 'no-invalid-selectors',
          line: 3,
          column: 26,
          data: {
            selector: "div:nth-child(NaN)",
            method: '$.fn.find()'
          }
        }]
      },
      {
        code: `$(document).find("div:first")`,
        errors: [{
          messageId: 'no-invalid-selectors',
          line: 1,
          column: 18,
          data: {
            selector: "div:first",
            method: "$.fn.find()"
          },
          options: {
            allowJQueryExtensions: false
          }
        }]
      }
    ])
})
