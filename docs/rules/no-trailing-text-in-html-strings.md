# Text after last tag in HTML strings is ignored

HTML strings passed to $() should begin and end with tags. Any text following
the last tag is ignored. When upgrading to jQuery 1.9 and using $.parseHTML(),
note that leading or trailing text is not ignored, and those text nodes will be
part of the data returned.

Usually this warning is due to an error in the HTML string, where text is
present when it should not be there. Remove the leading or trailing text before
passing the string to $.parseHTML() if it should not be part of the collection.
Alternatively you can use $($.parseHTML(html)).filter("\*") to remove all
top-level text nodes from the set and leave only elements.

## Rule Details

Examples of **incorrect** code for this rule:

```js
$('<h1>foo</h1>bar')

$('<h1>foo</h1>' + 'bar')

var text = '<h1>foo</h1>bar'
$(text)

var text = '<h1>foo</h1>' + 'bar'
$(text)
```

Examples of **correct** code for this rule:

```js
$('<h1>foo</h1>')

$('<h1>foo</h1>' + '<h2>bar</h2>')

var text = '<h1>foo</h1>'
$(text)
```

## Further Reading

- [JQMIGRATE: $(html) text after last tag is ignored](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-text-after-last-tag-is-ignored)
- [`.html()`](http://api.jquery.com/html/)
