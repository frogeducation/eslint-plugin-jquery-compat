const mergeVisitors = require('./mergeVisitors')

const detectIdentifierInMemberExpression = isInterestingIdentifier => {
  const symbol = Symbol('identifierDetected')
  const EMPTY = 0 // 0b00000
  const POSITIVE = 1 << 0 // 0b00001
  const unionBitfields = (left, right) => (left || EMPTY) | (right || EMPTY)

  return create =>
    (context, ...moreArgs) =>
      mergeVisitors(
        {
          Identifier: node => {
            if (isInterestingIdentifier(node)) {
              node[symbol] = POSITIVE
            }
          },
          'MemberExpression:exit': node => {
            node[symbol] = unionBitfields(
              node.object[symbol],
              node.property[symbol]
            )
          },
        },
        create(
          context,
          {
            memberExpressionContainsIdentifier: node =>
              !!(node[symbol] & POSITIVE),
          },
          ...moreArgs
        )
      )
}

module.exports = detectIdentifierInMemberExpression
