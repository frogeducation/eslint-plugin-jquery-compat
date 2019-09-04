# eslint-plugin-jquery-compat
> Linting rules for checking jQuery version compatibility

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

### v3.0

#### [@frogeducation/jquery-compat/no-capitalised-html-data-attributes](docs/rules/no-capitalised-html-data-attributes.md)

JQMIGRATE: jQuery.data() always sets/gets camelCased names

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 3.0.0 | 1.0.0 | 3.0.0 | Yes |

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

### v1.9

#### @frogeducation/jquery-compat/attr-select

JQMIGRATE: `jQuery.fn.attr('selected')` might use property instead of attribute

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | 1.6.0 | 1.9.0 | Yes |

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

#### [@frogeducation/jquery-compat/deferred-use-state](docs/rules/deferred-use-state.md)

JQMIGRATE: `deferred.isResolved()` / `deferred.isRejected()` is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.7.0 | 1.7.0 | 1.8.0 | Yes |

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

#### @frogeducation/jquery-compat/html-string-must-start-with-tag

JQMIGRATE: `$(html)` HTML strings must start with '<' character

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | 1.0.0 | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/no-andself](docs/rules/no-andself.md)

JQMIGRATE: jQuery.fn.andSelf() replaced by jQuery.fn.addBack()

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.8.0 | 3.0.0 | Yes |

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

#### [@frogeducation/jquery-compat/no-attr-value](docs/rules/no-attr-value.md)

JQMIGRATE: jQuery.fn.attr('value') no longer gets properties

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | 1.6.0 | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-attrfn

JQMIGRATE: jQuery.attrFn is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | (no fix provided; must rewrite) | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/no-box-model](docs/rules/no-box-model.md)

JQMIGRATE: `jQuery.boxModel` / `jQuery.support.boxModel` is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.3.0 | 1.0.0 | 1.8.0 | No |

<details>
  <summary>Detail</summary>

  These two deprecated properties are false when the page is using Quirks mode, and true when the page is in standards mode. Quirks mode was never supported in jQuery so these properties were removed.
  
  Do not use jQuery in Quirks mode, it has never been supported.}
  Examples of **correct** code for this rule:

  ```js
  (none provided)
  ```

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

  Further reading:
  - [JQMIGRATE: jQuery.support.boxModel is deprecated](https://github.com/jquery/jquery-migrate/blob/1.x-stable/warnings.md#jqmigrate-jquerysupportboxmodel-is-deprecated)
  - [`jQuery.boxModel`](https://api.jquery.com/jQuery.boxModel/)
</details>

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

#### [@frogeducation/jquery-compat/no-browser](docs/rules/no-browser.md)

JQMIGRATE: jQuery.browser is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.3.0 | 1.0.0 | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-buildFragment

JQMIGRATE: jQuery.buildFragment() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.0.0 | 1.8.0 | No |

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

#### @frogeducation/jquery-compat/no-clean

JQMIGRATE: jQuery.clean() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | (no fix provided; must rewrite) | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/no-deferred-pipe](docs/rules/no-deferred-pipe.md)

JQMIGRATE: deferred.pipe() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.8.0 | (not yet removed) | Yes |

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

#### [@frogeducation/jquery-compat/no-deprecated-event-methods](docs/rules/no-deprecated-event-methods.md)

JQMIGRATE: jQuery.fn.error() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.7.0 | 3.0.0 | Yes |

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

#### [@frogeducation/jquery-compat/no-die](docs/rules/no-die.md)

JQMIGRATE: jQuery.fn.die() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.7.0 | 1.7.0 | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-document-on-ready

JQMIGRATE: 'ready' event is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.0.0 | (not yet removed) | Yes |

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

#### [@frogeducation/jquery-compat/no-fn-data-events](docs/rules/no-fn-data-events.md)

JQMIGRATE: Use of jQuery.fn.data('events') is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | (no fix provided; must rewrite) | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/no-fn-size](docs/rules/no-fn-size.md)

JQMIGRATE: jQuery.fn.size() is deprecated; use the .length property

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.0.0 | 3.0.0 | Yes |

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

#### @frogeducation/jquery-compat/no-global-handle

JQMIGRATE: jQuery.event.handle is undocumented and deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.7.0 | (no fix provided; must rewrite) | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-global-trigger

JQMIGRATE: Global events are undocumented and deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | (no fix provided; must rewrite) | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-hover-event

JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.0.0 | 1.9.0 | Yes |

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

#### [@frogeducation/jquery-compat/no-live](docs/rules/no-live.md)

JQMIGRATE: jQuery.fn.live() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.7.0 | 1.7.0 | 1.9.0 | Yes |

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

#### [@frogeducation/jquery-compat/no-parse-json](docs/rules/no-parse-json.md)

JQMIGRATE: jQuery.parseJSON requires a valid JSON string

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 3.0.0 | 1.0.0 | (not yet removed) | Yes |

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

#### @frogeducation/jquery-compat/no-scoped-ajax-events

JQMIGRATE: AJAX events should be attached to document

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | 1.0.0 | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-sub

JQMIGRATE: jQuery.sub() is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.7.0 | 1.0.0 | 1.9.0 | No |

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

#### @frogeducation/jquery-compat/no-swap

JQMIGRATE: jQuery.swap() is undocumented and deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | (no fix provided; must rewrite) | (not yet removed) | No |

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

#### [@frogeducation/jquery-compat/no-toggle-handler](docs/rules/no-toggle-handler.md)

JQMIGRATE: `jQuery.fn.toggle(handler, handler...)` is deprecated

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.0.0 | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/no-trailing-text-in-html-strings](docs/rules/no-trailing-text-in-html-strings.md)

JQMIGRATE: `$(html)` text after last tag is ignored

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | 1.0.0 | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/quoted-hash-attribute-selectors](docs/rules/quoted-hash-attribute-selectors.md)

JQMIGRATE: Attribute selector with '#' must be quoted

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.11.0 | 1.0.0 | 1.11.0 | Yes |

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

### jmvc

#### [@frogeducation/jquery-compat/jmvc/no-hover-event](docs/rules/jmvc/no-hover-event.md)

JQMIGRATE: 'hover' pseudo-event is deprecated, use 'mouseenter mouseleave' (JMVC)

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.8.0 | 1.0.0 | 1.9.0 | No |

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

#### [@frogeducation/jquery-compat/jmvc/no-trailing-comma-after-selector](docs/rules/jmvc/no-trailing-comma-after-selector.md)

Disallow trailing commas after jQuery selectors in JMVC event listeners

| deprecated from | fixable from | removed at | supports `--fix` |
| ---- | ---- | ---- | ---- |
| 1.9.0 | 1.0.0 | 1.9.0 | Yes |

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

## Contributing

- Run tests with `npm run test`
- Please format commits using the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- Releases are handled by [semantic-release](https://github.com/semantic-release/semantic-release) via [travis-ci](.travis.yml)