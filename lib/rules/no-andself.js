module.exports = {
  meta: {
    docs: {
      description: 'Warn when using deprecated .andSelf()',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnandself-replaced-by-jqueryfnaddback'
    },
    messages: {
      'no-andself': '$.fn.andSelf() replaced by $.fn.addBack()'
    },
    type: 'problem',
    fixable: 'code'
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
        fix: fixer => fixer.replaceText(node, 'addBack')
      })
    }
  })
}
