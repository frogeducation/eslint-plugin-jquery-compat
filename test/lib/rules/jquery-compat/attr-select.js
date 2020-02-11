const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

const BOOLEAN_PROPERTIES = [
  'checked',
  'selected',
  'disabled'
]

ruleTester.run('jquery-compat/attr-select', rules['attr-select'], {
  valid: BOOLEAN_PROPERTIES
    .map(property => [
      {
        code: `model.attr('${property}')`
      },
      {
        code: `this.$row[0].model().attr('${property}', true)`
      },
      {
        code: `foo.attr('${property}')`
      },
      {
        code: `$foo.model().attr('${property}')`
      },
      {
        code: `(bar || $foo.model()).attr('${property}')`
      },
      {
        code: `(true ? bar : $foo.model()).attr('${property}')`
      },
      {
        code: `function foo(attr) { return $bar.attr(attr); }`
      },
      {
        code: `$.each(["${property}"], function(i, attr) { if (element.attr(attr)) {} });`
      }
    ])
    .reduce((acc, next) => acc.concat(next))
    .concat([
      {
        code: '$foo.attr("not-a-banned-property")'
      }
    ]),
  invalid: BOOLEAN_PROPERTIES
    .map(property => [
      {
        code: `$('.div').attr('${property}')`,
        errors: [{
          messageId: 'attr-select',
          line: 1,
          column: 11,
          data: {
            getOrSet: 'gets',
            string: property
          }
        }],
        output: `$('.div').prop('${property}')`
      },
      {
        code: `this.$container.attr('${property}', true)`,
        errors: [{
          messageId: 'attr-select',
          data: {
            getOrSet: 'sets',
            string: property
          }
        }],
        output: `this.$container.prop('${property}', true)`
      },
      {
        code: `($foo || $foo.model()).attr('${property}', true)`,
        errors: [{
          messageId: 'attr-select',
          data: {
            getOrSet: 'sets',
            string: property
          }
        }],
        output: `($foo || $foo.model()).attr('${property}', true)`
      },
      {
        code: `(true ? $bar : $foo.model()).attr('${property}')`,
        errors: [{
          messageId: 'attr-select',
          data: {
            getOrSet: 'gets',
            string: property
          }
        }],
        output: `(true ? $bar : $foo.model()).attr('${property}')`
      },
      {
        code: `this.foo.element.attr('${property}')`,
        errors: [{
          messageId: 'attr-select',
          data: {
            getOrSet: 'gets',
            string: property
          }
        }],
        output: `this.foo.element.prop('${property}')`
      },
      {
        code: `var attr = '${property}';
        this.foo.element.attr(attr)`,
        errors: [{
          messageId: 'attr-select',
          data: {
            getOrSet: 'gets',
            string: property
          }
        }],
        output: `var attr = '${property}';
        this.foo.element.prop(attr)`
      }
    ])
    .reduce((acc, next) => acc.concat(next))
})
