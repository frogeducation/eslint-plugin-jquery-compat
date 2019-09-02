# `$.fn.toggle(handler, handler...)` is deprecated

There are two completely different meanings for the .toggle() method. The use of
.toggle() to show or hide elements is not affected. The use of .toggle() as a
specialized click handler was deprecated in 1.8 and removed in 1.9.

Rewrite the code that depends on $().toggle(), use the minified production
version of the jQuery Migrate plugin to provide the functionality, or extract
the $().toggle() method from the plugin's source and use it in the application.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('.foo').toggle(function() {
  console.log('.foo first click handler')
}, function() {
  console.log('.foo second click handler')
})
```

Examples of **correct** code for this rule:

```js
$('.foo').toggle(1000, function() {
  console.log('.foo animation done')
})
```

## Further Reading

- [JQMIGRATE: jQuery.fn.toggle(handler, handler...) is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfntogglehandler-handler-is-deprecated)
- [`.toggle() (event)`](https://api.jquery.com/toggle-event/)
- [`.toggle() (animation)`](https://api.jquery.com/toggle/)
