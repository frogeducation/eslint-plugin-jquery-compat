# No trailing commas after selector in JMVC event listeners

jQuery 1.9+ will throw a parsing error if a selector contains a trailing comma.

This rule ensures JMVC event listeners do not have a trailing comma after the
selector.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$.Controller('MyController', {
}, {
  "div.something, click": function() { /* ...snip... */ }
})
```

Examples of **correct** code for this rule:

```js
$.Controller('MyController', {
}, {
  "div.something click": function() { /* ...snip... */ }
})
```

```js
$.Controller('MyController', {
}, {
  "div.something,div.another click": function() { /* ...snip... */ }
})
```
