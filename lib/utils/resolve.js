const resolveIdentifierValue = require('./resolve/identifier')
const resolveTemplateLiteral = require('./resolve/templateLiteral')
const resolveBinaryExpression = require('./resolve/binaryExpression')
const resolveAssignmentExpression = require('./resolve/assignmentExpression')
const resolveVariableDeclarator = require('./resolve/variableDeclarator')
const resolveObjectExpression = require('./resolve/objectExpression')
const UNRESOLVED = require('./resolve/UNRESOLVED')

const resolve = contextualResolver => (node, context) => {
  // console.log(node)
  const result = (() => {
    switch (node.type) {
      case 'Literal':
        try {
          return JSON.parse(node.raw)
        } catch (e) {
          return node.value
        }

      case 'Identifier':
        return resolveIdentifierValue(node, context, resolve(contextualResolver))
      case 'TemplateLiteral':
        return resolveTemplateLiteral(node, context, resolve(contextualResolver))
      case 'BinaryExpression':
        return resolveBinaryExpression(node, context, resolve(contextualResolver))
      case 'AssignmentExpression':
        return resolveAssignmentExpression(node, context, resolve(contextualResolver))
      case 'VariableDeclarator':
        return resolveVariableDeclarator(node, context, resolve(contextualResolver))
      case 'ObjectExpression':
        return resolveObjectExpression(node, context, resolve(contextualResolver))

      default:
        return contextualResolver ? contextualResolver(node, context, UNRESOLVED) : UNRESOLVED
    }
  })()
  // console.log(result)

  return result;
}
module.exports = resolve