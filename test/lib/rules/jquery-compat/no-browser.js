const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-browser', rules['no-browser'], {
  valid: [
    {
      code: 'if (window.Uint8Array) console.log("supported")'
    },
    {
      code: 'if (something.browser) console.log("something")'
    }
  ],
  invalid: [
    {
      code: 'if (!$.browser.msie) console.log("supported")',
      errors: [{
        messageId: 'no-browser'
      }]
    },
    {
      code: 'if (!jQuery.browser.msie) console.log("supported")',
      errors: [{
        messageId: 'no-browser'
      }]
    }
  ]
})
