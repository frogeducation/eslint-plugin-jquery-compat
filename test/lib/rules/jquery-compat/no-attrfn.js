const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-attrfn', rules['no-attrfn'], {
  valid: [
    {
      code: '$(".attrFn")'
    }
  ],
  invalid: [
    {
      code: '$.attrFn',
      errors: [{
        messageId: 'no-attrfn',
        line: 1,
        column: 3
      }]
    },
    {
      code: 'jQuery.attrFn',
      errors: [{
        messageId: 'no-attrfn'
      }]
    }
  ]
})
