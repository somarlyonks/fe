// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
            },
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
    },
    {
        // stylistic
        // https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
        extends: [
            stylistic.configs.customize({
                flat: true,
                arrowParens: false,
                blockSpacing: false,
                braceStyle: '1tbs',
                commaDangle: 'always-multiline',
                indent: 4,
                jsx: true,
                quoteProps: 'consistent-as-needed',
                quotes: 'single',
                semi: false,
            }),
        ],
        rules: {
            '@stylistic/space-before-function-paren': ['error', 'always'],
            '@stylistic/object-curly-spacing': ['error', 'never'],
        },
    },
    {
        rules: {
            '@typescript-eslint/member-ordering': 'error',
        },
    },
    {
        ignores: [
            '**/*.{jsx,tsx}',
        ],
        plugins: {
            'eslint-plugin-no-null': {
                rules: {
                    'no-null': {
                        create (context) {
                            return {
                                Literal (node) {
                                    if (node.raw === 'null') context.report({
                                        node,
                                        message: 'Use undefined instead of null',
                                    })
                                },
                            }
                        },
                    },
                },
            },
        },
        rules: {
            'eslint-plugin-no-null/no-null': 'error',
        },
    },
    {
        ignores: [
            '**/.next/',
        ],
    },
)
