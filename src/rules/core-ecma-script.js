'use strict'

/**
 * ESLint core 'ES6' rules provide linting for new syntax features
 */
module.exports = {
  // disallow modifying variables that are declared using const
  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',
}
