'use strict'

const { ENABLE_JEST_NOTIFICATIONS } = process.env

module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // It's a Node project 😇
  testEnvironment: 'node',

  // OS notifications of test results is an opt in feature, enable by setting
  // a truthy env value in your shell environment
  notify: Boolean(ENABLE_JEST_NOTIFICATIONS),

  // Ignore Cypress acceptance tests
  testPathIgnorePatterns: ['/node_modules/'],

  // Collect test coverage of source files (excluding stories), report
  // text-summary for devs and lcov for reporting to Code Climate in CI/CD envs.
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  collectCoverageFrom: [
    'node.js',
    'react.js',
    'typescript.js',
    'resolver.js',
    'src/**/*.js',
  ],
}
