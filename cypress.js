'use strict'

const cypress = require('./src/rules/cypress')

/**
 * Rules for writing A++ Cypress acceptance tests in a React project
 * https://github.com/cypress-io/eslint-plugin-cypress
 */
module.exports = {
  extends: ['./react.js'],

  plugins: ['cypress'],

  env: {
    node: true,
    'cypress/globals': true,
  },

  rules: {
    ...cypress,
  },
}
