# `$.browser` is deprecated

jQuery.browser was deprecated in version 1.3, and finally removed in 1.9.
Browser sniffing is notoriously unreliable as means of detecting whether to
implement particular features.

Where possible, use feature detection to make code decisions rather
than trying to detect a specific browser. The Modernizr library provides a wide
variety of feature detections. As a last resort, you can directly look at the
navigator.userAgent string to detect specific strings returned by the browser.

## Rule Details

Examples of **incorrect** code for this rule:

```js
if (!$.browser.msie) {
  console.log("supported!")
}
```

Examples of **correct** code for this rule:

```js
if (window.someFeature) {
  console.log("supported!")
}
```

## Further Reading

- [JQMIGRATE: jQuery.browser is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerybrowser-is-deprecated)
- [`jQuery.browser`](https://api.jquery.com/jQuery.browser)
