const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const AJAX_EVENTS = [
  'ajaxStart',
  'ajaxStop',
  'ajaxSend',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
]

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/no-scoped-ajax-events',
  rules['no-scoped-ajax-events'],
  {
    valid: AJAX_EVENTS.map(methodName => ({
      code: `$(document).${methodName}(function() { return; })`,
    })),
    invalid: AJAX_EVENTS.map(methodName => [
      {
        code: `$(document).find("div").${methodName}(function() { return; })`,
        errors: [
          {
            messageId: 'no-scoped-ajax-events',
            line: 1,
            column: 25,
            data: {
              fn: methodName,
            },
          },
        ],
      },
      {
        code: `jQuery("div").${methodName}(function() { return; })`,
        errors: [
          {
            messageId: 'no-scoped-ajax-events',
            data: {
              fn: methodName,
            },
          },
        ],
      },
      {
        code: `$container.${methodName}(function() { return; })`,
        errors: [
          {
            messageId: 'no-scoped-ajax-events',
            data: {
              fn: methodName,
            },
          },
        ],
      },
    ]).reduce((acc, next) => acc.concat(next)),
  }
)
