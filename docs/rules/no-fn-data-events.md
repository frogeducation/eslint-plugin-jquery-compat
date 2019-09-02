# Use of `jQuery.fn.data('events')` is deprecated

Prior to 1.9, .data("events") could be used to retrieve jQuery's undocumented
internal event data structure for an element if no other code had defined a data
element with the name "events". This special case has been removed in 1.9.

There is no public interface to retrieve this internal data structure, and it
remains undocumented. The only useful applications might be for debugging. The
data is available via jQuery.\_data("events") but this is not a documented
interface.

If this rule is flagging up code where an element is known to have custom data
with the name "events", either use a different name to avoid confusion, or
disable the rule for that particular piece of code:

```js
$('.foo').data('events', 'my-custom-event-data')

// ...snip...

// eslint-disable-next-line jquery-compat/no-fn-data-events
var customEventData = $('.foo').data('events')
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('.foo').data('events')
```

Examples of **correct** code for this rule:

```js
$('.foo').data('custom-events')
```

## Further Reading

- [JQMIGRATE: Use of jQuery.fn.data('events') is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-use-of-jqueryfndataevents-is-deprecated)
- [`.data()`](https://api.jquery.com/data/)
