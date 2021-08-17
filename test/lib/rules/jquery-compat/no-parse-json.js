const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-parse-json', rules['no-parse-json'], {
  valid: [
    {
      code: 'var data = JSON.parse(window.__data)',
    },
  ],
  invalid: [
    {
      code: 'var data = $.parseJSON(window.__data)',
      errors: [
        {
          messageId: 'no-parse-json',
          line: 1,
          column: 14,
        },
      ],
      output: "var data = JSON.parse(window.__data || 'null')",
    },
    {
      code: 'var data = jQuery.parseJSON(window.__data)',
      errors: [
        {
          messageId: 'no-parse-json',
        },
      ],
      output: "var data = JSON.parse(window.__data || 'null')",
    },
  ],
})
