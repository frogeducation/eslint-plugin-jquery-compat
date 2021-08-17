const mergeVisitors = require('./mergeVisitors')

const detectDangerousI18n = ({ i18nIdentifier, knownHtmlKeys }) => {
  const symbol = Symbol('mightBeDangerousI18n')
  const EMPTY = 0 // 0b00000
  const HTMLI18N = 1 << 0 // 0b00001 -- bad i18n string
  const I18NCALL = 1 << 1 // 0b00010 -- called i18n function
  const HTMLOPEN = 1 << 2 // 0b00100 -- "<open-tag>..."
  const HTMLTERM = 1 << 3 // 0b01000 -- "...</close-tag>"
  const unionBitfields = (left, right) => (left || EMPTY) | (right || EMPTY)
  const couldBeDangerousHtmlString = ({ [symbol]: value }) =>
    (value & HTMLI18N) !== EMPTY &&
    (value & I18NCALL) !== EMPTY &&
    ((value & HTMLOPEN) === EMPTY || (value & HTMLTERM) === EMPTY)

  return create =>
    (context, ...moreArgs) =>
      mergeVisitors(
        {
          Literal: node => {
            node[symbol] = EMPTY
            if (knownHtmlKeys.includes(node.value)) {
              node[symbol] = HTMLI18N
            } else {
              if (/<\/[a-zA-Z][a-zA-Z-]*>$/.test(node.value)) {
                node[symbol] = unionBitfields(node[symbol], HTMLTERM)
              }
              if (/^<[a-zA-Z]/.test(node.value)) {
                node[symbol] = unionBitfields(node[symbol], HTMLOPEN)
              }
            }
          },
          CallExpression: node => {
            switch (node.callee.type) {
              case 'Identifier':
                if (node.callee.name === i18nIdentifier) {
                  node[symbol] = I18NCALL
                }
                break
              case 'MemberExpression':
                if (
                  node.callee.property.type === 'Identifier' &&
                  node.callee.property.name === i18nIdentifier
                ) {
                  node[symbol] = I18NCALL
                }
                break
            }
          },
          'CallExpression:exit': node => {
            if ((node[symbol] & I18NCALL) !== EMPTY) {
              // look at arguments, see if they are bad strings!
              if (node.arguments.some(argNode => argNode[symbol] & HTMLI18N)) {
                node[symbol] |= HTMLI18N
              }
            }
          },
        },
        create(context, { couldBeDangerousHtmlString }, ...moreArgs)
      )
}

module.exports = detectDangerousI18n
