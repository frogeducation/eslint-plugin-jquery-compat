# `$.boxModel`/`$.support.boxModel` is deprecated

These two deprecated properties are false when the page is using Quirks mode,
and true when the page is in standards mode. Quirks mode was never supported in
jQuery so these properties were removed.

Do not use jQuery in Quirks mode, it has never been supported. See the previous
item for solutions.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if ($.boxModel) { /* ...snip... */ }
if ($.support.boxModel) { /* ...snip... */ }
if (jQuery.boxModel) { /* ...snip... */ }
if (jQuery.support.boxModel) { /* ...snip... */ }
```

Examples of **correct** code for this rule:

```js
if (featureDetection.boxModel) { /* ...snip... */ }
```

## Further Reading

- [JQMIGRATE: jQuery.support.boxModel is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysupportboxmodel-is-deprecated)
- [`jQuery.boxModel`](https://api.jquery.com/jQuery.boxModel/)
