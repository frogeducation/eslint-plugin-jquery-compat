const resolveVariableDeclarator = (node, context, resolve) => {
  return resolve(node.init, context)
}

module.exports = resolveVariableDeclarator