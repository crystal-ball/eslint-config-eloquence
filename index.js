/**
 * # ESLint Configs
 * The Airbnb configs provide the base-base for all code quality linting rules.
 * Prettier is used for all code formatting linting rules.
 *
 * Modules are expected everywhere thanks to Node 8.5+ and @std/esm 🎉🎉🎉
 *
 */
const config = {
  extends: ['airbnb', 'prettier'], // The base-base
  parserOptions: {
    ecmaVersion: 8,
    // ES Modules. Everywhere. 🎉🎉🎉
    sourceType: 'module',
  },
  parser: 'babel-eslint', // Required for experimental features like object rest spread
  plugins: ['prettier', 'flowtype'],
  // Jest can be used for testing in any env!
  env: { jest: true },
  rules: {
    // Allow console logs in development, and upgrade them to error in test
    'no-console': 'off',

    // Flow (https://github.com/gajus/eslint-plugin-flowtype)
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn',
  },
}

// Set of rules that are only checked in `test` environment. This allows relaxed
// linting for development, (eg formatting and console.logs)
if (process.env.NODE_ENV === 'test') {
  Object.assign(config.rules, {
    'prettier/prettier': 'error',
    'no-console': 'error',
  })
}

module.exports = config
