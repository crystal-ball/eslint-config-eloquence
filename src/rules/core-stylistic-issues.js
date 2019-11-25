'use strict'

/**
 * ESLint core 'Stylistic Issues' rules are focused on providing consistent
 * style guidelines for writing code.
 */
module.exports = {
  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // Prefer using ** over Math.pow()
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // suggest using the spread operator instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // require camel case names
  // TODO: semver-major (eslint 5): add ignoreDestructuring: false option
  camelcase: ['error', { properties: 'never' }],

  // enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': [
    'off',
    'never',
    {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    },
  ],

  // enforces consistent naming when capturing the current execution context
  'consistent-this': 'off',

  // requires function names to match the name of the variable or property to which they are
  // assigned
  // https://eslint.org/docs/rules/func-name-matching
  // TODO: semver-major (eslint 5): add considerPropertyDescriptor: true
  'func-name-matching': [
    'off',
    'always',
    {
      includeCommonJSModuleExports: false,
    },
  ],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  'func-names': 'warn',

  // enforces use of function declarations or expressions
  // https://eslint.org/docs/rules/func-style
  // TODO: enable
  'func-style': ['off', 'expression'],

  // Blacklist certain identifiers to prevent them being used
  // https://eslint.org/docs/rules/id-blacklist
  'id-blacklist': 'off',

  // this option enforces minimum and maximum identifier lengths
  // (variable names, property names etc.)
  'id-length': 'off',

  // require identifiers to match the provided regular expression
  'id-match': 'off',

  // enforce position of line comments
  // https://eslint.org/docs/rules/line-comment-position
  // TODO: enable?
  'line-comment-position': [
    'off',
    {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    },
  ],

  // require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // require or disallow newlines around directives
  // https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': [
    'error',
    {
      before: 'always',
      after: 'always',
    },
  ],

  // specify the maximum depth that blocks can be nested
  'max-depth': ['off', 4],

  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': [
    'off',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // specify the maximum depth callbacks can be nested
  'max-nested-callbacks': 'off',

  // Limit fns to 3 params to help keep them understandable at the *call* site.
  // Anymore than 3 params should probably use an options object param
  // https://eslint.org/docs/rules/max-params
  'max-params': ['error', 3],

  // specify the maximum number of statement allowed in a function
  'max-statements': ['off', 10],

  // restrict the number of statements per line
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['off', { max: 1 }],

  // enforce a particular style for multiline comments
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['off', 'starred-block'],

  // require a capital letter for constructors
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  // allow/disallow an empty newline after var statement
  'newline-after-var': 'off',

  // https://eslint.org/docs/rules/newline-before-return
  'newline-before-return': 'off',

  // disallow use of the Array constructor
  'no-array-constructor': 'error',

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'off',

  // disallow comments inline after code
  'no-inline-comments': 'off',

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // disallow nested ternary expressions
  'no-nested-ternary': 'error',

  // disallow use of the Object constructor
  'no-new-object': 'error',

  // disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': 'error',

  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // disallow the use of ternary operators
  'no-ternary': 'off',

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // allow just one var statement per function
  'one-var': ['error', 'never'],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // Require or disallow padding lines between statements
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  // TODO: semver-major (eslint 5): enable
  'prefer-object-spread': 'off',

  // do not require jsdoc
  // https://eslint.org/docs/rules/require-jsdoc
  'require-jsdoc': 'off',

  // requires object keys to be sorted
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

  // sort variables within the same declaration block
  'sort-vars': 'off',

  // require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      },
    },
  ],

  // TODO: wrap-regex
}
