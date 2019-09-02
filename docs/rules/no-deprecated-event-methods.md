# `jQuery.fn.<event>(handler) is deprecated, use jQuery.fn.on('<event>', handler) instead`

Many shortcut methods for attaching certain event handlers to elements were
deprecated in jQuery 1.8/1.9, such as `$.fn.load`, `$.fn.error`, etc.

For most cases, simply changing the code to use `$.fn.on('<event>', handler)`
instead will suffice, eg

```js
// Before:
$('.foo').load(function() { /* ...snip... */ })

// After:
$('.foo').on('load', function() { /* ...snip... */ })
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('.foo').error(handler)
$('.foo').find('.bar').error(handler)
jQuery('.foo').error(handler)
$foo.error(handler)

$('.foo').load(handler)
$('.foo').unload(handler)
```

Examples of **correct** code for this rule:

```js
$('.foo').on('error', handler)
$('.foo').find('.bar').on('error', handler)
jQuery('.foo').on('error', handler)
$foo.on('error', handler)

$('.foo').on('load', handler)
$('.foo').on('unload', handler)
```

## Further Reading

- [JQMIGRATE: jQuery.fn.error() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnerror-is-deprecated)
- [JQMIGRATE: jQuery.fn.load() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnload-is-deprecated)
- [JQMIGRATE: jQuery.fn.unload() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnunload-is-deprecated)
- [`.error()`](https://api.jquery.com/error/)
- [`.load()`](https://api.jquery.com/load/)
- [`.unload()`](https://api.jquery.com/unload/)
- [`.on()`](https://api.jquery.com/on/)
