/**
 * JavaScript Configs:
 * Extends Airbnb and uses Prettier for all formatting related linting.
 */
const config = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    // Allow use of named functions before declared, they are hoisted and this makes
    // it possible to declare propTypes at top of component files
    'no-use-before-define': ['error', { functions: false }],
    // Allow console logs in development, and upgrade them to error in test
    'no-console': 'off'
  }
}

// Set of rules that are only checked in `test` environment
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
