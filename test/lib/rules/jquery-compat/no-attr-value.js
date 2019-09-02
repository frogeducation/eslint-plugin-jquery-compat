const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-attr-value', rules['no-attr-value'], {
  valid: [
    {
      code: '$("input#my-input").val()'
    },
    {
      code: '$(".foo").prop("value")'
    },
    {
      code: `var name = "value";
        $(".foo").prop(name)`
    },
    {
      code: `var name = "something-else";
        $(".foo").attr(name)`
    }
  ],
  invalid: [
    {
      code: '$("input#my-input").attr("value");',
      errors: [{
        messageId: 'no-attr-value',
        data: {
          getOrSet: 'gets'
        }
      }]
    },
    {
      code: `var name = 'value';
        $("input#my-input").attr(name);`,
      errors: [{
        messageId: 'no-attr-value',
        data: {
          getOrSet: 'gets'
        }
      }]
    },
    {
      code: `var name = 'value';
        var indirect = name;
        $("input#my-input").attr(indirect);`,
      errors: [{
        messageId: 'no-attr-value',
        data: {
          getOrSet: 'gets'
        }
      }]
    },
    {
      code: '$("input#my-input").attr("value", "abc");',
      errors: [{
        messageId: 'no-attr-value',
        data: {
          getOrSet: 'sets'
        }
      }]
    },
    {
      code: `var name = 'value';
        $("input#my-input").attr(name, "abc");`,
      errors: [{
        messageId: 'no-attr-value',
        data: {
          getOrSet: 'sets'
        }
      }]
    },
    {
      code: `var name = 'value';
        var indirect = name;
        $("input#my-input").attr(indirect, "abc");`,
      errors: [{
        messageId: 'no-attr-value',
        data: {
          getOrSet: 'sets'
        }
      }]
    }
  ]
})
