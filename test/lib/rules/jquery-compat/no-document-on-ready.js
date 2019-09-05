const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-document-on-ready', rules['no-document-on-ready'], {
  valid: [
    {
      code: '$(document).ready(function() {})'
    },
    {
      code: '$(function() {})'
    }
  ],
  invalid: [
    {
      code: '$(document).on("ready", function() {});',
      errors: [{
        messageId: 'no-document-on-ready',
        line: 1,
        column: 13
      }],
      output: '$(document).ready(function() {});'
    },
    {
      code: `var event = "ready";
      $(document).on(event, function() {});`,
      errors: [{
        messageId: 'no-document-on-ready'
      }],
      output: `var event = "ready";
      $(document).ready(function() {});`
    },
    {
      code: `var event = "ready";
      $(document).on(event,function() {});`,
      errors: [{
        messageId: 'no-document-on-ready'
      }],
      output: `var event = "ready";
      $(document).ready(function() {});`
    },
    {
      code: `var event = "ready";
      $(document).on(
          event,
          function() {}
      );`,
      errors: [{
        messageId: 'no-document-on-ready'
      }],
      output: `var event = "ready";
      $(document).ready(function() {}
      );`
    },
    {
      code: `var event = "ready";
      (true ? $(document) : this.element.model()).on(
          event,
          function() {}
      );`,
      errors: [{
        messageId: 'no-document-on-ready'
      }],
      output: `var event = "ready";
      (true ? $(document) : this.element.model()).on(
          event,
          function() {}
      );`
    }
  ]
})
