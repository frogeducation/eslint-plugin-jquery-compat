# `jQuery.fn.die()` has been removed, use `jQuery.fn.off()` instead

`.die()` was removed in jQuery 1.9 - use `.off()` instead.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('.something').die('click')
```

Examples of **correct** code for this rule:

```js
$('body').off('click', '.something')
```

## Further Reading

- [`.die()`](https://api.jquery.com/die/)
- [`.off()`](https://api.jquery.com/off/)
