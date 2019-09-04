module.exports = {
  meta: {
    docs: {
      description: 'Warn when using removed jQuery.fn.die()',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnlive-is-deprecated-jqueryfndie-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.7.0',
      removed: '1.9.0',
      fixFrom: '1.7.0'
    },
    messages: {
      'no-die': '.die() was removed in jQuery 1.9, use .off() instead'
    },
    type: 'problem'
  },
  create: context => ({
    CallExpression: node => {
      const { property } = node.callee

      if (node.callee.type !== 'MemberExpression' || property.name !== 'die') {
        return
      }

      context.report({
        node: property,
        messageId: 'no-die'
      })
    }
  })
}
