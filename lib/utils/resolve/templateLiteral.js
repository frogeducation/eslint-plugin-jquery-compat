const resolveTemplateLiteralValue = (node, context, resolve) =>
  node.quasis
    .map((quasi, index) => ([ quasi.value.cooked, resolve(node.expressions[index], context) ]))
    .reduce((acc, next) => acc.concat(next), [])
    .join('')

module.exports = resolveTemplateLiteralValue