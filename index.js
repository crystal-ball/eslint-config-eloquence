/**
 * JavaScript Configs:
 * Extends Airbnb and uses Prettier for all formatting related linting.
 */
const config = {
  extends: ['airbnb', 'prettier'], // The base-base
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    // Allow console logs in development, and upgrade them to error in test
    'no-console': 'off'
  }
}

// Set of rules that are only checked in `test` environment, namely formatting
// and console logs
// Watch https://github.com/prettier/eslint-plugin-prettier/issues/46 for .prettierrc
if (process.env.NODE_ENV === 'test') {
  Object.assign(config.rules, {
    'prettier/prettier': [
      'error',
      { singleQuote: true, printWidth: 84, semi: false }
    ],
    'no-console': 'error'
  })
}

module.exports = config
