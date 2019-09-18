const resolveObjectExpression = (node, context, resolve) => {
  const properties = node.properties
    .map(({ key, value, computed }) => ({ [ computed ? resolve(key, context) : key.name ]: resolve(value, context) }))
    .reduce((acc, next) => ({ ...acc, ...next }), {});

  return properties;
}

module.exports = resolveObjectExpression