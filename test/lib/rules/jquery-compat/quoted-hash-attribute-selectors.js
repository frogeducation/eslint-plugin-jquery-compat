const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/quoted-hash-attribute-selectors',
  rules['quoted-hash-attribute-selectors'],
  {
    valid: [
      {
        code: '$("[href=\\"#main\\"]")',
      },
      {
        code: '$("[href=ok]")',
      },
      {
        code: 'var four = 2 + 2',
      },
    ],
    invalid: [
      {
        code: '$("[href=#main]")',
        errors: [
          {
            messageId: 'quoted-hash-attribute-selectors',
            line: 1,
            column: 3,
          },
        ],
        output: '$("[href=\'#main\']")',
      },
      {
        code: "$('[href=#main]')",
        errors: [
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
        ],
        output: '$(\'[href="#main"]\')',
      },
      {
        code: 'var selector = "[href=#main]"',
        errors: [
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
        ],
        output: 'var selector = "[href=\'#main\']"',
      },
      {
        code: '$("[href=#main] > [href=#sub]")',
        errors: [
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
        ],
        output: "$(\"[href='#main'] > [href='#sub']\")",
      },
      {
        code: '$("[href=#main] " + "> [href=#sub] > [href=#subsub]")',
        errors: [
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
        ],
        output:
          "$(\"[href='#main'] \" + \"> [href='#sub'] > [href='#subsub']\")",
      },
      ...['|=', '*=', '~=', '$=', '!=', '^='].map(comparison => ({
        code: `$("[href${comparison}#main]")`,
        errors: [
          {
            messageId: 'quoted-hash-attribute-selectors',
          },
        ],
        output: `$("[href${comparison}'#main']")`,
      })),
    ],
  }
)
