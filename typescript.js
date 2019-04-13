'use strict'

/**
 * Config to enable TypeScript in a project
 */
module.exports = {
  // Override TS formatting rules impacted by Prettier
  extends: ['prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // --- TS Rules
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error'
  }
}
