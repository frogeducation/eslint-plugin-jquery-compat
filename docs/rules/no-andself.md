# `$.fn.andSelf()` replaced by `$.fn.addBack()`

The .andSelf() method has been renamed to .addBack() as of jQuery 1.9 to better
reflect its purpose of adding back the previous set of results.

Replace any use of .andSelf() with .addBack().

## Rule Details


Examples of **incorrect** code for this rule:

```js
$('.foo').find('.bar').andSelf()
```

Examples of **correct** code for this rule:

```js
$('.foo').find('.bar').addBack()
```

## Further Reading

- [JQMIGRATE: jQuery.fn.andSelf() replaced by jQuery.fn.addBack()](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnandself-replaced-by-jqueryfnaddback)
- [`.andSelf()`](https://api.jquery.com/andself/)
- [`.addBack()`](https://api.jquery.com/addback/)
