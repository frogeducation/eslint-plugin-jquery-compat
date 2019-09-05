# eslint-plugin-jquery-compat
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

%%%SUPPORTED_RULES_TABLE%%%

%%%SUPPORTED_RULES%%%

## Contributing

- Run tests with `npm run test`
- Please format commits using the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- Releases are handled by [semantic-release](https://github.com/semantic-release/semantic-release) via [travis-ci](.travis.yml)
- Regenerate this readme by running `node ./build/generate-readme.js`