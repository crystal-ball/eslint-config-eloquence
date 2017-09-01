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
    'no-use-before-define': [1, { functions: false }]
  }
}

// Lint for prettier only in TEST envs
// Watch https://github.com/prettier/eslint-plugin-prettier/issues/46 for .prettierrc
if (process.env.NODE_ENV === 'TEST') {
  config.rules['prettier/prettier'] = [
    'error',
    { singleQuote: true, printWidth: 84, semi: false }
  ]
}

module.exports = config
