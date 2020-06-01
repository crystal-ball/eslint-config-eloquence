'use strict'

/**
 * ESLint core 'Possible Errors' rules are focused on catching possible syntax
 * or logic errors
 */
module.exports = {
  // enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // enforce a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // disallow assignment in conditional expressions
  'no-cond-assign': ['error', 'always'],

  // disallow use of console (in production code)
  // ⚙️ explicitly set in /src
  'no-console': 'off',

  // disallow use of constant expressions in conditions
  'no-constant-condition': 'warn',

  // disallow control characters in regular expressions
  'no-control-regex': 'error',

  // disallow use of debugger (in production code)
  'no-debugger': 'error',

  // disallow duplicate arguments in functions
  'no-dupe-args': 'error',

  // prevent duplicate conditions in else/if
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

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

  // TODO: enable in a large codebase and see what happens
  'no-extra-parens': 'off',

  // forbid extra semi colons
  // https://eslint.org/docs/rules/no-extra-semi
  'no-extra-semi': 'error',

  // disallow overwriting functions written as function declarations
  'no-func-assign': 'error',

  // disallow assignments, increments, and decrements of imported bindings
  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',

  // disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // disallow the use of object properties of the global object (Math and JSON) as functions
  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // disallow multiple spaces in a regular expression literal
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // disallow returning values in ES6 setters
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // disallow initializing arrays with missing elements
  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Prevent confusing multiline expressions that could cause errors without semis
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error',

  // disallow unreachable statements after a return, throw, continue, or break statement
  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'error',

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // Disabled b/c rule is too agressive and causes many false positives, eg React refs
  // or Express middleware assignments
  // Ref https://github.com/eslint/eslint/issues/11899
  'require-atomic-updates': 'off',

  // disallow comparisons with the value NaN
  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
}
