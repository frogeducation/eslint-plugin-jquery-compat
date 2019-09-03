# No hover events in JMVC event listeners

jQuery 1.9+ no longer supports the 'hover' event name. In stead, it expects 'mouseenter' or 'mouseleave'. 

This rule ensures JMVC event listeners do not rely on the 'hover' event.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$.Controller('MyController', {
}, {
  "div.something hover": function() { /* ...snip... */ }
})
```

Examples of **correct** code for this rule:

```js
$.Controller('MyController', {
}, {
  "div.something mouseenter": function() { /* ...snip... */ },
  "div.something mouseleave": function() { /* ...snip... */ }
})
```
