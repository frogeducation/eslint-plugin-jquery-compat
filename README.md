# eslint-plugin-jquery-compat

<!--- 
    Hello! Please do not edit 'README.md' directly, it is generated from a 
    template in build/readme-template.md, via the build/generate-readme.js 
    script
    
    Please make changes in the template, or in rule definitions.
    
    Changes made directly in 'README.md' may be accidentally overwritten.
--->

> Linting rules for checking jQuery version compatibility

- [Installation](#installation)
- [Usage](#usage)
- [Supported rules](#supported-rules)
  - [v3.0](#v30)
  - [v1.9](#v19)
  - [jmvc](#jmvc)
- [Contributing](#contributing)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jquery-compat`:

```
$ npm install @frogeducation/eslint-plugin-jquery-compat --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jquery-compat` globally.

## Usage

Add `jquery-compat` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@frogeducation/jquery-compat"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@frogeducation/jquery-compat/no-parse-json": 2
    }
}
```

Alternatively, extend the recommended config:


```js
{
  "extends": [
    // enables all recommended rules
    "plugin:@frogeducation/jquery-compat/recommended",
  ]
}
```

There are also two tags `v1.9` and `v3.0` for the upgrade checkpoints, and special tags for every version that enable only the fixes that can be applied at every three-digit version up to 3.4.1 (i.e. while preparing for an upgrade from 1.7 to 1.9, anything added in 1.8 is not yet fixable as you have not yet upgraded the jQuery version)

```js
{
  "extends": [
    // enables only the rules required to upgrade 1.0 to 1.9
    "plugin:@frogeducation/jquery-compat/v1.9",
    // enables only the rules that are fixable from v1.7 upwards
    "plugin:@frogeducation/jquery-compat/fixable-from-v1.7.0"
  ]
}
```

and finally, rules that only apply to [JMVC](http://www.javascriptmvc.com/) users:

```js
{
  "extends": [
    // enables only the rules required for JMVC users
    "plugin:@frogeducation/jquery-compat/jmvc"
  ]
}
```

## Supported Rules


| rule | deprecated | fixable from | removed | `--fix` | recommended |
| ---- | ---- | ---- | ---- | ---- | ---- |
| [attr-select](#frogeducationjquery-compatattr-select) | 1.9.0 | 1.6.0 | 1.9.0 | Yes | Yes |
| [deferred-use-state](#frogeducationjquery-compatdeferred-use-state) | 1.7.0 | 1.7.0 | 1.8.0 | Yes | Yes |
| [html-string-must-start-with-tag](#frogeducationjquery-compathtml-string-must-start-with-tag) | 1.9.0 | 1.0.0 | 1.9.0 |  | Yes |
| [jmvc/no-hover-event](#frogeducationjquery-compatjmvcno-hover-event) | 1.8.0 | 1.0.0 | 1.9.0 |  |  |
| [jmvc/no-null-model-calls](#frogeducationjquery-compatjmvcno-null-model-calls) | 1.8.0 | 1.0.0 | 1.8.0 |  | Yes |
| [jmvc/no-trailing-comma-after-selector](#frogeducationjquery-compatjmvcno-trailing-comma-after-selector) | 1.9.0 | 1.0.0 | 1.9.0 | Yes |  |
| [no-andself](#frogeducationjquery-compatno-andself) | 1.8.0 | 1.8.0 | 3.0.0 | Yes | Yes |
| [no-attr-value](#frogeducationjquery-compatno-attr-value) | 1.9.0 | 1.6.0 | 1.9.0 |  | Yes |
| [no-attrfn](#frogeducationjquery-compatno-attrfn) | 1.8.0 | (must rewrite) | 1.9.0 |  | Yes |
| [no-box-model](#frogeducationjquery-compatno-box-model) | 1.3.0 | 1.0.0 | 1.8.0 |  | Yes |
| [no-browser](#frogeducationjquery-compatno-browser) | 1.3.0 | 1.0.0 | 1.9.0 |  | Yes |
| [no-buildFragment](#frogeducationjquery-compatno-buildFragment) | 1.8.0 | 1.0.0 | 1.8.0 |  | Yes |
| [no-capitalised-html-data-attributes](#frogeducationjquery-compatno-capitalised-html-data-attributes) | 3.0.0 | 1.0.0 | 3.0.0 | Yes | Yes |
| [no-clean](#frogeducationjquery-compatno-clean) | 1.9.0 | (must rewrite) | 1.9.0 |  | Yes |
| [no-deferred-pipe](#frogeducationjquery-compatno-deferred-pipe) | 1.8.0 | 1.8.0 |  | Yes | Yes |
| [no-deprecated-event-methods](#frogeducationjquery-compatno-deprecated-event-methods) | 1.8.0 | 1.7.0 | 3.0.0 | Yes | Yes |
| [no-die](#frogeducationjquery-compatno-die) | 1.7.0 | 1.7.0 | 1.9.0 | Yes | Yes |
| [no-document-on-ready](#frogeducationjquery-compatno-document-on-ready) | 1.8.0 | 1.0.0 |  | Yes | Yes |
| [no-fn-data-events](#frogeducationjquery-compatno-fn-data-events) | 1.9.0 | (must rewrite) | 1.9.0 |  | Yes |
| [no-fn-size](#frogeducationjquery-compatno-fn-size) | 1.8.0 | 1.0.0 | 3.0.0 | Yes | Yes |
| [no-global-handle](#frogeducationjquery-compatno-global-handle) | 1.7.0 | (must rewrite) | 1.9.0 |  | Yes |
| [no-global-trigger](#frogeducationjquery-compatno-global-trigger) | 1.9.0 | (must rewrite) | 1.9.0 |  | Yes |
| [no-hover-event](#frogeducationjquery-compatno-hover-event) | 1.8.0 | 1.0.0 | 1.9.0 | Yes | Yes |
| [no-live](#frogeducationjquery-compatno-live) | 1.7.0 | 1.7.0 | 1.9.0 | Yes | Yes |
| [no-null-param](#frogeducationjquery-compatno-null-param) | 1.8.0 | 1.0.0 | 1.8.0 |  | Yes |
| [no-parse-json](#frogeducationjquery-compatno-parse-json) | 3.0.0 | 1.0.0 |  | Yes | Yes |
| [no-scoped-ajax-events](#frogeducationjquery-compatno-scoped-ajax-events) | 1.9.0 | 1.0.0 | 1.9.0 |  | Yes |
| [no-sub](#frogeducationjquery-compatno-sub) | 1.7.0 | (must rewrite) | 1.9.0 |  | Yes |
| [no-swap](#frogeducationjquery-compatno-swap) | 1.9.0 | (must rewrite) |  |  | Yes |
| [no-toggle-handler](#frogeducationjquery-compatno-toggle-handler) | 1.8.0 | 1.0.0 | 1.9.0 |  | Yes |
| [no-trailing-text-in-html-strings](#frogeducationjquery-compatno-trailing-text-in-html-strings) | 1.9.0 | 1.0.0 | 1.9.0 |  | Yes |
| [quoted-hash-attribute-selectors](#frogeducationjquery-compatquoted-hash-attribute-selectors) | 1.11.0 | 1.0.0 | 1.11.0 | Yes | Yes |


### v3.0

#### [@frogeducation/jquery-compat/no-capitalised-html-data-attributes](docs/rules/no-capitalised-html-data-attributes.md)

<details>
  <summary>JQMIGRATE: jQuery.data() always sets/gets camelCased names</summary>

  Data attribute capitalisation is now standardised in jQuery; only
  word-boundaries in kebab-cased HTML data attributes are respected.
  
  Keeping HTML data attributes lowercased avoids confusion.

  Examples of **incorrect** code for this rule:

  ```js
  $('<div data-helloWorld="no" />').data('helloWorld') // --> undefined
  $('<div data-helloWorld="no" />').data('helloworld') // --> "no"
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('<div data-hello-world="yes" />')
  ```

  Further reading:
  - [`.data()`](https://api.jquery.com/data/)
<details>
  <summary>Included in 83 configs</summary>

  - v3.0
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



### v1.9

#### @frogeducation/jquery-compat/attr-select

<details>
  <summary>JQMIGRATE: `jQuery.fn.attr('selected')` might use property instead of attribute</summary>

  **Cause**: Prior to jQuery 1.9, `$().attr("checked")` etc. would sometimes use the checked|selected *property* instead of the *attribute* when interacting with non-XML elements, despite the fact that browsers and the HTML specifications allow the properties (current state) to differ from the attributes (initial/default state). This was a holdover from earlier versions of jQuery that did not offer `$().prop`.
  
  **Solution**: Boolean properties should generally not be passed to `$().attr` at all; replace with `$().prop` unless you truly intend to update the underlying HTML *attribute*.

  Examples of **incorrect** code for this rule:

  ```js
  if ($foo.attr("selected")) { /* ... */ }
  ```
  ```js
  if ($foo.attr("checked")) { /* ... */ }
  ```
  ```js
  if ($foo.attr("disabled")) { /* ... */ }
  ```
  
  Examples of **correct** code for this rule:

  ```js
  if ($foo.prop("selected")) { /* ... */ }
  ```
  ```js
  if ($foo.prop("checked")) { /* ... */ }
  ```
  ```js
  if ($foo.prop("disabled")) { /* ... */ }
  ```

  Further reading:
  - [JQMIGRATE: `jQuery.fn.attr('selected')` might use property instead of attribute](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnattrselected-might-use-property-instead-of-attribute)
  - [`.attr`](http://api.jquery.com/attr/)
  - [`.prop`](http://api.jquery.com/prop/)
<details>
  <summary>Included in 52 configs</summary>

  - v1.9
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/deferred-use-state](docs/rules/deferred-use-state.md)

<details>
  <summary>JQMIGRATE: `deferred.isResolved()` / `deferred.isRejected()` is deprecated</summary>

  `deferred.isRejected()` and `deferred.isResolved()` were removed in jQuery 1.8;
  use `deferred.state() === 'rejected'` and `deferred.state() === 'resolved'`
  instead (`deferred.state()` may also return `'pending'`).

  Examples of **incorrect** code for this rule:

  ```js
  var myDeferred = $.Deferred()
  
  if (myDeferred.isRejected()) {
    /* ...snip... */
  } else (myDeferred.isResolved()) {
    /* ...snip... */
  }
  ```
  
  Examples of **correct** code for this rule:

  ```js
  var myDeferred = $.Deferred()
  
  if (myDeferred.state() === 'rejected') {
    /* ...snip... */
  } else (myDeferred.state() === 'resolved') {
    /* ...snip... */
  }
  ```

  Further reading:
  - [`deferred.state()`](https://api.jquery.com/deferred.state/)
  - [`deferred.isRejected()`](https://api.jquery.com/deferred.isRejected/)
  - [`deferred.isResolved()`](https://api.jquery.com/deferred.isResolved/)
<details>
  <summary>Included in 46 configs</summary>

  - v1.9
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/html-string-must-start-with-tag

<details>
  <summary>JQMIGRATE: `$(html)` HTML strings must start with '<' character</summary>

  **Cause:** In jQuery 1.9, HTML strings passed to `$()` must start with a tag; in other words the first character of the string must be a `<` character. There _cannot_ be any preceding characters, including whitespace. This is done to reduce the chances of inadvertent execution of scripts that might be present in HTML that is obtained from the URL, AJAX, or other sources. Use of simple literal HTML strings like `$("<div />")` or `$("<p>hello</p>")` are unaffected since they should not have leading spaces or text.
  
  **Solution**: Use the `$.parseHTML()` method to parse arbitrary HTML, especially HTML from external sources. To obtain a jQuery object that has the parsed HTML without running scripts, use `$($.parseHTML("string"))`. To run scripts in the HTML as well, use `$($.parseHTML("string", document, true))` instead. We do not recommend running `$.trim()` on the string to circumvent this check.

  Examples of **incorrect** code for this rule:

  ```js
  $("hello <strong>world</strong>")
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $($.parseHTML("hello <strong>world</strong>"))
  ```
  ```js
  $("<span>hello <strong>world</strong></span>")
  ```

  Further reading:
  - [JQMIGRATE: `$(html)` HTML strings must start with '<' character](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-html-strings-must-start-with--character)
  - [$.parseHTML](https://api.jquery.com/jQuery.parseHTML)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/jmvc/no-null-model-calls

<details>
  <summary>$.param no longer encodes null/undefined</summary>

  **Cause**: `jQuery.param()` (used to build query string parameters in api calls from models) no longer encodes `null` or `undefined` as strings; in stead it encodes them as empty strings.
  
  **Solution**: Rewrite any code that passes `null` or `undefined` to model calls to pass these as strings, or omit them, as appropriate.

  Examples of **incorrect** code for this rule:

  ```js
  Foo.Models.Bar.baz({ foo: null, bar: undefined, baz: 42 })
  ```
  
  Examples of **correct** code for this rule:

  ```js
  Foo.Models.Bar.baz({ foo: "null", bar: "undefined", baz: 42 })
  ```
  ```js
  Foo.Models.Bar.baz({ baz: 42 })
  ```

  Further reading:
  - [This was changed in v1.8.0](https://github.com/jquery/jquery/commit/36d2d9ae937f626d98319ed850905e8d1cbfd078)
  - [Discussion of the bug](https://bugs.jquery.com/ticket/8653)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-andself](docs/rules/no-andself.md)

<details>
  <summary>JQMIGRATE: `jQuery.fn.andSelf()` replaced by `jQuery.fn.addBack()`</summary>

  The .andSelf() method has been renamed to .addBack() as of jQuery 1.9 to better
  reflect its purpose of adding back the previous set of results.
  
  Replace any use of .andSelf() with .addBack().

  Examples of **incorrect** code for this rule:

  ```js
  $('.foo').find('.bar').andSelf()
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('.foo').find('.bar').addBack()
  ```

  Further reading:
  - [JQMIGRATE: jQuery.fn.andSelf() replaced by jQuery.fn.addBack()](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnandself-replaced-by-jqueryfnaddback)
  - [`.andSelf()`](https://api.jquery.com/andself/)
  - [`.addBack()`](https://api.jquery.com/addback/)
<details>
  <summary>Included in 42 configs</summary>

  - v1.9
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-attr-value](docs/rules/no-attr-value.md)

<details>
  <summary>JQMIGRATE: `jQuery.fn.attr('value')` no longer gets properties</summary>

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

<details>
  <summary>Included in 52 configs</summary>

  - v1.9
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-attrfn

<details>
  <summary>JQMIGRATE: `jQuery.attrFn` is deprecated</summary>

  **Cause:** Prior to jQuery 1.8, the undocumented `jQuery.attrFn` object provided a list of properties supported by the `$(html, props)` method. It is no longer required as of jQuery 1.8, but some developers "discovered" it by reading the source and began to use it. Their code still expects `jQuery.attrFn` to be present, attempts to assign values to it, and will throw errors if it is not present.
  
  **Solution:** Ensure that you are using the latest version of jQuery UI (1.8.21 or later) and jQuery Mobile (1.2.1 or later); they no longer use `jQuery.attrFn`. Examine any third-party plugins for the string `attrFn` and report its use to the plugin authors (not to jQuery team).

  Examples of **incorrect** code for this rule:

  ```js
  $.attrFn.foo = "bar"
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

  Further reading:
  - [JQMIGRATE: `jQuery.attrFn` is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryattrfn-is-deprecated)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-box-model](docs/rules/no-box-model.md)

<details>
  <summary>JQMIGRATE: `jQuery.boxModel` / `jQuery.support.boxModel` is deprecated</summary>

  These two deprecated properties are false when the page is using Quirks mode, and true when the page is in standards mode. Quirks mode was never supported in jQuery so these properties were removed.
  
  Do not use jQuery in Quirks mode, it has never been supported.

  Examples of **incorrect** code for this rule:

  ```js
  if ($.boxModel) { /* ...snip... */ }
  ```
  ```js
  if ($.support.boxModel) { /* ...snip... */ }
  ```
  ```js
  if (jQuery.boxModel) { /* ...snip... */ }
  ```
  ```js
  if (jQuery.support.boxModel) { /* ...snip... */ }
  ```
  
  Examples of **correct** code for this rule:

  ```js
  // use feature detection in stead
  ```

  Further reading:
  - [JQMIGRATE: jQuery.support.boxModel is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysupportboxmodel-is-deprecated)
  - [`jQuery.boxModel`](https://api.jquery.com/jQuery.boxModel/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-browser](docs/rules/no-browser.md)

<details>
  <summary>JQMIGRATE: jQuery.browser is deprecated</summary>

  jQuery.browser was deprecated in version 1.3, and finally removed in 1.9.
  Browser sniffing is notoriously unreliable as means of detecting whether to
  implement particular features.
  
  Where possible, use feature detection to make code decisions rather
  than trying to detect a specific browser. The Modernizr library provides a wide
  variety of feature detections. As a last resort, you can directly look at the
  navigator.userAgent string to detect specific strings returned by the browser.

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

  Further reading:
  - [JQMIGRATE: jQuery.browser is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerybrowser-is-deprecated)
  - [`jQuery.browser`](https://api.jquery.com/jQuery.browser)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-buildFragment

<details>
  <summary>JQMIGRATE: jQuery.buildFragment() is deprecated</summary>

  **Cause**: `jQuery.buildFragment()` and `jQuery.clean()` are undocumented internal methods. The signature of `jQuery.buildFragment()` was changed in jQuery 1.8 and 1.9, and `jQuery.clean()` was removed in 1.9. However, we are aware of some plugins or other code that might be using them.
  
  **Solution**: Rewrite any code that makes use of these or any other undocumented methods. For example the `jQuery.parseHTML()` method, introduced in jQuery 1.8, can convert HTML to an array of DOM elements that you can append to a document fragment.

  Examples of **incorrect** code for this rule:

  ```js
  $.buildFragment()
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

  Further reading:
  - [JQMIGRATE: jQuery.buildFragment() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryclean-is-deprecated)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-clean

<details>
  <summary>JQMIGRATE: jQuery.clean() is deprecated</summary>

  **Cause**: `jQuery.buildFragment()` and `jQuery.clean()` are undocumented internal methods. The signature of `jQuery.buildFragment()` was changed in jQuery 1.8 and 1.9, and `jQuery.clean()` was removed in 1.9. However, we are aware of some plugins or other code that might be using them.
  
  **Solution**: Rewrite any code that makes use of these or any other undocumented methods. For example the `jQuery.parseHTML()` method, introduced in jQuery 1.8, can convert HTML to an array of DOM elements that you can append to a document fragment.

  Examples of **incorrect** code for this rule:

  ```js
  $.clean()
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

  Further reading:
  - [JQMIGRATE: jQuery.clean() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryclean-is-deprecated)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-deferred-pipe](docs/rules/no-deferred-pipe.md)

<details>
  <summary>JQMIGRATE: deferred.pipe() is deprecated</summary>

  The .pipe() method on a jQuery.Deferred object was deprecated as of jQuery 1.8,
  when the .then() method was changed to perform the same function.
  
  In most cases it is sufficient to change all occurrences of .pipe() to .then().
  Ensure that you aren't relying on context/state propagation (e.g., using this) or synchronous callback invocation, which were dropped from .then() for Promises/A+ interoperability as of jQuery 3.0.

  Examples of **incorrect** code for this rule:

  ```js
  $.Deferred().pipe(fn)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $.Deferred().then(fn)
  ```

  Further reading:
  - [JQMIGRATE: deferred.pipe() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-deferredpipe-is-deprecated)
  - [Deferred Object](https://api.jquery.com/category/deferred-object/)
  - [`deferred.pipe()`](https://api.jquery.com/deferred.pipe/)
  - [`deferred.then()`](https://api.jquery.com/deferred.then/)
<details>
  <summary>Included in 42 configs</summary>

  - v1.9
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-deprecated-event-methods](docs/rules/no-deprecated-event-methods.md)

<details>
  <summary>JQMIGRATE: jQuery.fn.error() is deprecated</summary>

  Many shortcut methods for attaching certain event handlers to elements were
  deprecated in jQuery 1.8/1.9, such as `$.fn.load`, `$.fn.error`, etc.
  
  For most cases, simply changing the code to use `$.fn.on('<event>', handler)`
  instead will suffice, eg

  Examples of **incorrect** code for this rule:

  ```js
  $('.foo').error(handler)
  $('.foo').find('.bar').error(handler)
  jQuery('.foo').error(handler)
  $foo.error(handler)
  
  $('.foo').load(handler)
  $('.foo').unload(handler)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('.foo').on('error', handler)
  $('.foo').find('.bar').on('error', handler)
  jQuery('.foo').on('error', handler)
  $foo.on('error', handler)
  
  $('.foo').on('load', handler)
  $('.foo').on('unload', handler)
  ```

  Further reading:
  - [JQMIGRATE: jQuery.fn.error() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnerror-is-deprecated)
  - [JQMIGRATE: jQuery.fn.load() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnload-is-deprecated)
  - [JQMIGRATE: jQuery.fn.unload() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnunload-is-deprecated)
  - [`.error()`](https://api.jquery.com/error/)
  - [`.load()`](https://api.jquery.com/load/)
  - [`.unload()`](https://api.jquery.com/unload/)
  - [`.on()`](https://api.jquery.com/on/)
<details>
  <summary>Included in 46 configs</summary>

  - v1.9
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-die](docs/rules/no-die.md)

<details>
  <summary>JQMIGRATE: jQuery.fn.die() is deprecated</summary>

  `.die()` was removed in jQuery 1.9 - use `.off()` instead.

  Examples of **incorrect** code for this rule:

  ```js
  $('.something').die('click')
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('body').off('click', '.something')
  ```

  Further reading:
  - [`.die()`](https://api.jquery.com/die/)
  - [`.off()`](https://api.jquery.com/off/)
<details>
  <summary>Included in 46 configs</summary>

  - v1.9
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-document-on-ready

<details>
  <summary>JQMIGRATE: 'ready' event is deprecated</summary>

  **Cause**: Using one of jQuery's API methods to bind a "ready" event, e.g. `$( document ).on( "ready", fn )`, will cause the function to be called when the document is ready, but only if it is attached before the browser fires its own `DOMContentLoaded` event. That makes it unreliable for many uses, particularly ones where jQuery or its plugins are loaded asynchronously after page load.
  
  **Solution**: Replace any use of `$( document ).on( "ready", fn )` with `$( document ).ready( fn )` or more simply, just `$( fn )`. These alternative methods work reliably even when the document is already loaded.

  Examples of **incorrect** code for this rule:

  ```js
  $(document).on("ready", callback)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $(document).ready(callback)
  ```
  ```js
  $(callback)
  ```

<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-fn-data-events](docs/rules/no-fn-data-events.md)

<details>
  <summary>JQMIGRATE: Use of jQuery.fn.data('events') is deprecated</summary>

  Prior to 1.9, .data("events") could be used to retrieve jQuery's undocumented
  internal event data structure for an element if no other code had defined a data
  element with the name "events". This special case has been removed in 1.9.
  
  There is no public interface to retrieve this internal data structure, and it
  remains undocumented. The only useful applications might be for debugging. The
  data is available via jQuery.\_data("events") but this is not a documented
  interface.
  
  If this rule is flagging up code where an element is known to have custom data
  with the name "events", either use a different name to avoid confusion, or
  disable the rule for that particular piece of code:
  
  ```js
  $('.foo').data('events', 'my-custom-event-data')
  
  // ...snip...
  
  // eslint-disable-next-line jquery-compat/no-fn-data-events
  var customEventData = $('.foo').data('events')
  ```

  Examples of **incorrect** code for this rule:

  ```js
  $('.foo').data('events')
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('.foo').data('custom-events')
  ```

  Further reading:
  - [JQMIGRATE: Use of jQuery.fn.data('events') is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-use-of-jqueryfndataevents-is-deprecated)
  - [`.data()`](https://api.jquery.com/data/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-fn-size](docs/rules/no-fn-size.md)

<details>
  <summary>JQMIGRATE: jQuery.fn.size() is deprecated; use the .length property</summary>

  The .size() method returns the number of elements in the current jQuery object,
  but duplicates the more-efficient .length property which provides the same
  functionality. As of jQuery 1.9 the .length property is the preferred way to
  retrieve this value.
  
  Solution: Replace any use of .size() with .length.

  Examples of **incorrect** code for this rule:

  ```js
  $('.foo').size()
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('.foo').length
  ```

  Further reading:
  - [JQMIGRATE: jQuery.fn.size() is deprecated; use the .length property](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfnsize-is-deprecated-use-the-length-property)
  - [`.size()`](https://api.jquery.com/size)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-global-handle

<details>
  <summary>JQMIGRATE: jQuery.event.handle is undocumented and deprecated</summary>

  **Cause:** `jQuery.event.handle` was never documented, and deprecated with jQuery 1.7 (see http://forum.jquery.com/topic/deprecated-event-properties-used-in-jquery). As of jQuery 1.9, it has been removed.
  
  **Solution:** Use documented jQuery APIs, such as [`.trigger`](http://api.jquery.com/trigger/).

  Examples of **incorrect** code for this rule:

  ```js
  jQuery.event.handle
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

  Further reading:
  - [JQMIGRATE: jQuery.event.handle is undocumented and deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryeventhandle-is-undocumented-and-deprecated)
  - [`.trigger`](http://api.jquery.com/trigger/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-global-trigger

<details>
  <summary>JQMIGRATE: Global events are undocumented and deprecated</summary>

  **Cause:** jQuery 1.9 does not support globally triggered events. The only documented global events were the AJAX events and they are now triggered only on `document` as discussed above. jQuery never provided a documented interface for outside code to trigger global events.
  
  **Solution:** Change the program to avoid the use of global events. The jQuery Migrate plugin warns about this case but does _not_ restore the previous behavior since it was undocumented.

  Examples of **incorrect** code for this rule:

  ```js
  $.event.trigger(/*...*/)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-hover-event

<details>
  <summary>JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'</summary>

  **Cause:** Until jQuery 1.9, the string "hover" was allowed as an alias for the string "mouseenter mouseleave" when attaching an event handler. This unusual exception provided no real benefit and prevented the use of the name "hover" as a triggered event. _Note: This is not related to the `.hover()` method, which has not been deprecated._
  
  **Solution:** Replace use of the string "hover" with "mouseenter mouseleave" within any `.on()`, `.bind()`, `.delegate()`, or `.live()` event binding method.

  Examples of **incorrect** code for this rule:

  ```js
  $foo.on("hover", callback)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $foo.on("mouseenter mouseleave", inOutCallback)
  ```
  ```js
  $foo.on("mouseenter", inCallback)
  ```
  ```js
  $foo.hover(inCallback, outCallback)
  ```
  ```js
  $foo.hover(inOutCallback)
  ```

  Further reading:
  - [JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-hover-pseudo-event-is-deprecated-use-mouseenter-mouseleave)
  - [.hover](https://api.jquery.com/hover/)
  - [.on](https://api.jquery.com/on/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-live](docs/rules/no-live.md)

<details>
  <summary>JQMIGRATE: jQuery.fn.live() is deprecated</summary>

  `.live()` was removed in jQuery 1.9 - use `.on()` instead.

  Examples of **incorrect** code for this rule:

  ```js
  $('.something').live('click', function() {})
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('body').on('click', '.something', function() {})
  ```

  Further reading:
  - [`.on()`](https://api.jquery.com/on/)
  - [`.live()`](https://api.jquery.com/live/)
<details>
  <summary>Included in 46 configs</summary>

  - v1.9
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-null-param

<details>
  <summary>$.param no longer encodes null/undefined</summary>

  **Cause**: `jQuery.param()` (used to build query string parameters in `$.ajax`) no longer encodes `null` or `undefined` as strings; in stead it encodes them as empty strings.
  
  **Solution**: Rewrite any code that passes `null` or `undefined` to `$.param` or `$.ajax` to pass these as strings, or omit them, as appropriate.

  Examples of **incorrect** code for this rule:

  ```js
  $.param({ foo: null, bar: undefined, baz: 42 })
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $.param({ foo: "null", bar: "undefined", baz: 42 })
  ```
  ```js
  $.param({ baz: 42 })
  ```

  Further reading:
  - [This was changed in v1.8.0](https://github.com/jquery/jquery/commit/36d2d9ae937f626d98319ed850905e8d1cbfd078)
  - [Discussion of the bug](https://bugs.jquery.com/ticket/8653)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-parse-json](docs/rules/no-parse-json.md)

<details>
  <summary>JQMIGRATE: jQuery.parseJSON requires a valid JSON string</summary>

  As of jQuery 1.9+ `$.parseJSON` is identical to native `JSON.parse` and will not
  attempt to "fix" invalid JSON.
  
  To retain the old behaviour and "fix" invalid falsy behaviour, use:
  
  ```js
  JSON.parse(input || 'null')
  ```

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

  Further reading:
  - [`jQuery.parseJSON()`](http://api.jquery.com/jQuery.parseJSON/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-scoped-ajax-events

<details>
  <summary>JQMIGRATE: AJAX events should be attached to document</summary>

  **Cause:** As of jQuery 1.9, the global AJAX events (ajaxStart, ajaxStop, ajaxSend, ajaxComplete, ajaxError, and ajaxSuccess) are only triggered on the `document` element. 
  
  **Solution:** Change the program to listen for the AJAX events on the document.

  Examples of **incorrect** code for this rule:

  ```js
  $("#status").ajaxStart(function(){ $(this).text("Ajax started"); });
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $(document).ajaxStart(function(){ $("#status").text("Ajax started"); });
  ```

  Further reading:
  - [JQMIGRATE: AJAX events should be attached to document](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-ajax-events-should-be-attached-to-document)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### @frogeducation/jquery-compat/no-sub

<details>
  <summary>JQMIGRATE: jQuery.sub() is deprecated</summary>

  **Cause:** The `jQuery.sub()` method provided an imperfect way for a plugin to isolate itself from changes to the `jQuery` object. Due to its shortcomings, it was deprecated in version 1.8 and removed in 1.9.
  
  **Solution:** Rewrite the code that depends on `jQuery.sub()`, use the minified production version of the jQuery Migrate plugin to provide the functionality, or extract the `jQuery.sub()` method from the plugin's source and use it in the application.

  Examples of **incorrect** code for this rule:

  ```js
  $.sub(/*...*/)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

  Further reading:
  - [JQMIGRATE: jQuery.sub() is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysub-is-deprecated)
<details>
  <summary>Included in 1 configs</summary>

  - v1.9
</details>
</details>



#### @frogeducation/jquery-compat/no-swap

<details>
  <summary>JQMIGRATE: jQuery.swap() is undocumented and deprecated</summary>

  **Cause**: The `jQuery.swap()` method temporarily exchanges a set of CSS properties. It was never documented as part of jQuery's public API and should not be used because it can cause performance problems due to forced layout.
  
  **Solution**: Rework the code to avoid calling `jQuery.swap()`, or explicitly set and restore the properties you need to change.

  Examples of **incorrect** code for this rule:

  ```js
  $.swap(/*...*/)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

  Further reading:
  - [JQMIGRATE: jQuery.swap() is undocumented and deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryswap-is-undocumented-and-deprecated)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-toggle-handler](docs/rules/no-toggle-handler.md)

<details>
  <summary>JQMIGRATE: `jQuery.fn.toggle(handler, handler...)` is deprecated</summary>

  There are two completely different meanings for the .toggle() method. The use of
  .toggle() to show or hide elements is not affected. The use of .toggle() as a
  specialized click handler was deprecated in 1.8 and removed in 1.9.
  
  Rewrite the code that depends on $().toggle(), use the minified production
  version of the jQuery Migrate plugin to provide the functionality, or extract
  the $().toggle() method from the plugin's source and use it in the application.

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

  Further reading:
  - [JQMIGRATE: jQuery.fn.toggle(handler, handler...) is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jqueryfntogglehandler-handler-is-deprecated)
  - [`.toggle() (event)`](https://api.jquery.com/toggle-event/)
  - [`.toggle() (animation)`](https://api.jquery.com/toggle/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/no-trailing-text-in-html-strings](docs/rules/no-trailing-text-in-html-strings.md)

<details>
  <summary>JQMIGRATE: `$(html)` text after last tag is ignored</summary>

  HTML strings passed to $() should begin and end with tags. Any text following
  the last tag is ignored. When upgrading to jQuery 1.9 and using $.parseHTML(),
  note that leading or trailing text is not ignored, and those text nodes will be
  part of the data returned.
  
  Usually this warning is due to an error in the HTML string, where text is
  present when it should not be there. Remove the leading or trailing text before
  passing the string to $.parseHTML() if it should not be part of the collection.
  Alternatively you can use $($.parseHTML(html)).filter("\*") to remove all
  top-level text nodes from the set and leave only elements.

  Examples of **incorrect** code for this rule:

  ```js
  $('<h1>foo</h1>bar')
  ```
  ```js
  $('<h1>foo</h1>' + 'bar')
  ```
  ```js
  var text = '<h1>foo</h1>bar'
  $(text)
  ```
  ```js
  var text = '<h1>foo</h1>' + 'bar'
  $(text)
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('<h1>foo</h1>')
  ```
  ```js
  $('<h1>foo</h1>' + '<h2>bar</h2>')
  ```
  ```js
  var text = '<h1>foo</h1>'
  $(text)
  ```

  Further reading:
  - [JQMIGRATE: $(html) text after last tag is ignored](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-html-text-after-last-tag-is-ignored)
  - [`.html()`](http://api.jquery.com/html/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/quoted-hash-attribute-selectors](docs/rules/quoted-hash-attribute-selectors.md)

<details>
  <summary>JQMIGRATE: Attribute selector with '#' must be quoted</summary>

  Selectors such as a[href=#main] are not valid CSS syntax because the value
  contains special characters that are not quoted. Until jQuery 1.11.3/2.1.4 this
  was accepted, but the behavior is non-standard and was never documented. In
  later versions this selector throws an error. In some cases with complex
  selectors, Migrate may not attempt a repair. In those cases a fatal error will
  be logged on the console and you will need to fix the selector manually.
  
  Put quotes around any attribute values that have special characters, e.g.
  a[href="#main"]. The warning message contains the selector that caused the
  problem, use that to find the selector in the source files.

  Examples of **incorrect** code for this rule:

  ```js
  $('[href=#main]')
  ```
  ```js
  var selector = '[href=#main']
  ```
  
  Examples of **correct** code for this rule:

  ```js
  $('[href="#main"]')
  ```
  ```js
  var selector = '[href="#main"]'
  ```

  Further reading:
  - [JQMIGRATE: Attribute selector with '#' must be quote](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-attribute-selector-with--must-be-quoted)
  - [Attribute Selectors](https://api.jquery.com/category/selectors/attribute-selectors/)
<details>
  <summary>Included in 83 configs</summary>

  - v1.9
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



### jmvc

#### [@frogeducation/jquery-compat/jmvc/no-hover-event](docs/rules/jmvc/no-hover-event.md)

<details>
  <summary>JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave' (JMVC)</summary>

  jQuery 1.9+ no longer supports the 'hover' event name. In stead, it expects 'mouseenter' or 'mouseleave'. 
  
  This rule ensures JMVC event listeners do not rely on the 'hover' event.

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

<details>
  <summary>Included in 83 configs</summary>

  - jmvc
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



#### [@frogeducation/jquery-compat/jmvc/no-trailing-comma-after-selector](docs/rules/jmvc/no-trailing-comma-after-selector.md)

<details>
  <summary>Disallow trailing commas after jQuery selectors in JMVC event listeners</summary>

  jQuery 1.9+ will throw a parsing error if a selector contains a trailing comma.
  
  This rule ensures JMVC event listeners do not have a trailing comma after the
  selector.

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

<details>
  <summary>Included in 83 configs</summary>

  - jmvc
  - fixable-from-v1.0.0
  - fixable-from-v1.0.1
  - fixable-from-v1.0.2
  - fixable-from-v1.0.3
  - fixable-from-v1.0.4
  - fixable-from-v1.1.0
  - fixable-from-v1.1.1
  - fixable-from-v1.1.2
  - fixable-from-v1.1.3
  - fixable-from-v1.1.4
  - fixable-from-v1.2.0
  - fixable-from-v1.2.1
  - fixable-from-v1.2.2
  - fixable-from-v1.2.3
  - fixable-from-v1.2.4
  - fixable-from-v1.2.5
  - fixable-from-v1.2.6
  - fixable-from-v1.3.0
  - fixable-from-v1.3.0
  - fixable-from-v1.3.1
  - fixable-from-v1.3.2
  - fixable-from-v1.4.0
  - fixable-from-v1.4.0
  - fixable-from-v1.4.1
  - fixable-from-v1.4.2
  - fixable-from-v1.4.3
  - fixable-from-v1.4.4
  - fixable-from-v1.5.0
  - fixable-from-v1.5.0
  - fixable-from-v1.5.1
  - fixable-from-v1.5.2
  - fixable-from-v1.6.0
  - fixable-from-v1.6.0
  - fixable-from-v1.6.1
  - fixable-from-v1.6.2
  - fixable-from-v1.6.3
  - fixable-from-v1.6.4
  - fixable-from-v1.7.0
  - fixable-from-v1.7.0
  - fixable-from-v1.7.1
  - fixable-from-v1.7.2
  - fixable-from-v1.8.0
  - fixable-from-v1.8.1
  - fixable-from-v1.8.2
  - fixable-from-v1.8.3
  - fixable-from-v1.9.0
  - fixable-from-v1.9.1
  - fixable-from-v1.10.0
  - fixable-from-v1.10.1
  - fixable-from-v1.10.2
  - fixable-from-v1.11.0
  - fixable-from-v1.11.1
  - fixable-from-v1.11.2
  - fixable-from-v1.11.3
  - fixable-from-v1.12.0
  - fixable-from-v1.12.1
  - fixable-from-v1.12.2
  - fixable-from-v1.12.3
  - fixable-from-v1.12.4
  - fixable-from-v2.0.0
  - fixable-from-v2.0.1
  - fixable-from-v2.0.2
  - fixable-from-v2.0.3
  - fixable-from-v2.1.0
  - fixable-from-v2.1.1
  - fixable-from-v2.1.2
  - fixable-from-v2.1.3
  - fixable-from-v2.1.4
  - fixable-from-v2.2.0
  - fixable-from-v2.2.1
  - fixable-from-v2.2.2
  - fixable-from-v2.2.3
  - fixable-from-v2.2.4
  - fixable-from-v3.0.0
  - fixable-from-v3.1.0
  - fixable-from-v3.1.1
  - fixable-from-v3.2.0
  - fixable-from-v3.2.1
  - fixable-from-v3.3.0
  - fixable-from-v3.3.1
  - fixable-from-v3.4.0
  - fixable-from-v3.4.1
</details>
</details>



## Contributing

- Run tests with `npm run test`
- Please format commits using the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- Releases are handled by [semantic-release](https://github.com/semantic-release/semantic-release) via [travis-ci](.travis.yml)
- Regenerate this readme by running `node ./build/generate-readme.js`