# No capitalised HTML data attributes

Data attribute capitalisation is now standardised in jQuery; only
word-boundaries in kebab-cased HTML data attributes are respected.

Keeping HTML data attributes lowercased avoids confusion.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('<div data-helloWorld="no" />').data('helloWorld') // --> undefined
$('<div data-helloWorld="no" />').data('helloworld') // --> "no"
```

Examples of **correct** code for this rule:

```js
$('<div data-hello-world="yes" />')
```

## Further Reading

- [`.data()`](https://api.jquery.com/data/)
