const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-andself', rules['no-andself'], {
  valid: [
    {
      code: '$(".foo").find(".bar").addBack()',
    },
  ],
  invalid: [
    {
      code: '$(".foo").find(".bar").andSelf()',
      errors: [
        {
          messageId: 'no-andself',
          line: 1,
          column: 24,
        },
      ],
      output: '$(".foo").find(".bar").addBack()',
    },
  ],
})
