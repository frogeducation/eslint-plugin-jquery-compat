const { RuleTester } = require('eslint')

const rules = require('../../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/jmvc/no-hover-event',
  rules['jmvc/no-hover-event'],
  {
    valid: [
      {
        code: '$.Controller("MyController", {}, { "div.foo click": function() {} })',
      },
      {
        code: '$.Controller("MyController", {}, { "div.foo,div.bar click": function() {} })',
      },
      {
        code: '$.Controller("MyController", {}, { "div.foo, div.bar click": function() {} })',
      },
      {
        code: '$.Controller("MyController", {}, { "div.foo, div.bar {click}": function() {} })',
      },
    ],
    invalid: [
      {
        code: '$.Controller("MyController", {}, { "div.foo hover": function() {} })',
        errors: [
          {
            messageId: 'no-hover-event',
            line: 1,
            column: 45,
          },
        ],
      },
      {
        code: '$.Controller("MyController", {}, { "div.foo, div.bar hover": function() {} })',
        errors: [
          {
            messageId: 'no-hover-event',
            line: 1,
            column: 54,
          },
        ],
      },
    ],
  }
)
