'use strict'

const { NODE_ENV } = process.env

/**
 * 😍 ESLint Configs
 *
 * Configuration sets up Airbnb for all code quality linting and Prettier for all
 * formatting linting rules. See README for details.
 */
module.exports = {
  // Base: https://github.com/airbnb/javascript
  extends: ['airbnb', 'prettier', 'prettier/react'],

  parserOptions: {
    ecmaVersion: 10,
    // By default use modules, the Node configs override to script
    sourceType: 'module',
    // Required for eslint-plugin-react
    jsx: true,
  },

  parser: 'babel-eslint',

  settings: {
    // Include React settings by default, Storybook uses them as well
    react: {
      pragma: 'React',
      version: '16.18',
    },
  },

  // Extend the plugins already included by the Airbnb base
  plugins: [/* react, jsx-a11y, import */ 'prettier'],

  rules: {
    // --- ⬆️ Updates/Enhancements

    // Dev dependencies are used for writing stories and unit tests colocated in
    // the source directory, include them in this rule
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Don't enforce .jsx file extension, it doesn't provide a clear benefit and
    // often requires addl configs on other tooling, do less ¯\_(ツ)_/¯
    'react/jsx-filename-extension': 'off',
    // Don't enforce props destructuring, it's cumbersome when only a single
    // prop is needed, and consistent destructuring provides no real benefit
    'react/destructuring-assignment': 'off',
    // Include .mjs file extension in list of file that shouldn't use ext
    'import/extensions': ['error', 'always', { js: 'never', jsx: 'never', mjs: 'never' }],

    // --- 🐛 Bugs

    // Class ordering currently doesn't support class property syntax, which is 🙅
    // Update on: https://github.com/yannickcr/eslint-plugin-react/pull/685
    // TODO: this can be enabled now
    'react/sort-comp': 'off',

    // 🌍 Environment adjustments
    // ---------------------------------------------------------------------------

    /*
     * Improve ESLint DX by adjusting severity of non-critical rules based on
     * environment. When not in test env make common stylistic issues warn
     * instead of error, don't include Prettier, etc. This speeds up developing
     * (especially when using webpack dev server hooked into the errors overlay
     * 😉)
     */
    ...(NODE_ENV === 'test'
      ? {
          // Validate formatting is correct in test,prod,etc.
          'prettier/prettier': 'error',
        }
      : {
          // Allow dev tools in dev environment
          'no-console': 'off',
          'no-debugger': 'off',

          // These rules are non critical, stylistic rules, warn only in dev for them
          'arrow-body-style': 'warn',
          'class-methods-use-this': 'warn',
          'no-unused-vars': 'warn',
          'prefer-const': 'warn',
          'prefer-destructuring': 'warn',

          'react/default-props-match-prop-types': 'warn',
          'react/forbid-prop-types': 'warn',
          'react/jsx-boolean-value': 'warn',
          'react/no-multi-comp': 'warn',
          'react/no-unescaped-entities': 'warn',
          'react/no-unused-prop-types': 'warn',
          'react/no-unused-state': 'warn',
          'react/prefer-stateless-function': 'warn',
          'react/prop-types': 'warn',
          'react/require-default-props': 'warn',
          'react/self-closing-comp': 'warn',

          'import/first': 'warn',
        }),
  },
}
