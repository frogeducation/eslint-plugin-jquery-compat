const { getStaticValue } = require('eslint-utils')

const getValue = (node, context, fallback) => {
  if (node.type === 'Literal') {
    return node.value
  }

  try {
    return getStaticValue(node, context.getScope()).value
  } catch (e) {
    // ignore
  }

  return fallback
}

module.exports = getValue