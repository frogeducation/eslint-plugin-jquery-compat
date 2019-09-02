const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-sub', rules['no-sub'], {
  valid: [
    {
      code: '$(".sub()")'
    },
    {
      code: 'something.sub()'
    },
    {
      code: 'jQuery(".sub()")'
    }
  ],
  invalid: [
    {
      code: '$.sub()',
      errors: [{
        messageId: 'no-sub'
      }]
    },
    {
      code: 'jQuery.sub()',
      errors: [{
        messageId: 'no-sub'
      }]
    }
  ]
})
