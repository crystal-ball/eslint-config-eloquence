'use strict'

/**
 * Plugin rules for writing effective test queries using the custom Jest DOM
 * matchers
 *
 * 📝 https://github.com/jest-community/eslint-plugin-jest
 */
module.exports = {
  // Require tests use the `it` syntax to match Cypress which doesn't support `test`
  'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
  // Require that every test has at least one assertion with `expect`
  'jest/expect-expect': 'error',
  // Requires that all test and describe names are all lowercase for readability,
  // off b/c it's not value added to enforce that
  'jest/lowercase-name': 'off',
  // Requires that only canonical Jest methods are used, aliases are not allowed
  // for easier searching and better consistency
  'jest/no-alias-methods': 'error',
  // Disallows commenting out tests
  'jest/no-commented-out-tests': 'error',
  // Prevent expect being conditionally called which can lead to silent test issues
  'jest/no-conditional-expect': 'error',
  // Prevents using deprecated fns
  'jest/no-deprecated-functions': 'error',
  // Help prevent accidentally committing disabled tests
  'jest/no-disabled-tests': 'error',
  // Prefer asnc test fns, linting can be disabled with a comment on why a done cb is needed
  'jest/no-done-callback': 'error',
  // Prevent accidentally including duplicate setup/teardown hooks
  'jest/no-duplicate-hooks': 'error',
  // Don't export stuff from test files, it's confusing 😅
  'jest/no-export': 'error',
  // Help prevent accidentally focused tests (.only)
  'jest/no-focused-tests': 'error',
  // 🤔 Could be a nice rule to enable to require fn calls for setup/teardown in each test
  'jest/no-hooks': 'off',
  // Requires unique titles for describe and test blocks
  'jest/no-identical-title': 'error',
  // No ifs in tests
  'jest/no-if': 'error',
  // Interpolation in snapshots prevents updating them
  'jest/no-interpolation-in-snapshots': 'error',
  // Prevent using Jasmine instead of Jest
  'jest/no-jasmine-globals': 'error',
  // Disallow importing Jest, but this might be ok in the future for TS
  'jest/no-jest-import': 'off',
  // Prevents large snapshots b/c they're hard to review, not this can be overridden on a
  // snapshot by snapshot basis with `allowedSnapshots
  'jest/no-large-snapshots': 'error',
  // Importing from __mocks__ is an error, the module being mocked should be imported
  'jest/no-mocks-import': 'error',
  // This rule can be used to forbid specific matchers
  'jest/no-restricted-matchers': ['error', {}],
  // Expect needs to be in a test block
  'jest/no-standalone-expect': 'error',
  // Only use `.only` and `.skip` (not `f` and `x`)
  'jest/no-test-prefixes': 'error',
  // Tests should return void (use async/await for async tests instead of returning a promise)
  'jest/no-test-return-statement': 'error',
  // Suggest writing better tests with CalledWith or CalledTimes instead of just Called
  'jest/prefer-called-with': 'error',
  // Way too tedious
  'jest/prefer-expect-assertions': 'off',
  // Define setup/teardown before tests for better organization
  'jest/prefer-hooks-on-top': 'error',
  // Prefer setting up mocks with spyOn to not accidentally overwrite real methods
  'jest/prefer-spy-on': 'error',
  // Assert that object structure matches
  'jest/prefer-strict-equal': 'error',
  // Better tests and consistency
  'jest/prefer-to-be-null': 'error',
  // Better tests and consistency
  'jest/prefer-to-be-undefined': 'error',
  // // Better tests and consistency for array elements
  'jest/prefer-to-contain': 'error',
  // Better tests and consistency for array length
  'jest/prefer-to-have-length': 'error',
  // Prefer .todo over an empty test body
  'jest/prefer-todo': 'error',
  // If an error throws, then it throws
  'jest/require-to-throw-message': 'off',
  // Require at least one top level describe in each test
  'jest/require-top-level-describe': 'error',
  // Describe call validations
  'jest/valid-describe': 'error',
  // Expect call validations
  'jest/valid-expect': ['error', { alwaysAwait: true }],
  // Don't return promises, use async-await
  'jest/valid-expect-in-promise': 'off',
  // Title validations
  'jest/valid-title': 'error',
}
