const UNRESOLVED = Symbol('UNRESOLVED')
const resolveLiteral = ({ raw }) => JSON.parse(raw)
const resolveAssignmentExpression = ({ left, right, operator }, context) => {
  const leftValue = resolveIdentifierValue(left, context, left.end)
  const rightValue = resolveIdentifierValue(right, context, right.end)

  if (leftValue === UNRESOLVED || rightValue === UNRESOLVED) { return UNRESOLVED }

  switch (operator) {
    case '=':
      return rightValue
    case '+=':
      return leftValue + rightValue
    case '-=':
      return leftValue - rightValue
    case '*=':
      return leftValue * rightValue
    case '/=':
      return leftValue / rightValue
    case '%=':
      return leftValue % rightValue
    case '**=':
      return leftValue ** rightValue
    case '<<=':
      return leftValue << rightValue
    case '>>=':
      return leftValue >> rightValue
    case '>>>=':
      return leftValue >>> rightValue
    case '&=':
      return leftValue & rightValue
    case '^=':
      return leftValue ^ rightValue
    case '|=':
      return leftValue | rightValue
  }

  throw new Error(`Unexpected assignment expression operator: '${operator}'`)
}

const resolveIdentifierValue = (node, context) => {
  if (!node) return null
  if (node.type === 'Literal') return resolveLiteral(node)
  if (node.type === 'AssignmentExpression') return resolveAssignmentExpression(node, context)

  /* Check if the passed Identifier is a variable which is declared
   * within a visble scope */
  const { scopeManager } = context.getSourceCode()

  let parent = node
  let scope = null

  while (parent && !scope) {
    scope = scopeManager.acquire(parent)
    parent = parent.parent
  }

  if (!scope) return false

  const variable = scope.variables.find(({ name }) => name === node.name)

  if (!variable) return false;

  // Find last write reference to variable before 'end'
  const value = ([...variable.references])
    .filter(ref => ref.isWrite())
    .map(ref => ref.writeExp)
    .filter(write => write.end < node.end)
    .map(write => ({
      value: resolveIdentifierValue(write, context),
      after: write.end
    }))
    .sort((a, b) => a.after - b.after)
    .pop() // take last

  if (!value) {
    return UNRESOLVED
  }

  return value.value
}
module.exports = resolveIdentifierValue