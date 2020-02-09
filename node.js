'use strict'

const coreBestPractices = require('./src/core-best-practices')
const coreEcmaScript = require('./src/core-ecma-script')
const corePossibleErrors = require('./src/core-possible-errors')
const coreStylisticIssues = require('./src/core-stylistic-issues')
const coreVariables = require('./src/core-variables')
const imports = require('./src/imports')
const node = require('./src/node')
const envRuleSeverities = require('./src/env-rule-severities')

/**
 * Node.js services use the base ruleset extended with the Node ruleset.
 */
module.exports = {
  extends: ['prettier'],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'script',
  },

  plugins: ['import', 'prettier'],

  settings: {
    // Increase import cache lifetime to 60s
    'import/cache': 60,
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  env: {
    es6: true,
    node: true,
  },

  rules: envRuleSeverities({
    // --- ESLint core rules configuration ---
    ...coreBestPractices,
    ...coreEcmaScript,
    ...corePossibleErrors,
    ...coreStylisticIssues,
    ...coreVariables,

    // Node specific rules
    ...node,

    // --- Plugin rules ---

    ...imports,

    // Prettier formatting enforcement via Prettier *plugin*
    // (this is different from the rule overrides set in the Prettier *config*)
    'prettier/prettier': 'error',
  }),

  // Report on unused eslint-disable comments
  reportUnusedDisableDirectives: true,

  // --- File overrides -----------------------------------

  overrides: [
    // ✅ Spec files - Adds Jest globals used by tests
    {
      files: ['*.spec.js'],
      parserOptions: {
        // Using Babel parser allows writing tests as ESModules now
        sourceType: 'module',
      },
      env: {
        jest: true,
      },
      rules: {
        // In Jest test files allow defining `jest.mock()` calls before imports
        // Under the hood Jest hoists these to the top of the file and it helps
        // visually distinguish modules that are being replaced with mocks
        'import/first': 'off',
      },
    },
  ],
}
