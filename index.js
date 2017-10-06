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
  plugins: ['prettier'],
  // Jest can be used for testing in any env!
  env: { jest: true },
  rules: {
    // Allow console logs in development, and upgrade them to error in test
    'no-console': 'off',
  },
}

// Set of rules that are only checked in `test` environment, namely formatting
// and console logs
// Watch https://github.com/prettier/eslint-plugin-prettier/issues/46 for .prettierrc
if (process.env.NODE_ENV === 'test') {
  Object.assign(config.rules, {
    'prettier/prettier': [
      'error',
      { singleQuote: true, printWidth: 84, semi: false },
    ],
    'no-console': 'error',
  })
}

module.exports = config
