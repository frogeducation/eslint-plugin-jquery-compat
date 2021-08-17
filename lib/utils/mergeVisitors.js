const mergeVisitors = (...visitors) => {
  const allDeclaredKeys = visitors
    .map(visitor => Object.keys(visitor))
    .reduce((acc, next) => acc.concat(next), [])
    .filter((value, index, array) => array.indexOf(value) === index)

  return allDeclaredKeys
    .map(key => ({
      [key]: node =>
        visitors
          .map(visitor => visitor[key])
          .filter(value => !!value)
          .map(callback => callback(node))
          .reverse()[0],
    }))
    .reduce((acc, next) => ({ ...acc, ...next }), {})
}

module.exports = mergeVisitors
