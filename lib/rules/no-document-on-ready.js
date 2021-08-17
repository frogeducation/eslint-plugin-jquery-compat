const { detectJQueryCollections, resolveIdentifier } = require('../util')

const safeResolveIdentifier = (node, context) =>
  resolveIdentifier(node, context) || node

module.exports = {
  meta: {
    docs: {
      description: "JQMIGRATE: 'ready' event is deprecated",
      detail: {
        body:
          '**Cause**: Using one of jQuery\'s API methods to bind a "ready" event, e.g. `$( document ).on( "ready", fn )`, will cause the function to be called when the document is ready, but only if it is attached before the browser fires its own `DOMContentLoaded` event. That makes it unreliable for many uses, particularly ones where jQuery or its plugins are loaded asynchronously after page load.\n' +
          '\n' +
          '**Solution**: Replace any use of `$( document ).on( "ready", fn )` with `$( document ).ready( fn )` or more simply, just `$( fn )`. These alternative methods work reliably even when the document is already loaded.',
        examples: {
          correct: ['$(document).ready(callback)', '$(callback)'],
          incorrect: ['$(document).on("ready", callback)'],
        },
      },
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-ready-event-is-deprecated',
      tags: ['v1.9'],
      deprecated: '1.8.0',
      fixFrom: '1.0.0',
    },
    messages: {
      'no-document-on-ready':
        "'ready' event is deprecated; use" + '$(document).ready(fn) or $(fn)',
    },
    type: 'problem',
    fixable: 'code',
  },
  create: detectJQueryCollections(
    (context, { foundAPositiveMatch, foundOnlyPositiveMatches }) => ({
      'CallExpression:exit': node => {
        if (
          !foundAPositiveMatch(node) ||
          node.callee.type !== 'MemberExpression' ||
          node.callee.property.type !== 'Identifier' ||
          node.callee.property.name !== 'on' ||
          node.arguments.length < 2 ||
          safeResolveIdentifier(node.arguments[0], context).value !== 'ready'
        ) {
          return
        }

        const report = {
          node: node.callee.property,
          messageId: 'no-document-on-ready',
        }

        if (foundOnlyPositiveMatches(node)) {
          report.fix = fixer =>
            fixer.replaceTextRange(
              [node.callee.property.range[0], node.arguments[1].range[0]],
              'ready('
            )
        }

        context.report(report)
      },
    })
  ),
}
