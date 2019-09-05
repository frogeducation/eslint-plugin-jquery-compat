const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-fn-size', rules['no-fn-size'], {
  valid: [
    {
      code: '$(".foo").length'
    },
    {
      code: '$(".foo").find(".bar").length'
    },
    {
      code: '$foo.length'
    },
    {
      code: 'myObj.size()'
    }
  ],
  invalid: [
    {
      code: '$(".foo").size()',
      errors: [{
        messageId: 'no-fn-size',
        line: 1,
        column: 11
      }],
      output: '$(".foo").length'
    },
    {
      code: '$(".foo").find(".bar").size()',
      errors: [{
        messageId: 'no-fn-size'
      }],
      output: '$(".foo").find(".bar").length'
    },
    {
      code: '$foo.size()',
      errors: [{
        messageId: 'no-fn-size'
      }],
      output: '$foo.length'
    },
    {
      code: '(true ? $foo : this.element.model()).size()',
      errors: [{
        messageId: 'no-fn-size'
      }],
      output: '(true ? $foo : this.element.model()).size()'
    }
  ]
})
