# `@somarlyonks/commitlint`

## Usage

`yarn add -DW @somarlyonks/commitlint husky`

In `package.json`

```json
{
    "scripts": {
        "commitlint": "commitlint"
    },
    "husky": {
        "hooks": {
            "commit-msg": "yarn commitlint -E HUSKY_GIT_PARAMS"
        }
    },
    "commitlint": {
        "extends": [
            "@somarlyonks/commitlint"
        ]
    }
}
```
