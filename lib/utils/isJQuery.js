const JQUERY_GLOBALS = ['$', 'jQuery'];
const isJQuery = node => node.type === 'Identifier' && JQUERY_GLOBALS.includes(node.name)

module.exports = isJQuery