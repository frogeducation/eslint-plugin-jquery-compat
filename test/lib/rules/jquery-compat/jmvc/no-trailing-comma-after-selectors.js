const { RuleTester } = require('eslint')

const rules = require('../../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/jmvc/no-trailing-comma-after-selector',
  rules['jmvc/no-trailing-comma-after-selector'],
  {
    valid: [
      {
        code:
          '$.Controller("MyController", {}, { "div.ok click": function() {} })'
      },
      {
        code:
          '$.Controller("MyController", {}, { "div.ok,div.stillok click": function() {} })'
      },
      {
        code:
          '$.Controller("MyController", {}, { "div.ok, div.stillok click": function() {} })'
      },
      {
        code:
          '$.Controller("MyController", {}, { "div.ok, div.stillok {click}": function() {} })'
      }
    ],
    invalid: [
      {
        code:
          '$.Controller("MyController", {}, { "div.ok, click": function() {} })',
        errors: [
          {
            messageId: 'no-trailing-comma-after-selector',
            line: 1,
            column: 43
          }
        ],
        output:
          '$.Controller("MyController", {}, { "div.ok click": function() {} })',
      },
      {
        code:
          '$.Controller("MyController", {}, { \'div.ok, click\': function() {} })',
        errors: [
          {
            messageId: 'no-trailing-comma-after-selector',
            line: 1,
            column: 43
          }
        ],
        output:
          '$.Controller("MyController", {}, { \'div.ok click\': function() {} })',
      },
      {
        code:
          '$.Controller("MyController", {}, { \'div.ok,div.notok, click\': function() {} })',
        errors: [
          {
            messageId: 'no-trailing-comma-after-selector',
            line: 1,
            column: 53
          }
        ],
        output:
          '$.Controller("MyController", {}, { \'div.ok,div.notok click\': function() {} })',
      },
      {
        code:
          '$.Controller("MyController", {}, { "div.notok, {click}": function() {} })',
        errors: [
          {
            messageId: 'no-trailing-comma-after-selector',
            line: 1,
            column: 46
          }
        ],
        output:
          '$.Controller("MyController", {}, { "div.notok {click}": function() {} })',
      },
      {
        code:
          '$.Controller("MyController", {}, { "div.notok, div.not, {click}": function() {} })',
        errors: [
          {
            messageId: 'no-trailing-comma-after-selector',
            line: 1,
            column: 55
          }
        ],
        output:
          '$.Controller("MyController", {}, { "div.notok, div.not {click}": function() {} })',
      },
      {
        code: `$.Controller("MyController", {}, {
          'input.ui-os-filter-box, keypress': function(el,ev) { }
        })`,
        errors: [
          {
            messageId: 'no-trailing-comma-after-selector',
            line: 2,
            column: 34
          }
        ],
        output: `$.Controller("MyController", {}, {
          'input.ui-os-filter-box keypress': function(el,ev) { }
        })`
      }
    ]
  }
)
