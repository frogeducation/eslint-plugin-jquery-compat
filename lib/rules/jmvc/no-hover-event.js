const REGEXP_SELECTOR_AND_HOVER_EVENT = /[^'"\n]+ hover$/

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: \'hover\' pseudo-event is deprecated, use \'mouseenter mouseleave\' (JMVC)',
      category: 'Possible Errors',
      recommended: false,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-hover-pseudo-event-is-deprecated-use-mouseenter-mouseleave',
      tags: [ 'jmvc' ],
      deprecated: '1.8.0',
      removed: '1.9.0',
      fixFrom: '1.0.0'
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
