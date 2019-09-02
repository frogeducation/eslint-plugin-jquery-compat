# `jQuery.fn.live()` has been removed, use `jQuery.fn.on()` instead

`.live()` was removed in jQuery 1.9 - use `.on()` instead.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('.something').live('click', function() {})
```

Examples of **correct** code for this rule:

```js
$('body').on('click', '.something', function() {})
```

## Further Reading

- [`.on()`](https://api.jquery.com/on/)
- [`.live()`](https://api.jquery.com/live/)
