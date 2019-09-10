const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

const now = Date.now()

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
      },
      {
        code: '$("<h1>" + this._("dangerous.i18n.string") + "</h1>")',
        options: [
          {
            knownHtmlKeys: [
              'dangerous.i18n.string'
            ]
          }
        ]
      },
      {
        code: '$(this._("safe.i18n.string"))',
        options: [
          {
            knownHtmlKeys: [
              'dangerous.i18n.string'
            ]
          }
        ]
      }
    ],
    invalid: [
      {
        // jquery-migrate trims string before testing, but jquery-actual does not.
        code: '$("<h1>foo</h1> ")',
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 3
        }]
      },
      {
        code: `$(this._("dangerous.i18n.string.${now}"))`,
        options: [
          {
            knownHtmlKeys: [
              `dangerous.i18n.string.${now}`
            ]
          }
        ],
        errors: [{
          messageId: 'no-trailing-text-in-html-strings-via-i18n',
          line: 1,
          column: 3
        }]
      },
      {
        code: `$("dangerous prefix" + this._("dangerous.i18n.string.${now}") + "dangerous suffix")`,
        options: [
          {
            knownHtmlKeys: [
              `dangerous.i18n.string.${now}`
            ]
          }
        ],
        errors: [{
          messageId: 'no-trailing-text-in-html-strings-via-i18n',
          line: 1,
          column: 3
        }]
      },
      {
        code: `var string = this._("dangerous.i18n.string.${now}")
        var wrapped = "dangerous" + string + "dangerous"
        $foo.find('.bar').html(wrapped)
        `,
        options: [
          {
            knownHtmlKeys: [
              `dangerous.i18n.string.${now}`
            ]
          }
        ],
        errors: [{
          messageId: 'no-trailing-text-in-html-strings-via-i18n',
          line: 3,
          column: 32
        }]
      },
      {
        code: '$("<h1>foo</h1>extra")',
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 3
        }]
      },
      {
        code: '$("<h1>foo</h1>" + "extra")',
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 3
        }]
      },
      {
        code: `var text = '<h1>foo</h1>bar';
        $(text)`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 2,
          column: 11
        }]
      },
      {
        code: `var text = '<h1>foo</h1>' + 'bar';
        $(text)`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 2,
          column: 11
        }]
      },
      {
        code: `var text = '<h1>foo</h1>';
        text += ' bar';
        $(text)`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 3,
          column: 11
        }]
      },
      {
        code: `$foo.append('<h1>bar</h1> baz');`,
        errors: [{
          messageId: 'no-trailing-text-in-html-strings',
          line: 1,
          column: 13
        }]
      }
    ]
  }
)
