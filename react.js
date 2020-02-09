'use strict'

const coreBestPractices = require('./src/core-best-practices')
const coreEcmaScript = require('./src/core-ecma-script')
const corePossibleErrors = require('./src/core-possible-errors')
const coreStylisticIssues = require('./src/core-stylistic-issues')
const coreVariables = require('./src/core-variables')
const imports = require('./src/imports')
const react = require('./src/react')
const reactA11y = require('./src/react-a11y')
const reactHooks = require('./src/react-hooks')
const cypress = require('./src/cypress')
const envRuleSeverities = require('./src/env-rule-severities')

/**
 * React applications use the base ruleset extended with the React ruleset.
 */
module.exports = {
  extends: ['prettier'],

  // Override Espree parser with Babel
  parser: 'babel-eslint',

  // Default parser to latest ECMA version and ESModules with the goal of
  // staying as close to current syntax as possible
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  // Plugins for imports, accessibility and react
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],

  settings: {
    // --- Import plugin settings
    // Use webpack to resolve projects to handle src alias
    'import/resolver': 'eslint-import-resolver-webpack',
    // Increase import cache lifetime to 60s
    'import/cache': 60,

    // --- React plugin settings ---
    react: {
      pragma: 'React',
      version: 'detect',
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      // Used by react/jsx-no-target-blank
      linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    },
  },

  env: {
    browser: true,
    es6: true,
  },

  globals: {
    // Allow accessing process.env injected variables in webpack build
    // TODO: it would be better to setup an example of a single configs mgmt
    // pattern like in Node projects and override this rule to allow accessing
    // process there, but nowhere else...
    process: false,
  },

  rules: envRuleSeverities({
    // --- ESLint core rules configuration ---
    ...coreBestPractices,
    ...coreEcmaScript,
    ...corePossibleErrors,
    ...coreStylisticIssues,
    ...coreVariables,

    // --- Plugin rules ---

    ...imports,

    ...react,
    ...reactA11y,
    ...reactHooks,

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

    // ⚙️ Configuration files - Sets Node env and resolver used for tooling setup
    {
      files: [
        '.storybook/main.js',
        'cypress/plugins/index.js',
        'babel.config.js',
        'jest.config.js',
        'webpack.config.js',
      ],
      env: {
        node: true,
      },
      settings: {
        'import/resolver': 'node',
      },
    },

    // 🌲 Cypress files - Adds Cypress globals and rules
    {
      files: ['cypress/**/*'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
      rules: {
        ...cypress,
      },
    },
  ],
}
