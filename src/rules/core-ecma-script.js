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

  // Prefer import/no-duplicates`
  // https://eslint.org/docs/rules/no-duplicate-imports
  'no-duplicate-imports': 'off',

  // disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // Disallow renaming destructuring assignments, imports, and exports to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': 'error',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // Require named imports are sorted alphabetically
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': [
    'error',
    {
      ignoreCase: false,
      ignoreMemberSort: false,
      // Requires that imports are sorted by their declared variable name, disabled b/c
      // it's preferred to group imports by type, see `import/order`
      ignoreDeclarationSort: true,
    },
  ],
}
