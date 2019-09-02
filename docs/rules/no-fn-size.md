# `jQuery.fn.size()` is deprecated, use the `.length` property instead

The .size() method returns the number of elements in the current jQuery object,
but duplicates the more-efficient .length property which provides the same
functionality. As of jQuery 1.9 the .length property is the preferred way to
retrieve this value.

Solution: Replace any use of .size() with .length.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('.foo').size()
```

Examples of **correct** code for this rule:

```js
$('.foo').length
```

## Further Reading

- [JQMIGRATE: jQuery.fn.size() is deprecated; use the .length property](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnsize-is-deprecated-use-the-length-property)
- [`.size()`](https://api.jquery.com/size)
