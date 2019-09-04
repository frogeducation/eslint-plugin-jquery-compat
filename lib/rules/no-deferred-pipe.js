module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated deferred.pipe()',
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
