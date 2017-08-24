/**
 * JavaScript Configs:
 * Extends Airbnb and uses Prettier for all formatting related linting.
 */

const config = {
  extends: ['airbnb', 'prettier'],
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
    'no-use-before-define': [1, { functions: false }],

    // Turn off JSX formatting rules that conflict with auto formatting done by Prettier
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-wrap-multilines': 0
  }
}

// Lint for prettier only in TEST envs
if (process.env.NODE_ENV === 'TEST') {
  config.rules['prettier/prettier'] = [
    'error',
    { singleQuote: true, printWidth: 84, semi: false }
  ]
}

module.exports = config
