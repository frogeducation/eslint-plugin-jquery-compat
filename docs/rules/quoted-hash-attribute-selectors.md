# Attribute selectors which include a "#" must be quoted

Selectors such as a[href=#main] are not valid CSS syntax because the value
contains special characters that are not quoted. Until jQuery 1.11.3/2.1.4 this
was accepted, but the behavior is non-standard and was never documented. In
later versions this selector throws an error. In some cases with complex
selectors, Migrate may not attempt a repair. In those cases a fatal error will
be logged on the console and you will need to fix the selector manually.

Put quotes around any attribute values that have special characters, e.g.
a[href="#main"]. The warning message contains the selector that caused the
problem, use that to find the selector in the source files.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('[href=#main]')

var selector = '[href=#main']
```

Examples of **correct** code for this rule:

```js
$('[href="#main"]')

var selector = '[href="#main"]'
```

## Further Reading

- [JQMIGRATE: Attribute selector with '#' must be quote](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-attribute-selector-with--must-be-quoted)
- [Attribute Selectors](https://api.jquery.com/category/selectors/attribute-selectors/)
