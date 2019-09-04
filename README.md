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

Disallow capitalised HTML data attributes

- deprecated from: 3.0.0
- fixable from: 1.0.0
- removed from: 3.0.0
- supports `--fix`: Yes

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

Warn when using binary attributes where properties may differ e.g. .attr("select")

- deprecated from: 1.9.0
- fixable from: 1.6.0
- removed from: 1.9.0
- supports `--fix`: Yes

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

Disallow use of removed deferred isRejected/isResolved functions

- deprecated from: 1.7.0
- fixable from: 1.7.0
- removed from: 1.8.0
- supports `--fix`: Yes

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

Warn when HTML string does not begin with <

- deprecated from: 1.9.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

Warn when using deprecated .andSelf()

- deprecated from: 1.8.0
- fixable from: 1.8.0
- removed from: 3.0.0
- supports `--fix`: Yes

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

Disallow use of .attr("value")

- deprecated from: 1.9.0
- fixable from: 1.6.0
- removed from: 1.9.0
- supports `--fix`: No

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

Warn when using deprecated .attrFn()

- deprecated from: 1.8.0
- fixable from: (no fix provided; must rewrite)
- removed from: 1.9.0
- supports `--fix`: No

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

Disallow use of $.boxModel/$.support.boxModel

- deprecated from: 1.3.0
- fixable from: 1.0.0
- removed from: 1.8.0
- supports `--fix`: No

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

Disallow use of $.browser

- deprecated from: 1.3.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

Disallow use of $.buildFragment()

- deprecated from: 1.8.0
- fixable from: 1.0.0
- removed from: 1.8.0
- supports `--fix`: No

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

Disallow use of $.clean()

- deprecated from: 1.9.0
- fixable from: (no fix provided; must rewrite)
- removed from: 1.9.0
- supports `--fix`: No

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

Warn when using deprecated deferred.pipe()

- deprecated from: 1.8.0
- fixable from: 1.8.0
- removed from: (not yet removed)
- supports `--fix`: Yes

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

Warn when using deprecated event method shortcuts

- deprecated from: 1.8.0
- fixable from: 1.7.0
- removed from: 3.0.0
- supports `--fix`: Yes

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

Warn when using removed jQuery.fn.die()

- deprecated from: 1.7.0
- fixable from: 1.7.0
- removed from: 1.9.0
- supports `--fix`: No

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

Disallow use of $(document).on("ready")

- deprecated from: 1.8.0
- fixable from: 1.0.0
- removed from: (not yet removed)
- supports `--fix`: Yes

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

Warn when using jQuery.fn.data("events")

- deprecated from: 1.9.0
- fixable from: (no fix provided; must rewrite)
- removed from: 1.9.0
- supports `--fix`: No

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

Warn when using deprecated .size() function

- deprecated from: 1.8.0
- fixable from: 1.0.0
- removed from: 3.0.0
- supports `--fix`: Yes

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

Warn when using undocumented $.event.handle()

- deprecated from: 1.7.0
- fixable from: (no fix provided; must rewrite)
- removed from: 1.9.0
- supports `--fix`: No

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

Warn when using undocumented $.event.trigger()

- deprecated from: 1.9.0
- fixable from: (no fix provided; must rewrite)
- removed from: 1.9.0
- supports `--fix`: No

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

Disallow use of .on("hover")

- deprecated from: 1.8.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: Yes

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

Warn when using removed jQuery.fn.live()

- deprecated from: 1.7.0
- fixable from: 1.7.0
- removed from: 1.9.0
- supports `--fix`: Yes

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

Disallow use of $.parseJSON

- deprecated from: 3.0.0
- fixable from: 1.0.0
- removed from: (not yet removed)
- supports `--fix`: Yes

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

Warn when using deprecated scoped ajax events

- deprecated from: 1.9.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

Disallow use of $.sub()

- deprecated from: 1.7.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

Disallow use of $.swap()

- deprecated from: 1.9.0
- fixable from: (no fix provided; must rewrite)
- removed from: (not yet removed)
- supports `--fix`: No

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

Warn when using deprecated $.fn.toggle(handler, handler...)

- deprecated from: 1.8.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

Warn when HTML string contains trailing text after last tag

- deprecated from: 1.9.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

Warn about attribute selectors whose values contain a "#" and are not quoted

- deprecated from: 1.11.0
- fixable from: 1.0.0
- removed from: 1.11.0
- supports `--fix`: Yes

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

Disallow hover event in JMVC event listeners

- deprecated from: 1.8.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: No

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

- deprecated from: 1.9.0
- fixable from: 1.0.0
- removed from: 1.9.0
- supports `--fix`: Yes

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