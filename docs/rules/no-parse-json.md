# Disallow `$.parseJSON`

As of jQuery 1.9+ `$.parseJSON` is identical to native `JSON.parse` and will not
attempt to "fix" invalid JSON.

To retain the old behaviour and "fix" invalid falsy behaviour, use:

```js
JSON.parse(input || 'null')
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
$.parseJSON(input)
```

```js
jQuery.parseJSON(input)
```

Examples of **correct** code for this rule:

```js
JSON.parse(input)
```

```js
JSON.parse(input || 'null')
```

## Further Reading

- [`jQuery.parseJSON()`](http://api.jquery.com/jQuery.parseJSON/)
