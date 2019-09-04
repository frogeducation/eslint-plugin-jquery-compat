const { isJQuery } = require('../util')

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of $.boxModel/$.support.boxModel',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryboxmodel-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.3.0',
      removed: '1.8.0',
      fixFrom: '1.0.0'
    },
    messages: {
      'no-box-model': '$.{{api}} is deprecated'
    },
    type: 'problem'
  },
  create: context => ({
    Identifier: node => {
      if (
        node.name !== 'boxModel' ||
        node.parent.type !== 'MemberExpression'
      ) return

      const { object } = node.parent

      let api = null

      if (isJQuery(object)) api = 'boxModel'

      try {
        if (object.property.name === 'support' && isJQuery(object.object)) {
          api = 'support.boxModel'
        }
      } catch (e) {
        // ignore
      }

      if (!api) return

      context.report({
        node,
        messageId: 'no-box-model',
        data: { api }
      })
    }
  })
}
