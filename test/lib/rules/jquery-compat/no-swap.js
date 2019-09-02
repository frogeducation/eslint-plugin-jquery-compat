const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-swap', rules['no-swap'], {
  valid: [
    {
      code: '$(".swap()")'
    },
    {
      code: 'something.swap()'
    },
    {
      code: 'jQuery(".swap()")'
    }
  ],
  invalid: [
    {
      code: '$.swap($(".example"), { css: "properties" }, function() {})',
      errors: [{
        messageId: 'no-swap'
      }]
    },
    {
      code: 'jQuery.swap()',
      errors: [{
        messageId: 'no-swap'
      }]
    }
  ]
})
