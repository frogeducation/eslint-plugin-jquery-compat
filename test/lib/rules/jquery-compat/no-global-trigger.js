const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-global-trigger', rules['no-global-trigger'], {
  valid: [
    {
      code: `$(document).trigger('event')`
    }
  ],
  invalid: [
    {
      code: `$.event.trigger('event')`,
      errors: [{
        messageId: 'no-global-trigger',
        line: 1,
        column: 9
      }]
    },
    {
      code: `jQuery.event.trigger('event')`,
      errors: [{
        messageId: 'no-global-trigger'
      }]
    }
  ]
})
