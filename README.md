# eslint-plugin-code-standards

Code Standards ESLint plugin that helps that user conform with Capgemini's UI team code standards

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Then, set up an [ESLint](http://eslint.org) config file with:

```
$ ./node_modules/.bin/eslint --init
```
See the [Getting Started Guide](https://eslint.org/docs/user-guide/getting-started) for more help.


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

- validation
    This rule runs a check on your variable initialisation ensuring it conforms with Hungarian Notation as per UI team code standards.

Bugs:
Please try and break this plugin, please email me @ dlprtechconsulting@gmail.com if you experience issues or new situations that the plugin doesn't account for.

Changes (1.0.1):

- Updated ReadMe to help ESLint set up.

- Updated critical in dependencies