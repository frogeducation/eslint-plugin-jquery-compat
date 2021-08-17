const mergeVisitors = require('./mergeVisitors')
const isJQuery = require('./isJQuery')

const identifierSmellsLikeJQuery = ({ name }) =>
  ['element'].includes(name) || /^\$.+/.test(name)

const identifierSmellsLikeNotJQuery = ({ name }) => name === 'model'

const detectJQueryCollections = (() => {
  const symbol = Symbol('mightBeJQueryCollection')
  const EMPTY = 0 // 0b00000
  const POSITIVE = 1 << 0 // 0b00001
  const NEGATIVE = 1 << 1 // 0b00010
  const unionBitfields = (left, right) => (left || EMPTY) | (right || EMPTY)

  // Positive matches on:
  // $()
  // $foo
  // element
  // this.element
  //
  // Negative matches on:
  // this.element.model()
  // $foo.model()
  //
  // Ignores:
  // $.whatever

  return create =>
    (context, ...moreArgs) =>
      mergeVisitors(
        {
          Identifier: node => {
            if (identifierSmellsLikeJQuery(node)) {
              node[symbol] = POSITIVE
            } else if (identifierSmellsLikeNotJQuery(node)) {
              node[symbol] = NEGATIVE
            }
          },
          'MemberExpression:exit': node => {
            if (node.property[symbol] === NEGATIVE) {
              node[symbol] = NEGATIVE
            } else {
              node[symbol] = unionBitfields(
                node.object[symbol],
                node.property[symbol]
              )
            }
          },
          'CallExpression:exit': node => {
            node[symbol] = node.callee[symbol]

            if (isJQuery(node.callee)) {
              node[symbol] = POSITIVE
            }
          },
          'LogicalExpression:exit': node => {
            node[symbol] = unionBitfields(node.left[symbol], node.right[symbol])
          },
          'ConditionalExpression:exit': node => {
            node[symbol] = unionBitfields(
              node.consequent[symbol],
              node.alternate[symbol]
            )
          },
        },
        create(
          context,
          {
            foundOnlyPositiveMatches: node =>
              (node[symbol] & (POSITIVE | NEGATIVE)) === POSITIVE,
            foundOnlyNegativeMatches: node =>
              (node[symbol] & (POSITIVE | NEGATIVE)) === NEGATIVE,
            foundAPositiveMatch: node => !!(node[symbol] & POSITIVE),
            foundANegativeMatch: node => !!(node[symbol] & NEGATIVE),
          },
          ...moreArgs
        )
      )
})()

module.exports = detectJQueryCollections
