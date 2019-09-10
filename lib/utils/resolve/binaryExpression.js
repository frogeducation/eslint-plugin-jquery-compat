const _runInfix = require('./_runInfix')
const UNRESOLVED = require('./UNRESOLVED')

const resolveBinaryExpression = (node, context, resolve) => {
  const left = resolve(node.left, context)
  const right = resolve(node.right, context)

  if (left === UNRESOLVED || right === UNRESOLVED) {
    return UNRESOLVED
  }

  return _runInfix(left, node.operator, right)
}

module.exports = resolveBinaryExpression