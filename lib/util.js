// @todo add explicit unit tests for these functions

module.exports = require('./utils/index');

// Regex taken from jquery-migrate source
module.exports.REGEXP_HTML_STRING = /^([^<]*)(<[\w\W]+>)([^>]*)$/
module.exports.isHTMLString = str => module.exports.REGEXP_HTML_STRING.test(str)