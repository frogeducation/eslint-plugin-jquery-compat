const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-clean', rules['no-clean'], {
  valid: [
    {
      code: '$(".clean()")',
    },
    {
      code: 'jQuery(".clean()")',
    },
    {
      code: '$foo.controller().clean()',
    },
  ],
  invalid: [
    {
      code: '$.clean()',
      errors: [
        {
          messageId: 'no-clean',
          line: 1,
          column: 3,
        },
      ],
    },
    {
      code: 'jQuery.clean()',
      errors: [
        {
          messageId: 'no-clean',
        },
      ],
    },
  ],
})
