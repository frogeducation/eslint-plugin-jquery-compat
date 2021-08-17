const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-live', rules['no-live'], {
  valid: [
    {
      code: '$("body").on("click", ".something", function() {})',
    },
  ],
  invalid: [
    {
      code: '$(".something").live("click", function() {})',
      errors: [
        {
          messageId: 'no-live',
          line: 1,
          column: 17,
        },
      ],
      output: '$(".something").on("click", function() {})',
    },
    {
      code: '(true ? $(".something") : this.element.model()).live("click", function() {})',
      errors: [
        {
          messageId: 'no-live',
        },
      ],
      output:
        '(true ? $(".something") : this.element.model()).live("click", function() {})',
    },
  ],
})
