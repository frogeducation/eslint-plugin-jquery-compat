const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/no-trailing-text-in-html-strings',
  rules['no-trailing-text-in-html-strings'],
  {
    valid: [
      {
        code: '$("<h1>foo</h1>")'
      },
      {
        code: 'something("<h1>bar</h1>")'
      }
    ],
    invalid: [
      {
        // jquery-migrate trims string before testing, but jquery-actual does not.
        code: '$("<h1>foo</h1> ")',
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 16
        }]
      },
      {
        code: '$("<h1>foo</h1>extra")',
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 16
        }]
      },
      {
        code: '$("<h1>foo</h1>" + "extra")',
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 16
        }]
      },
      {
        code: `var text = '<h1>foo</h1>bar';
        $(text)`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 25
        }]
      },
      {
        code: `var text = '<h1>foo</h1>' + 'bar';
        $(text)`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 25
        }]
      },
      {
        code: `$foo.append('<h1>bar</h1> baz');`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 26
        }]
      }
    ]
  }
)
