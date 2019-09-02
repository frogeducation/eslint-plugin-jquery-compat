const REGEXP_SELECTOR_AND_HOVER_EVENT = /[^'"\n]+ hover$/

module.exports = {
  meta: {
    docs: {
      description: 'Disallow hover event in JMVC event listeners',
      category: 'Possible Errors',
      recommended: false,
      jmvc: true
    },
    messages: {
      'no-hover-event': "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
    },
    type: 'problem'
  },
  create: context => ({
    Property: node => {
      const { type, value } = node.key

      if (type !== 'Literal' ||
        !REGEXP_SELECTOR_AND_HOVER_EVENT.test(value)
      ) {
        return
      }

      const column = value.length - "hover".length

      const loc = node.key.loc.start

      context.report({
        messageId: 'no-hover-event',
        node,
        loc: {
          start: {
            ...loc,
            column: loc.column + column + 1
          }
        }
      })
    }
  })
}
