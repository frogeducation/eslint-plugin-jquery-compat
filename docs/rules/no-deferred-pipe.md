# `deferred.pipe()` is deprecated

The .pipe() method on a jQuery.Deferred object was deprecated as of jQuery 1.8,
when the .then() method was changed to perform the same function.

In most cases it is sufficient to change all occurrences of .pipe() to .then().
Ensure that you aren't relying on context/state propagation (e.g., using this) or synchronous callback invocation, which were dropped from .then() for Promises/A+ interoperability as of jQuery 3.0.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$.Deferred().pipe(fn)
```

Examples of **correct** code for this rule:

```js
$.Deferred().then(fn)
```

## Further Reading

- [JQMIGRATE: deferred.pipe() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-deferredpipe-is-deprecated)
- [Deferred Object](https://api.jquery.com/category/deferred-object/)
- [`deferred.pipe()`](https://api.jquery.com/deferred.pipe/)
- [`deferred.then()`](https://api.jquery.com/deferred.then/)
