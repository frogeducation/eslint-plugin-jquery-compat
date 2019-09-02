const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-global-handle', rules['no-global-handle'], {
  valid: [
    {
      code: `$(document).on('event', function() { return; })`
    }
  ],
  invalid: [
    {
      code: `$.event.handle('event', function() { return; })`,
      errors: [{
        messageId: 'no-global-handle'
      }]
    },
    {
      code: `jQuery.event.handle('event', function() { return; })`,
      errors: [{
        messageId: 'no-global-handle'
      }]
    }
  ]
})
