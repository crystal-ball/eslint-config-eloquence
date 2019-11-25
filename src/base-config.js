'use strict'

const coreBestPractices = require('./rules/core-best-practices')
const coreEcmaScript = require('./rules/core-ecma-script')
const corePossibleErrors = require('./rules/core-possible-errors')
const coreStylisticIssues = require('./rules/core-stylistic-issues')
const coreVariables = require('./rules/core-variables')
const imports = require('./rules/imports')

/**
 * Eloquence base configurations
 */
module.exports = {
  // Use Babel for all projects
  parser: 'babel-eslint',

  // Default parser to latest ECMA version and ESModules with the goal of
  // staying as close to current syntax as possible
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },

  // All linting types use the import and prettier plugin rules
  plugins: ['import', 'prettier'],

  env: {
    es6: true, // AT LEAST ES6 EVERYWHERE 👍
    jest: true, // Both Node and React projects use Jest in src dir
  },

  rules: {
    // --- ESLint core rules configuration ---
    ...coreBestPractices,
    ...coreEcmaScript,
    ...corePossibleErrors,
    ...coreStylisticIssues,
    ...coreVariables,

    // Rules for imports are the same for Node and React projects (see each
    // config for import/resolver configuration)
    ...imports,

    // Prettier formatting enforcement via Prettier *plugin* (this is different
    // from the rule overrides set in the Prettier *config*)
    'prettier/prettier': 'error',
  },
}
