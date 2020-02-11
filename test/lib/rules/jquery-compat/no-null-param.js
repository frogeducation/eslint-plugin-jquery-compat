const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-null-param', rules['no-null-param'], {
  valid: [
    {
      code: '$.param({ null: "null" })'
    },
    {
      code: '$.param({ valid: 42 })'
    },
    {
      code: '$.param({ undefined: "undefined" })'
    },
    {
      code: '$.ajax("hello", { undefined: "undefined" })'
    },
    {
      code: `var data = { foo: null };
      data.foo = 42;
      $.ajax("hello", { data: data });`
    },
    {
      code: `$.ajax({ data: null });`
    }
  ],
  invalid: [
    {
      code: '$.param({ null: null })',
      errors: [{
        messageId: 'no-null-param',
        line: 1,
        column: 9,
        data: {
          value: 'null',
          path: '.null'
        }
      }]
    },
    {
      code: '$.ajax("hello", { data: { null: null } })',
      errors: [{
        messageId: 'no-null-ajax-data',
        line: 1,
        column: 17,
        data: {
          value: 'null',
          path: '.null'
        }
      }]
    },
    {
      code: '$.param({ undefined: undefined })',
      errors: [{
        messageId: 'no-null-param',
        line: 1,
        column: 9,
        data: {
          value: 'undefined',
          path: '.undefined'
        }
      }]
    },
    {
      code: `var value = null;
      $.param({ key: value })`,
      errors: [{
        messageId: 'no-null-param',
        line: 2,
        column: 15,
        data: {
          value: 'null',
          path: '.key'
        }
      }]
    },
    {
      code: `var obj = {key: null};
      $.param(obj)`,
      errors: [{
        messageId: 'no-null-param',
        line: 2,
        column: 15,
        data: {
          value: 'null',
          path: '.key'
        }
      }]
    },
    {
      code: `var obj = {};
      obj.key = 4;
      obj.key = null;
      $.param(obj)`,
      errors: [{
        messageId: 'no-null-param',
        line: 4,
        column: 15,
        data: {
          value: 'null',
          path: '.key'
        }
      }]
    },
    {
      code: `var obj = {a: {b: 4}};
      obj.a.b.c = null;
      $.param(obj)`,
      errors: [{
        messageId: 'no-null-param',
        line: 3,
        column: 15,
        data: {
          value: 'null',
          path: '.a.b.c'
        }
      }]
    },
    {
      code: `var obj = { a: { b: { c: undefined } } };
      $.param(obj)`,
      errors: [{
        messageId: 'no-null-param',
        line: 2,
        column: 15,
        data: {
          value: 'undefined',
          path: '.a.b.c'
        }
      }]
    },
    {
      code: `var obj = { data: { a: { b: { c: undefined } } } };
      $.ajax("hello", obj)`,
      errors: [{
        messageId: 'no-null-ajax-data',
        line: 2,
        column: 23,
        data: {
          value: 'undefined',
          path: '.a.b.c'
        }
      }]
    }
  ]
})
