const _runInfix = require('./_runInfix')
const UNRESOLVED = require('./UNRESOLVED')

const resolveAssignmentExpression = (node, context, resolve) => {
  const left = resolve(node.left, context)
  const right = resolve(node.right, context)

  if (left === UNRESOLVED || right === UNRESOLVED) {
    return UNRESOLVED
  }

  if (node.operator === '=') {
    return right
  }

  return _runInfix(left, node.operator.slice(0, -1), right)
}

module.exports = resolveAssignmentExpression
