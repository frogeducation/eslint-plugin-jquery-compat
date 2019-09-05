const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-deprecated-event-methods', rules['no-deprecated-event-methods'], {
  valid: [
    {
      code: '$("body").on("error", handler)'
    },
    {
      code: 'myObject.error(handler)'
    },
    {
      code: 'myCall("foo").error(handler)'
    },
    {
      code: '$.parseJSON(error.responseText)'
    },
    {
      code: '$.post(url).error(handler)'
    },
    {
      code: '$("body").on("load", handler)'
    },
    {
      code: '$("body").on("unload", handler)'
    }
  ],
  invalid: [
    {
      code: '$(".foo").error(handler)',
      errors: [{
        messageId: 'no-deprecated-event-methods',
        line: 1,
        columns: 11,
        data: {
          fn: 'error'
        }
      }],
      output: '$(".foo").on(\'error\', handler)'
    },
    {
      code: '$(".foo").find(".bar").error(handler)',
      errors: [{
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: 'error'
        }
      }],
      output: '$(".foo").find(".bar").on(\'error\', handler)'
    },
    {
      code: '$foo.error(handler);',
      errors: [{
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: 'error'
        }
      }],
      output: '$foo.on(\'error\', handler);'
    },
    {
      code: '$(".foo").load(handler)',
      errors: [{
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: 'load'
        }
      }],
      output: '$(".foo").on(\'load\', handler)'
    },
    {
      code: '$(".foo").unload(handler)',
      errors: [{
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: 'unload'
        }
      }],
      output: '$(".foo").on(\'unload\', handler)'
    },
    {
      code: '(true ? $(".foo") : this.element.model()).unload(handler)',
      errors: [{
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: 'unload'
        }
      }],
      output: '(true ? $(".foo") : this.element.model()).unload(handler)'
    }
  ]
})
