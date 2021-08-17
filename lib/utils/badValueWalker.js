const badValueWalker = bannedValues => {
  const walker = object => {
    const bannedValuesFound = Object.entries(object).filter(([, value]) =>
      bannedValues.includes(value)
    )

    if (bannedValuesFound.length > 0) {
      const [key, value] = bannedValuesFound[0]
      return {
        path: `/${key}`,
        value,
      }
    }

    const objectValuesFound = Object.entries(object)
      .filter(([, value]) => typeof value === 'object')
      .map(([key, value]) => [key, walker(value)])
      .filter(([, value]) => !!value)
      .map(([key, value]) => ({
        ...value,
        path: ['', key].concat(value.path.split('/').slice(1)).join('/'),
      }))

    if (objectValuesFound.length > 0) {
      return objectValuesFound[0]
    }

    return undefined
  }

  return walker
}

module.exports = badValueWalker
