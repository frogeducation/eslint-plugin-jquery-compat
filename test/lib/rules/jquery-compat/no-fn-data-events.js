const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-fn-data-events', rules['no-fn-data-events'], {
  valid: [
    {
      code: '$(".foo").data("not-events")'
    },
    {
      code: '$(".foo").data("events", "my-data")'
    }
  ],
  invalid: [
    {
      code: '$(".foo").data("events")',
      errors: [{
        messageId: 'no-fn-data-events'
      }]
    },
    {
      code: 'jQuery(".foo").data("events")',
      errors: [{
        messageId: 'no-fn-data-events'
      }]
    },
    {
      code: `var name = 'events';
        $(".foo").data(name)`,
      errors: [{
        messageId: 'no-fn-data-events'
      }]
    },
    {
      code: `var name = 'events';
        var indirect = name;
        jQuery(".foo").data(indirect)`,
      errors: [{
        messageId: 'no-fn-data-events'
      }]
    }
  ]
})
