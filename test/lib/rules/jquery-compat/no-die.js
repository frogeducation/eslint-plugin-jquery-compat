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
        messageId: 'no-die',
        line: 1,
        column: 17
      }],
      output: '$(".something").off("click")'
    },
    {
      code: '(true ? $(".something") : this.element.model()).die("click", function() {})',
      errors: [{
        messageId: 'no-die'
      }],
      output: '(true ? $(".something") : this.element.model()).die("click", function() {})'
    }
  ]
})
