const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/html-string-must-start-with-tag', rules['html-string-must-start-with-tag'], {
  valid: [
    {
      code: '$("<h1>foo</h1>")'
    }
  ],
  invalid: [
    {
      code: '$("h1>foo</h1>")',
      errors: [{
        messageId: 'html-string-must-start-with-tag'
      }]
    },
    {
      // jquery-migrate trims string before testing, but jquery-actual does not.
      code: '$(" <h1>foo</h1>")',
      errors: [{
        messageId: 'html-string-must-start-with-tag'
      }]
    },
    {
      code: '$foo.append("hello <h1>foo</h1>")',
      errors: [{
        messageId: 'html-string-must-start-with-tag'
      }]
    }
  ]
})
