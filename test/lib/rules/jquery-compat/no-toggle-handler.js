const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-toggle-handler', rules['no-toggle-handler'], {
  valid: [
    {
      code: '$(".foo").toggle(true)'
    },
    {
      code: '$(".foo").toggle(400, done)'
    },
    {
      // Could be invalid but values of var1/var2 are not known so consider OK
      code: '$(".foo").toggle(var1, var2)'
    },
    {
      code: `var duration = 200;
        var done = function() {};
        $(".foo").toggle(duration, done)`
    },
    {
      code: `var a = function() {};
        var b = function() {};
        var c = 1000;
        a = c;
        $(".foo").toggle(a, b)`
    }
  ],
  invalid: [
    {
      code: '$(".foo").toggle(function() {}, function() {})',
      errors: [{
        messageId: 'no-toggle-handler',
        line: 1,
        column: 11
      }]
    },
    {
      code: '$(".foo").toggle(function() {}, function() {}, function() {})',
      errors: [{
        messageId: 'no-toggle-handler'
      }]
    },
    {
      code: `var handler1 = function() {};
        var handler2 = function() {};
        $(".foo").toggle(handler1, handler2)`,
      errors: [{
        messageId: 'no-toggle-handler'
      }]
    },
    {
      code: `var handler1 = function() {};
        var handler2 = function() {};
        var a = handler1;
        var b = handler2;
        $(".foo").toggle(a, b)`,
      errors: [{
        messageId: 'no-toggle-handler'
      }]
    }
  ]
})
