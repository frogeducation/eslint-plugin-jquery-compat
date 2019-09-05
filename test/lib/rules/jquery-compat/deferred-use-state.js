const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/deferred-use-state', rules['deferred-use-state'], {
  valid: [
    {
      code: 'if (deferred.state() === "rejected") {}'
    },
    {
      code: 'if (deferred.state() === "resolved") {}'
    }
  ],
  invalid: [
    {
      code: 'if (deferred.isRejected()) { }',
      errors: [{
        messageId: 'deferred-use-state',
        line: 1,
        column: 14,
        data: {
          fn: 'isRejected',
          equivalent: 'rejected'
        }
      }],
      output: 'if (deferred.state() === \'rejected\') { }'
    },
    {
      code: 'if (deferred.isResolved()) { }',
      errors: [{
        messageId: 'deferred-use-state',
        data: {
          fn: 'isResolved',
          equivalent: 'resolved'
        }
      }],
      output: 'if (deferred.state() === \'resolved\') { }'
    },
    {
      code: 'if (this.pending.isResolved()) { }',
      errors: [{
        messageId: 'deferred-use-state',
        data: {
          fn: 'isResolved',
          equivalent: 'resolved'
        }
      }],
      output: 'if (this.pending.state() === \'resolved\') { }'
    },
    {
      code: `if (
          this.pending.isResolved()
        ) { }`,
      errors: [{
        messageId: 'deferred-use-state',
        data: {
          fn: 'isResolved',
          equivalent: 'resolved'
        }
      }],
      output: `if (
          this.pending.state() === 'resolved'
        ) { }`
    },
    {
      code: 'if (!deferred.isResolved()) { }',
      errors: [{
        messageId: 'deferred-use-state',
        data: {
          fn: 'isResolved',
          equivalent: 'resolved'
        }
      }],
      output: 'if (deferred.state() !== \'resolved\') { }'
    }
  ]
})
