# `jQuery.fn.attr('value', ...)` no longer gets/sets properties

Prior to jQuery 1.9, `$().attr("value")` retrieved the value property instead of
the value attribute (which generally reflects the value that was read from HTML
markup). `$().attr( "value", val )` set the value property instead of the value
attribute. This caused inconsistent behavior with selectors referencing the
value attribute.

Use $().val() (for form controls) or $().prop("value") (for other elements) to
get the current value, and try to explicitly limit the use of [value=…] in
selectors to input and/or option elements wherever possible.  Use $().val( val )
(for form controls) or $().prop( "value", val ) (for other elements) to set the
current value.

## Rule Details

Examples of **incorrect** code for this rule:

```js
var value = $('input.foo').attr('value')
$('input.foo').attr('value', 'newValue')
```

Examples of **correct** code for this rule:

```js
var value = $('input.foo').val()
$('input.foo').val('newValue')

var value2 = $('div.bar').prop('value')
$('div.bar').prop('value', 'newValue')
```

## Further Reading

- [JQMIGRATE: jQuery.fn.attr('value') no longer gets properties](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrvalue-no-longer-gets-properties)
- [JQMIGRATE: jQuery.fn.attr('value', val) no longer sets properties](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrvalue-val-no-longer-sets-properties)
- [`.attr()`](https://api.jquery.com/attr)
- [`.val()`](https://api.jquery.com/val/)
- [`.prop()`](https://api.jquery.com/prop/)
