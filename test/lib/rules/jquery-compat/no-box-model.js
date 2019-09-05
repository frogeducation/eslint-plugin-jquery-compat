const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-box-model', rules['no-box-model'], {
  valid: [
    {
      code: 'if (featureDetection.boxModel) console.log("supported!")'
    },
    {
      code: 'if (jQuery.foo.boxModel) console.log("supported!")'
    }
  ],
  invalid: [
    {
      code: 'if ($.boxModel) console.log("supported!")',
      errors: [{
        messageId: 'no-box-model',
        line: 1,
        column: 7,
        data: {
          api: 'boxModel'
        }
      }]
    },
    {
      code: 'if (jQuery.boxModel) console.log("supported!")',
      errors: [{
        messageId: 'no-box-model',
        data: {
          api: 'boxModel'
        }
      }]
    },
    {
      code: 'if ($.support.boxModel) console.log("supported!")',
      errors: [{
        messageId: 'no-box-model',
        data: {
          api: 'support.boxModel'
        }
      }]
    },
    {
      code: 'if (jQuery.support.boxModel) console.log("supported!")',
      errors: [{
        messageId: 'no-box-model',
        data: {
          api: 'support.boxModel'
        }
      }]
    }
  ]
})
