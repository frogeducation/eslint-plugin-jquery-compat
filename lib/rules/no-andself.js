module.exports = {
  meta: {
    docs: {
      description:
        'JQMIGRATE: `jQuery.fn.andSelf()` replaced by `jQuery.fn.addBack()`',
      detail: {
        body:
          'The .andSelf() method has been renamed to .addBack() as of jQuery 1.9 to better\n' +
          'reflect its purpose of adding back the previous set of results.\n' +
          '\n' +
          'Replace any use of .andSelf() with .addBack().',
        examples: {
          correct: ["$('.foo').find('.bar').addBack()"],
          incorrect: ["$('.foo').find('.bar').andSelf()"],
        },
        links: [
          '[JQMIGRATE: jQuery.fn.andSelf() replaced by jQuery.fn.addBack()](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnandself-replaced-by-jqueryfnaddback)',
          '[`.andSelf()`](https://api.jquery.com/andself/)',
          '[`.addBack()`](https://api.jquery.com/addback/)',
        ],
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnandself-replaced-by-jqueryfnaddback',
      tags: ['v1.9'],
      deprecated: '1.8.0',
      removed: '3.0.0',
      fixFrom: '1.8.0',
    },
    messages: {
      'no-andself': '$.fn.andSelf() replaced by $.fn.addBack()',
    },
    type: 'problem',
    fixable: 'code',
  },
  create: context => ({
    Identifier: node => {
      if (
        node.name !== 'andSelf' ||
        node.parent.type !== 'MemberExpression' ||
        node.parent.object === node ||
        node.parent.parent.type !== 'CallExpression'
      ) {
        return
      }

      context.report({
        node,
        messageId: 'no-andself',
        fix: fixer => fixer.replaceText(node, 'addBack'),
      })
    },
  }),
}
