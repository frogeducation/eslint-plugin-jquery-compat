const resolveIdentifier = require('./resolveIdentifier')

const isFunction = (node, context) => {
  if (node.type !== 'Identifier') {
    return /FunctionExpression/.test(node.type)
  }

  return isFunction(
    resolveIdentifier(node, context),
    context
  )
}
module.exports = isFunction;