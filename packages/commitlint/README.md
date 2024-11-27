# `@somarlyonks/commitlint`

## Usage

`yarn add -DW @somarlyonks/commitlint husky`

In `package.json`

```json
{
    "scripts": {
        "commitlint": "commitlint"
    },
    "commitlint": {
        "extends": [
            "@somarlyonks/commitlint"
        ]
    }
}
```

in `.husky/pre-commit`

```sh
yarn commitlint --edit "$1"
```
