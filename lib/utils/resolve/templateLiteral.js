const resolveTemplateLiteralValue = node => {
  // @TODO walk the expression tree
  const defaultExpression = { name: '' }

  return node.quasis
    .map(
      (quasi, index) =>
        quasi.value.cooked + (node.expressions[index] || defaultExpression).name
    )
    .join('')
}

module.exports = resolveTemplateLiteralValue
