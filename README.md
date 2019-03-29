# eslint-plugin-code-standards

Code Standards ESLint plugin that helps that user conform with Capgemini's UI team code standards

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-code-standards`:

```
$ npm install eslint-plugin-code-standards --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-code-standards` globally.

## Usage

Add `code-standards` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "code-standards"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "code-standards/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





