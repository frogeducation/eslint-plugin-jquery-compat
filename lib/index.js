const recommended = require('./configs/recommended')
const tags = require('./configs/tags')

module.exports.rules = require('./rules')
module.exports.configs = { ...tags, recommended }
