const resolveIdentifier = (node, context) => {
  if (!node || node.type !== 'Identifier') return null

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

  if (!variable) return false

  // Find last write reference to variable
  const refs = [...variable.references].reverse().filter(ref => ref.isWrite())
  const firstNonPartialIndex = refs.findIndex(value => !value.partial)
  if (firstNonPartialIndex !== -1) {
    refs.splice(firstNonPartialIndex + 1)
  }
  refs
    .reverse()
    .map(ref => ref.writeExp)
    .map(write => resolveIdentifier(write, context) || write)
  const ref = [...variable.references].reverse().find(ref => ref.isWrite())

  if (ref && ref.writeExpr && ref.writeExpr.type === 'Identifier') {
    return resolveIdentifier(ref.writeExpr, context)
  }

  return ref && ref.writeExpr
}
module.exports = resolveIdentifier
