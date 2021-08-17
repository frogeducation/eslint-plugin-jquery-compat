const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run(
  'jquery-compat/no-capitalised-html-data-attributes',
  rules['no-capitalised-html-data-attributes'],
  {
    valid: [
      {
        code: '$("<div data-hello-world=\\"yes\\" />")',
      },
    ],
    invalid: [
      {
        code: '$("<div data-helloWorld=\\"no\\" />")',
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 1,
            column: 19,
          },
        ],
        output: '$("<div data-hello-world=\\"no\\" />")',
      },
      {
        code: '$("<div data-helloWorld =\\"no\\" />")',
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 1,
            column: 19,
          },
        ],
        output: '$("<div data-hello-world =\\"no\\" />")',
      },
      {
        code: '$("<div data-helloWorld = \\"no\\" />")',
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 1,
            column: 19,
          },
        ],
        output: '$("<div data-hello-world = \\"no\\" />")',
      },
      {
        code: '$("<div data-helloWorld= \\"no\\" />")',
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 1,
            column: 19,
          },
        ],
        output: '$("<div data-hello-world= \\"no\\" />")',
      },
      {
        code: '$("<div data-helloWorld=\'no\' />")',
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 1,
            column: 19,
          },
        ],
        output: '$("<div data-hello-world=\'no\' />")',
      },
      {
        code: '$("<div data-helloWORLD=\\"no\\" />")',
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 1,
            column: 19,
          },
        ],
        output: '$("<div data-hello-world=\\"no\\" />")',
      },
      {
        code: `$('<div' +
          'data-helloWorld="no"' +
        '/>')`,
        errors: [
          {
            messageId: 'no-capitalised-html-data-attributes',
            line: 2,
            column: 22,
          },
        ],
        output: `$('<div' +
          'data-hello-world="no"' +
        '/>')`,
      },
    ],
  }
)
