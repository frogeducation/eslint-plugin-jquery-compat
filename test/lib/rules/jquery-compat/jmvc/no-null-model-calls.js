const { RuleTester } = require('eslint')

const rules = require('../../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/jmvc/no-null-model-calls', rules['jmvc/no-null-model-calls'], {
  valid: [
    {
      code: 'Foo.Models.Bar.Baz.findAll({ quux: "corge" })'
    },
    {
      code: 'Foo.Bar.Baz.findAll({ quux: null })'
    },
    {
      code: 'Foo.Models.Baz.extend({ attributes: { something: null } })'
    }
  ],
  invalid: [
    {
      code: `Foo.Models.Bar.Baz.findAll({ baz: null })`,
      errors: [{
        messageId: 'no-null-model-calls',
        line: 1,
        column: 28,
        data: {
          value: null,
          path: '.baz'
        }
      }]
    },
    {
      code: `Foo.Models.Bar.Baz.quux({ corge: undefined })`,
      errors: [{
        messageId: 'no-null-model-calls',
        line: 1,
        column: 25,
        data: {
          value: undefined,
          path: '.corge'
        }
      }]
    },
    {
      code: `var params = {};
      params.corge = undefined;
      params.corge = null;
      Foo.Models.Bar.Baz.quux(params)`,
      errors: [{
        messageId: 'no-null-model-calls',
        line: 4,
        column: 31,
        data: {
          value: null,
          path: '.corge'
        }
      }]
    },
    {
      code: `Foo.Models.Bar.Baz.extend({ defaults: { foo: null } })`,
      errors: [{
        messageId: 'no-null-model-defaults',
        line: 1,
        column: 27,
        data: {
          value: null,
          path: '.defaults.foo'
        }
      }]
    }
  ]
})
