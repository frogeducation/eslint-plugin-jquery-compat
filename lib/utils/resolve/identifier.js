const UNRESOLVED = require('./UNRESOLVED')
const truthy = input => !!input
const pluck = key => obj => obj[key]

const JSONPATCH = Symbol('JSONPATCH')

const memberExpressionToJsonPath = (resolve, context) => {
  const resolveProperty = memberExpression => {
    let resolved = resolve(memberExpression.property, context)
    if (resolved === UNRESOLVED) {
      if (memberExpression.property.type === "Identifier") {
        resolved = `UNRESOLVED_${memberExpression.property.name}`
      } else {
        resolved = `UNRESOLVED_${context.getSourceCode().getText(memberExpression.property)}`
      }
    }

    return resolved
  }

  const handle = memberExpression => {
    const parentBits = (
      memberExpression.object.type === 'MemberExpression' ?
        handle(memberExpression.object).split('/') :
        [''] // ['', 'hello'].join('/') => '/hello'. Empty string so we start with a slash.
    );
    return parentBits
      .concat([ (
        memberExpression.computed ?
          resolveProperty(memberExpression) :
          memberExpression.property.name
      ) ])
      .join('/')
  }

  return handle
}

const applyJsonPatchToObject = ({ createParentObjectsIfMissing } = {}) => object => patch => {
  const pathBits = patch.path.split('/').slice(1);
  if (createParentObjectsIfMissing) {
    for (let i = 0; i < pathBits.length; i++) {
      const pathSlice = pathBits.slice(0, i);
      pathSlice.reduce((parent, bit) => {
        if (typeof parent[bit] !== "object") {
          parent[bit] = {};
        }
        return parent[bit];
      }, object)
    }
  }

  let deepestObject = pathBits.slice(0, -1).reduce((parent, bit) => parent[bit] || {}, object);
  deepestObject[pathBits.slice(-1)[0]] = patch.value;
}

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
      return UNRESOLVED
    }

    if (node.name === 'undefined') {
      return undefined;
    }

    const variable = scope.variables.find(({ name }) => name === node.name)

    if (!variable) {
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

    if (value && typeof value.value === "object") {
      const assignmentExpressions = allReferences
        .map(pluck('identifier'))
        .map(pluck('parent'))
        .filter(truthy)
        .map(parent => {
          let ancestor = parent
          while (ancestor.parent.type === 'MemberExpression') {
            ancestor = ancestor.parent
          }
          return ancestor
        })
        .map(pluck('parent'))
        .filter(parent => parent.type === 'AssignmentExpression')
        .filter(assignment => assignment.end > value.after)
        .filter(assignment => assignment.end < node.end)
        .map(assignment => ({
          value: resolve(assignment.right, context),
          after: assignment.end,
          type: JSONPATCH,
          op: "replace",
          path: memberExpressionToJsonPath(resolve, context)(assignment.left)
        }))
        .sort((a, b) => a.after - b.after);

      assignmentExpressions
        .forEach(applyJsonPatchToObject({createParentObjectsIfMissing: true})(value.value))

      value.after = Math.max(...assignmentExpressions.map(pluck('after')));
    }

    if (!value) {
      return UNRESOLVED
    }

    // console.log('found a val', value.value)
    return value.value
  })()

  // console.log('ident resolv', result);

  return result
}

module.exports = resolveIdentifierValue