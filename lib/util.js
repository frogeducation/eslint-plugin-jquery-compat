// @todo add explicit unit tests for these functions
const JQUERY_GLOBALS = ['$', 'jQuery'];

const isJQuery = node =>
  node.type === 'Identifier' && JQUERY_GLOBALS.includes(node.name)
module.exports.isJQuery = isJQuery

const identifierSmellsLikeJQuery = ({ name }) => (
  ['element'].includes(name) ||
  /^\$.+/.test(name)
)

const identifierSmellsLikeNotJQuery = ({ name }) => name === 'model'

const mergeVisitors = (...visitors) => {
  const allDeclaredKeys = visitors
    .map(visitor => Object.keys(visitor))
    .reduce((acc, next) => acc.concat(next), [])
    .filter((value, index, array) => array.indexOf(value) === index)

  return allDeclaredKeys
    .map(key =>
      ({
        [key]: node => visitors.map(visitor => visitor[key])
          .filter(value => !!value)
          .map(callback => callback(node))
          .reverse()[0]
      })
    )
    .reduce((acc, next) => ({ ...acc, ...next }), {})
}

const detectJQueryCollections = (() => {
  const symbol = Symbol('mightBeJQueryCollection');
  const EMPTY    = 0   ; // 0b00000
  const POSITIVE = 1<<0; // 0b00001
  const NEGATIVE = 1<<1; // 0b00010
  const unionBitfields = (left, right) => (left || EMPTY) | (right || EMPTY);

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

  return create => (context, ...moreArgs) =>
    mergeVisitors(
      {
        Identifier: node => {
          if (identifierSmellsLikeJQuery(node)) {
            node[symbol] = POSITIVE;
          } else if (identifierSmellsLikeNotJQuery(node)) {
            node[symbol] = NEGATIVE;
          }
        },
        'MemberExpression:exit': node => {
          if (node.property[symbol] === NEGATIVE) {
            node[symbol] = NEGATIVE
          } else {
            node[symbol] = unionBitfields(node.object[symbol], node.property[symbol]);
          }
        },
        'CallExpression:exit': node => {
          node[symbol] = node.callee[symbol]

          if (isJQuery(node.callee)) {
            node[symbol] = POSITIVE;
          }
        },
        'LogicalExpression:exit': node => {
          node[symbol] = unionBitfields(node.left[symbol], node.right[symbol]);
        },
        'ConditionalExpression:exit': node => {
          node[symbol] = unionBitfields(node.consequent[symbol], node.alternate[symbol]);
        }
      },
      create(
        context,
        {
          foundOnlyPositiveMatches: node => (node[symbol] & (POSITIVE | NEGATIVE)) === POSITIVE,
          foundOnlyNegativeMatches: node => (node[symbol] & (POSITIVE | NEGATIVE)) === NEGATIVE,
          foundAPositiveMatch: node => !!(node[symbol] & POSITIVE),
          foundANegativeMatch: node => !!(node[symbol] & NEGATIVE)
        },
        ...moreArgs
      )
    )
})()
module.exports.detectJQueryCollections = detectJQueryCollections;

const isFunction = (node, context) => {
  if (node.type !== 'Identifier') {
    return /FunctionExpression/.test(node.type)
  }

  return isFunction(
    resolveIdentifier(node, context),
    context
  )
}

const resolveIdentifier = (node, context) => {
  if (!node || node.type !== 'Identifier') return null

  /* Check if the passed Identifier is a variable which is declared
   * within a visble scope */
  const { scopeManager } = context.getSourceCode()

  let parent = node, scope = null

  while (parent && !scope) {
    scope = scopeManager.acquire(parent)
    parent = parent.parent
  }

  if (!scope) return false

  const variable = scope.variables.find(({ name }) => name === node.name)

  if (!variable) return false

  // Find last write reference to variable
  const ref = [...variable.references].reverse().find(ref => ref.isWrite())

  if (ref && ref.writeExpr && ref.writeExpr.type === 'Identifier') {
    return resolveIdentifier(ref.writeExpr, context)
  }

  return ref && ref.writeExpr
}

// Regex taken from jquery-migrate source
module.exports.REGEXP_HTML_STRING = /^([^<]*)(<[\w\W]+>)([^>]*)$/
module.exports.isHTMLString = str => module.exports.REGEXP_HTML_STRING.test(str)

module.exports.isFunction = isFunction
module.exports.resolveIdentifier = resolveIdentifier
