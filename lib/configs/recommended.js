const rules = require('../rules')

const config = {
  plugins: ['@frogeducation/jquery-compat'],
  rules: {},
}

for (const rule in rules) {
  if (rules[rule].meta.docs.recommended) {
    config.rules[`@frogeducation/jquery-compat/${rule}`] = 'error'
  }
}

module.exports = config
