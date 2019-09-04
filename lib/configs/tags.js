const rules = require('../rules')
const { generateVersions, resolveTags } = require('./utils')

const config = {
  plugins: ['@frogeducation/jquery-compat'],
  rules: {}
}

const tagLens = rule => rule.meta.docs.tags;
const fixFromLens = rule => rule.meta.docs.fixFrom

module.exports = Object.values(rules)
  // get all unique tags, and fixable-from tags
  .map(tagLens)
  .reduce((acc, next) => acc.concat(next), [])
  .filter((value, index, array) => array.indexOf(value) === index)
  .concat(generateVersions().map(version => `fixable-from-v${version}`))
  .sort()
  // map to { tag: { rule: error } }
  .map(tag => ({
    [ tag ]: {
      ...config,
      rules: Object.entries(rules)
        .filter((tuple) => resolveTags({tags: tagLens(tuple[1]), fixFrom: fixFromLens(tuple[1]) }).includes(tag))
        .map(([ name ]) => ({ [`@frogeducation/jquery-compat/${name}`]: 'error' }))
        .reduce((acc, next) => ({ ...acc, ...next }), {})
    }
  }))
  // combine them all together, i.e. { tag: {}, tag: {} }
  .reduce((acc, next) => ({ ...acc, ...next }), {})
