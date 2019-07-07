'use strict'

/**
 * Config to enable TypeScript in a project
 */
module.exports = {
  // Override TS formatting rules impacted by Prettier
  extends: ['prettier/@typescript-eslint'],

  // Parser is required for linting types, the Babel TS plugin
  // only strips types out
  parser: '@typescript-eslint/parser',

  parserOptions: {
    // Specify teh project TS config location
    project: './tsconfig.json',
  },

  plugins: ['@typescript-eslint'],

  // --- TS rules
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
  },
}
