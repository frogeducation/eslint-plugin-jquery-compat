const { isFunction, detectJQueryCollections } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: `jQuery.fn.toggle(handler, handler...)` is deprecated',
      detail: {
        body: 'There are two completely different meanings for the .toggle() method. The use of\n' +
          '.toggle() to show or hide elements is not affected. The use of .toggle() as a\n' +
          'specialized click handler was deprecated in 1.8 and removed in 1.9.\n' +
          '\n' +
          'Rewrite the code that depends on $().toggle(), use the minified production\n' +
          'version of the jQuery Migrate plugin to provide the functionality, or extract\n' +
          'the $().toggle() method from the plugin\'s source and use it in the application.',
        examples: {
          correct: [
            '$(\'.foo\').toggle(1000, function() {\n' +
            '  console.log(\'.foo animation done\')\n' +
            '})'
          ],
          incorrect: [
            '$(\'.foo\').toggle(function() {\n' +
            '  console.log(\'.foo first click handler\')\n' +
            '}, function() {\n' +
            '  console.log(\'.foo second click handler\')\n' +
            '})'
          ]
        },
        links: [
          '[JQMIGRATE: jQuery.fn.toggle(handler, handler...) is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfntogglehandler-handler-is-deprecated)',
          '[`.toggle() (event)`](https://api.jquery.com/toggle-event/)',
          '[`.toggle() (animation)`](https://api.jquery.com/toggle/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfntogglehandler-handler-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.8.0',
      removed: '1.9.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'no-toggle-handler': '$.fn.toggle(handler, handler...) is deprecated'
    },
    type: 'problem'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.arguments.length < 2 ||
        node.callee.type !== "MemberExpression" ||
        node.callee.property.type !== "Identifier" ||
        node.callee.property.name !== "toggle" ||
        !node.arguments.every(arg => isFunction(arg, context))
      ) {
        return
      }

      const identifier = node.callee.property

      context.report({
        node: identifier,
        messageId: 'no-toggle-handler'
      })
    }
  }))
}
