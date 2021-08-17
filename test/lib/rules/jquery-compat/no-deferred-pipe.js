const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-deferred-pipe', rules['no-deferred-pipe'], {
  valid: [
    {
      code: '$.Deferred().then(fn)',
    },
    {
      code: 'myFunc(pipe)',
    },
  ],
  invalid: [
    {
      code: '$.Deferred().pipe(fn)',
      errors: [
        {
          messageId: 'no-deferred-pipe',
          line: 1,
          column: 14,
        },
      ],
      output: '$.Deferred().then(fn)',
    },
    {
      code: 'Lib.Model.Foo.findAll().pipe(fn)',
      errors: [
        {
          messageId: 'no-deferred-pipe',
        },
      ],
      output: 'Lib.Model.Foo.findAll().then(fn)',
    },
  ],
})
