'use strict'

/**
 * Plugin rules for writing effective Cypress tests
 *
 * 📝 https://github.com/cypress-io/eslint-plugin-cypress
 */
module.exports = {
  // Require an assertion before a screenshot to help ensure consistent screenshots
  'cypress/assertion-before-screenshot': 'error',

  // Use closures to access the async values returned by Commands
  'cypress/no-assigning-return-values': 'error',

  // Prevent accidentally making Cypress tests async
  'cypress/no-async-tests': 'error',

  // Disallow using force:true with action commands
  'cypress/no-force': 'error',

  // Use route aliases or assertions instead of `cy.wait` calls
  'cypress/no-unnecessary-waiting': 'error',

  // Require that Cypress interactions use data-selectors, eg data-testid, to
  // help encourage test resiliency
  'cypress/require-data-selectors': 'error',

  // Disallow unsafe cy.*() commands that can hang the Cypress runner
  'cypress/unsafe-to-chain-command': 'error',
}
