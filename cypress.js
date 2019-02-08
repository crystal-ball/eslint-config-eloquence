'use strict'

/**
 * Extend base config for writing Cypress tests
 */
module.exports = {
  extends: ['./index.js', 'plugin:cypress/recommended'],
  env: {
    node: true,
    'cypress/globals': true
  },
  plugins: [/* react, jsx-a11y, import, 'prettier' */ 'cypress'],
  rules: {
    // --- ✅  Cypress
    // https://github.com/cypress-io/eslint-plugin-cypress
    // Prevent assigning return values of cy calls (use aliases instead)
    'cypress/no-assigning-return-values': 'error',
    // Prevent waiting for arbitrary time periods (use wait instead)
    'cypress/no-unnecessary-waiting': 'error',

    // --- ⬆️ Updates

    // Accessing `this` for references from test setup like beforeEach requires
    // using standard functions over arrow functions for context
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    // Allow triple slash type directives
    'spaced-comment': 'off'
  }
}
