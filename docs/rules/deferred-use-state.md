# Use `deferred.state()` instead of removed functions `deferred.isRejected()`/`deferred.isResolved()`

`deferred.isRejected()` and `deferred.isResolved()` were removed in jQuery 1.8;
use `deferred.state() === 'rejected'` and `deferred.state() === 'resolved'`
instead (`deferred.state()` may also return `'pending'`).

## Rule Details

Examples of **incorrect** code for this rule:

```js
var myDeferred = $.Deferred()

if (myDeferred.isRejected()) {
  /* ...snip... */
} else (myDeferred.isResolved()) {
  /* ...snip... */
}
```

Examples of **correct** code for this rule:

```js
var myDeferred = $.Deferred()

if (myDeferred.state() === 'rejected') {
  /* ...snip... */
} else (myDeferred.state() === 'resolved') {
  /* ...snip... */
}
```

## Further Reading

- [`deferred.state()`](https://api.jquery.com/deferred.state/)
- [`deferred.isRejected()`](https://api.jquery.com/deferred.isRejected/)
- [`deferred.isResolved()`](https://api.jquery.com/deferred.isResolved/)
