const _runInfix = require('../../../../lib/utils/resolve/_runInfix')
const assert = require('assert')

describe('_runInfix', () => {
  const operators = [
    '+',
    '-',
    '*',
    '/',
    '%',
    '**',
    '<<',
    '>>',
    '>>>',
    '&',
    '^',
    '|',
    '||',
    '&&',
    '<',
    '<=',
    '>',
    '>=',
    '==',
    '===',
  ]

  const inputs = [
    [2, 2],
    [1, 3],
    [3, 1],
    [0, 1],
    [1, 0]
  ]

  operators
    .map(operator =>
      inputs
        .map(([left, right]) => [ left, operator, right, eval(`${left}${operator}${right}`) ])
    )
    .reduce((acc, next) => acc.concat(next), [])
    .forEach(([left, operator, right, result]) => {
      it(`should calculate ${left} ${operator} ${right} = ${result} correctly`, () => {
        assert.strictEqual(_runInfix(left, operator, right), result)
      })
    })

  it('should throw when given an unexpected operator', () => {
    let error

    try {
      _runInfix(1, '', 1)
    } catch (e) {
      error = e
    }

    assert.notStrictEqual(error, undefined)
  })
})