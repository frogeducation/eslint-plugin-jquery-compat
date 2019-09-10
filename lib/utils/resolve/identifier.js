const UNRESOLVED = require('./UNRESOLVED')
const truthy = input => !!input

const resolveIdentifierValue = (node, context, resolve) => {
  const result = (() => {
    /* Check if the passed Identifier is a variable which is declared
     * within a visble scope */
    const { scopeManager } = context.getSourceCode()

    let parent = node
    let scope = null

    while (parent && !scope) {
      scope = scopeManager.acquire(parent)
      parent = parent.parent
    }

    if (!scope) {
      // console.log('360 no scope')
      return UNRESOLVED
    }

    const variable = scope.variables.find(({ name }) => name === node.name)

    if (!variable) {
      // console.log('var not found')
      return UNRESOLVED;
    }

    // Find last write reference to variable before 'end'
    const allReferences = ([...variable.references])
    const refsWithWrite = allReferences.filter(ref => ref.isWrite())
    const writeExprs = refsWithWrite.map(ref => ref.writeExpr)
      .filter(truthy)
    const beforeIdentifierNode = writeExprs.filter(write => write.end < node.end)
    const value = beforeIdentifierNode
      .map(write => ({
        value: resolve(write.parent, context),
        after: write.end
      }))
      .sort((a, b) => a.after - b.after)
      .pop() // take last

    if (!value) {
      // console.log('val is falsy', allReferences.length, refsWithWrite.length, writeExprs.length, beforeIdentifierNode.length, refsWithWrite)
      return UNRESOLVED
    }

    // console.log('found a val', value.value)
    return value.value
  })()

  // console.log('ident resolv', result);

  return result
}

module.exports = resolveIdentifierValue