'use strict'

/**
 * Rules for Cypress acceptance tests
 */
module.exports = {
  // Use closures to access the async values returned by Commands
  'cypress/no-assigning-return-values': 'error',

  // Use route aliases or assertions instead of `cy.wait` calls
  'cypress/no-unnecessary-waiting': 'error',

  // Require an assertion before a screenshot to help ensure consistent screenshots
  'cypress/assertion-before-screenshot': 'error',

  // --- ⬆️ Rule overrides ---

  // Allow using `function () {}` instead of arrow funcs to support accessing
  // `this` inside of tests, where an arrow function will bind `this` to the
  // incorrect scope:
  //
  // beforeEach(function () {
  //   cy.get('button').invoke('text').as('text')
  // })
  //
  // it('has access to text', function () {
  //   this.text
  // })
  // TODO: verify that arrow funcs do indeed break this
  'func-names': 'off',

  // Allow triple slash type directives in order to include TypeScript
  // <reference types="Cypress" /> directives
  'spaced-comment': 'off',
}
