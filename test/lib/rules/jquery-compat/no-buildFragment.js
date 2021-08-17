const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-buildFragment', rules['no-buildFragment'], {
  valid: [
    {
      code: '$(".buildFragment()")',
    },
    {
      code: 'jQuery(".buildFragment()")',
    },
    {
      code: '$foo.controller().buildFragment()',
    },
  ],
  invalid: [
    {
      code: '$.buildFragment()',
      errors: [
        {
          messageId: 'no-buildFragment',
          line: 1,
          column: 3,
        },
      ],
    },
    {
      code: 'jQuery.buildFragment()',
      errors: [
        {
          messageId: 'no-buildFragment',
        },
      ],
    },
  ],
})
