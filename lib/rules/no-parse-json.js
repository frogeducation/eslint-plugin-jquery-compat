const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.parseJSON',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      'no-parse-json': 'Use JSON.parse instead of $.parseJSON'
    },
    type: 'problem',
    fixable: true
  },
  create: context => ({
    CallExpression: node => {
      const { object, property } = node.callee

      if (node.callee.type !== 'MemberExpression' ||
        !isJQuery(object) || property.name !== 'parseJSON'
      ) {
        return
      }

      const sourceCode = context.getSourceCode()
      const arg0 = sourceCode.getText(node.arguments[0])

      context.report({
        node: property,
        messageId: 'no-parse-json',
        fix: fixer => [
          fixer.replaceText(node.callee, 'JSON.parse'),
          fixer.replaceText(node.arguments[0], `${arg0} || 'null'`)
        ]
      })
    }
  })
}
