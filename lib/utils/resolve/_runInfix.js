const _runInfix = (left, operator, right) => {
  switch (operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
    case '%':
      return left % right
    case '**':
      return left ** right
    case '<<':
      return left << right
    case '>>':
      return left >> right
    case '>>>':
      return left >>> right
    case '&':
      return left & right
    case '^':
      return left ^ right
    case '|':
      return left | right
    case '||':
      return left || right
    case '&&':
      return left && right
    case '<':
      return left < right
    case '<=':
      return left <= right
    case '>':
      return left > right
    case '>=':
      return left >= right
    case '==':
      // noinspection EqualityComparisonWithCoercionJS
      return left == right
    case '===':
      return left === right
  }

  throw new Error(`Unhandled operator: ${operator}`)
}

module.exports = _runInfix