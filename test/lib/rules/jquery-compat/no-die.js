const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-die', rules['no-die'], {
  valid: [
    {
      code: '$("body").off("click", ".something")'
    }
  ],
  invalid: [
    {
      code: '$(".something").die("click")',
      errors: [{
        messageId: 'no-die'
      }]
    }
  ]
})
