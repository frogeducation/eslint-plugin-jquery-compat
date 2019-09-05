const { detectJQueryCollections } = require('../util')

const DEPRECATED_METHODS = [
  'error',
  'load',
  'unload'
]

module.exports = {
  meta: {
    docs: {
      description: 'JQMIGRATE: jQuery.fn.error() is deprecated',
      detail: {
        body: 'Many shortcut methods for attaching certain event handlers to elements were\n' +
          'deprecated in jQuery 1.8/1.9, such as `$.fn.load`, `$.fn.error`, etc.\n' +
          '\n' +
          'For most cases, simply changing the code to use `$.fn.on(\'<event>\', handler)`\n' +
          'instead will suffice, eg',
        examples: {
          correct: [
            '$(\'.foo\').on(\'error\', handler)\n' +
            '$(\'.foo\').find(\'.bar\').on(\'error\', handler)\n' +
            'jQuery(\'.foo\').on(\'error\', handler)\n' +
            '$foo.on(\'error\', handler)\n' +
            '\n' +
            '$(\'.foo\').on(\'load\', handler)\n' +
            '$(\'.foo\').on(\'unload\', handler)'
          ],
          incorrect: [
            '$(\'.foo\').error(handler)\n' +
            '$(\'.foo\').find(\'.bar\').error(handler)\n' +
            'jQuery(\'.foo\').error(handler)\n' +
            '$foo.error(handler)\n' +
            '\n' +
            '$(\'.foo\').load(handler)\n' +
            '$(\'.foo\').unload(handler)'
          ]
        },
        links: [
          '[JQMIGRATE: jQuery.fn.error() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnerror-is-deprecated)',
          '[JQMIGRATE: jQuery.fn.load() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnload-is-deprecated)',
          '[JQMIGRATE: jQuery.fn.unload() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnunload-is-deprecated)',
          '[`.error()`](https://api.jquery.com/error/)',
          '[`.load()`](https://api.jquery.com/load/)',
          '[`.unload()`](https://api.jquery.com/unload/)',
          '[`.on()`](https://api.jquery.com/on/)'
        ]
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnerror-is-deprecated',
      tags: [ 'v1.9' ],
      deprecated: '1.8.0',
      removed: '3.0.0',
      fixFrom: '1.7.0'
    },
    messages: {
      'no-deprecated-event-methods':
        'jQuery.fn.{{fn}}(handler) is deprecated, use $(...).on(\'{{fn}}\', handler) instead'
    },
    type: 'problem',
    fixable: 'code'
  },
  create: detectJQueryCollections((
    context,
    { foundAPositiveMatch, foundOnlyPositiveMatches }
  ) => ({
    "CallExpression:exit": node => {
      if (
        !foundAPositiveMatch(node) ||
        node.callee.type !== "MemberExpression" ||
        node.callee.property.type !== "Identifier" ||
        !DEPRECATED_METHODS.includes(node.callee.property.name)
      ) {
        return
      }

      const identifier = node.callee.property;

      const report = {
        node: identifier,
        messageId: 'no-deprecated-event-methods',
        data: {
          fn: identifier.name
        }
      }

      if (foundOnlyPositiveMatches(node)) {
        report.fix = fixer => fixer.replaceTextRange(
          [identifier.range[0], identifier.range[1] + 1],
          `on('${identifier.name}', `
        )
      }

      context.report(report)
    }
  }))
}
