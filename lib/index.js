const recommended = require('./configs/recommended')
const jmvc = require('./configs/jmvc')
const v19 = require('./configs/v1.9')

module.exports.rules = require('./rules')
module.exports.configs = { recommended, jmvc, 'v1.9': v19 }
