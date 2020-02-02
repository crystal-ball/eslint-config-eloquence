'use strict'

/**
 * Config to enable linting in a TypeScript project
 */
module.exports = {
  overrides: [
    {
      files: ['*.ts'],

      // Parser is required for linting types, the Babel TS plugin
      // only strips types out
      parser: '@typescript-eslint/parser',

      parserOptions: { sourceType: 'module' },

      plugins: ['@typescript-eslint'],

      settings: {
        // Import extension overrides
        // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
      },

      rules: {
        // --- Disabled ESLint rules ----------------------

        camelcase: 'off',
        'getter-return': 'off',
        'no-array-constructor': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-empty-function': 'off',
        'no-new-symbol': 'off',
        'no-redeclare': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off', // Checked by Typescript using the option `strictNullChecks`
        'no-unreachable': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'valid-typeof': 'off',

        // --- Recommended rules --------------------------
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-ignore': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/camelcase': 'error',
        '@typescript-eslint/class-name-casing': [
          'error',
          { allowUnderscorePrefix: false },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',

        // ℹ️ Disabled Prettier rules
        // (https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js)
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
      },
    },
  ],
}
