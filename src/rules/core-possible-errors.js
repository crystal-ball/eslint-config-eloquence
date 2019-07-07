'use strict'

/**
 * ESLint core 'Possible Errors' rules are focused on catching possible syntax
 * or logic errors
 */
module.exports = {
  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // verify super() callings in constructors
  'constructor-super': 'error',

  // disallow modifying variables that are declared using const
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

  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  // TODO: enable, semver-major
  'no-async-promise-executor': 'off',

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // disallow assignment in conditional expressions
  'no-cond-assign': ['error', 'always'],

  // disallow use of console (in production code)
  'no-console': 'error',

  // disallow use of constant expressions in conditions
  'no-constant-condition': 'warn',

  // disallow control characters in regular expressions
  'no-control-regex': 'error',

  // disallow use of debugger (in production code)
  'no-debugger': 'error',

  // disallow duplicate arguments in functions
  'no-dupe-args': 'error',

  // disallow duplicate keys when creating object literals
  'no-dupe-keys': 'error',

  // disallow a duplicate case label.
  'no-duplicate-case': 'error',

  // disallow empty statements
  'no-empty': 'error',

  // disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 'error',

  // disallow assigning to the exception in a catch block
  'no-ex-assign': 'error',

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // disallow overwriting functions written as function declarations
  'no-func-assign': 'error',

  // disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',

  // disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  // TODO: enable, semver-major
  'no-misleading-character-class': 'off',

  // disallow the use of object properties of the global object (Math and JSON) as functions
  'no-obj-calls': 'error',

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 'error',

  // disallow sparse arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // disallow unreachable statements after a return, throw, continue, or break statement
  'no-unreachable': 'error',

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',
  // disallow negation of the left operand of an in expression
  // deprecated in favor of no-unsafe-negation
  'no-negated-in-lhs': 'off',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // TODO: enable, semver-major
  'require-atomic-updates': 'off',

  // disallow comparisons with the value NaN
  'use-isnan': 'error',

  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  'valid-jsdoc': 'off',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
}
