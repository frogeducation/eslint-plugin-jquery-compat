module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: deferred.pipe() is deprecated',
      detail: {
        body: 'The .pipe() method on a jQuery.Deferred object was deprecated as of jQuery 1.8,\n' +
          'when the .then() method was changed to perform the same function.\n' +
          '\n' +
          'In most cases it is sufficient to change all occurrences of .pipe() to .then().\n' +
          'Ensure that you aren\'t relying on context/state propagation (e.g., using this) or synchronous callback invocation, which were dropped from .then() for Promises/A+ interoperability as of jQuery 3.0.',
        examples: {
          correct: [
            '$.Deferred().then(fn)'
          ],
          incorrect: [
            '$.Deferred().pipe(fn)'
          ]
        },
        links: [
          '[JQMIGRATE: deferred.pipe() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-deferredpipe-is-deprecated)',
          '[Deferred Object](https://api.jquery.com/category/deferred-object/)',
          '[`deferred.pipe()`](https://api.jquery.com/deferred.pipe/)',
          '[`deferred.then()`](https://api.jquery.com/deferred.then/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-deferredpipe-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.8.0',
      fixFrom: '1.8.0'
    },
    messages: {
      'no-deferred-pipe': 'deferred.pipe() is deprecated, use deferred.then() instead'
    },
    type: 'problem',
    fixable: 'code'
  },
  create: context => ({
    Identifier: node => {
      if (
        node.name !== 'pipe' ||
        node.parent.type !== 'MemberExpression' ||
        node.parent.object === node ||
        node.parent.parent.type !== 'CallExpression'
      ) {
        return
      }

      context.report({
        node,
        messageId: 'no-deferred-pipe',
        fix: fixer => fixer.replaceText(node, 'then')
      })
    }
  })
}
