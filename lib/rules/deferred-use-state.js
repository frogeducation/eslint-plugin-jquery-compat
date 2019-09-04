const REMOVED_FNS = ['isRejected', 'isResolved']

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: `deferred.isResolved()` / `deferred.isRejected()` is deprecated',
      detail: {
        body: '`deferred.isRejected()` and `deferred.isResolved()` were removed in jQuery 1.8;\n' +
          'use `deferred.state() === \'rejected\'` and `deferred.state() === \'resolved\'`\n' +
          'instead (`deferred.state()` may also return `\'pending\'`).',
        examples: {
          correct: [
            'var myDeferred = $.Deferred()\n' +
            '\n' +
            'if (myDeferred.state() === \'rejected\') {\n' +
            '  /* ...snip... */\n' +
            '} else (myDeferred.state() === \'resolved\') {\n' +
            '  /* ...snip... */\n' +
            '}'
          ],
          incorrect: [
            'var myDeferred = $.Deferred()\n' +
            '\n' +
            'if (myDeferred.isRejected()) {\n' +
            '  /* ...snip... */\n' +
            '} else (myDeferred.isResolved()) {\n' +
            '  /* ...snip... */\n' +
            '}'
          ]
        },
        links: [
          '[`deferred.state()`](https://api.jquery.com/deferred.state/)',
          '[`deferred.isRejected()`](https://api.jquery.com/deferred.isRejected/)',
          '[`deferred.isResolved()`](https://api.jquery.com/deferred.isResolved/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-deferredisresolved-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.7.0',
      removed: '1.8.0',
      fixFrom: '1.7.0'
    },
    messages: {
      'deferred-use-state': 'deferred.{{fn}}() was removed in jQuery 1.8, use deferred.state() === "{{equivalent}}" instead'
    },
    type: 'problem',
    fixable: 'code'
  },
  create: context => ({
    CallExpression: node => {
      const { property } = node.callee

      if (node.callee.type !== 'MemberExpression' ||
        !REMOVED_FNS.includes(property.name)
      ) {
        return
      }

      const { parent } = node

      const replacement = property.name.toLowerCase().replace(/^is/, '')
      const inverse = (
        parent.type === 'UnaryExpression' &&
        parent.operator === '!'
      )
      const comparator = inverse
        ? '!=='
        : '==='
      const sourceCode = context.getSourceCode()

      context.report({
        node: property,
        messageId: 'deferred-use-state',
        data: {
          fn: property.name,
          equivalent: replacement
        },
        fix: fixer => {
          const replaceFrom = inverse
            ? node.parent
            : node
          const object = sourceCode.getText(node.callee.object)

          return fixer.replaceTextRange(
            [
              sourceCode.getIndexFromLoc({
                line: replaceFrom.loc.start.line,
                column: replaceFrom.loc.start.column
              }),
              sourceCode.getIndexFromLoc({
                line: replaceFrom.loc.end.line,
                column: replaceFrom.loc.end.column
              })
            ],
            `${object}.state() ${comparator} '${replacement}'`
          )
        }
      })
    }
  })
}
