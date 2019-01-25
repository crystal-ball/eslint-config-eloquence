const checkProjectType = require('./lib/project-type')

const { NODE_ENV } = process.env
const webpackProject = checkProjectType() === 'webpack'

// Allow accessing process.env injected variables in webpack builds
const globals = webpackProject ? { process: false } : {}
// For webpack projects use the `eslint-import-resolver-webpack` resolver, else
// default to standard Node resolver (with support for .mjs files)
const resolver = webpackProject
  ? 'webpack'
  : { node: { extensions: ['.js', '.mjs', '.json'] } }

/**
 * 😍 ESLint Configs
 *
 * Configuration sets up Airbnb for all code quality linting and Prettier for all
 * formatting linting rules. See README for details.
 */
module.exports = {
  // Base: https://github.com/airbnb/javascript
  extends: ['airbnb', 'plugin:cypress/recommended', 'prettier', 'prettier/react'],

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    jsx: true
  },

  parser: 'babel-eslint',

  // Extend the plugins already included by the Airbnb base
  plugins: [/* react, jsx-a11y, import */ 'prettier', 'cypress'],

  env: {
    browser: webpackProject,
    node: !webpackProject,
    jest: true,
    'cypress/globals': true
  },

  globals,

  settings: {
    'import/resolver': resolver
  },

  rules: {
    // --- ✅  Cypress
    // https://github.com/cypress-io/eslint-plugin-cypress
    // Prevent assigning return values of cy calls (use aliases instead)
    'cypress/no-assigning-return-values': 'error',
    // Prevent waiting for arbitrary time periods (use wait instead)
    'cypress/no-unnecessary-waiting': 'error',

    // --- ⬆️ Updates/Enhancements
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
          'prettier/prettier': 'error'
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

          'import/first': 'warn'
        })
  }
}
