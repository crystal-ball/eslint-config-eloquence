/**                                                             Eloquence ESLint
 * -----------------------------------------------------------------------------
 *
 * ## ℹ️ Notes
 * ESModules: Package defaults to using ESM for ESLint `sourceType`
 * configuration, with overrides for Node executed tooling like Jest. Node ESM
 * using cjs and mjs file extensions not yet handled.
 * @module
 */

/* eslint-disable node/no-process-env -- Package process.env accessor */

'use strict'

const path = require('path')

const coreBestPractices = require('./rules/core-best-practices')
const coreEcmaScript = require('./rules/core-ecma-script')
const corePossibleErrors = require('./rules/core-possible-errors')
const coreStylisticIssues = require('./rules/core-stylistic-issues')
const coreVariables = require('./rules/core-variables')

const cypress = require('./rules/cypress')
const imports = require('./rules/imports')
const jestDom = require('./rules/jest-dom')
const node = require('./rules/node')
const react = require('./rules/react')
const reactA11y = require('./rules/react-a11y')
const reactHooks = require('./rules/react-hooks')
const testingLibrary = require('./rules/testing-library')
const typescript = require('./rules/typescript')

const envRuleSeverities = require('./env-rule-severities')

const { NODE_ENV } = process.env

const targetConfigs = {
  // --- NODE TARGET CONFIGS
  node: {
    // Extend node plugin recommended for additional Node globals
    extends: ['plugin:node/recommended'],
    plugins: ['node'],
    rules: {
      ...node,
    },
  },
  // --- REACT TARGET CONFIGS
  react: {
    extends: ['prettier/react'],
    plugins: ['jest-dom', 'jsx-a11y', 'react', 'react-hooks', 'testing-library'],
    rules: {
      ...jestDom,
      ...react,
      ...reactA11y,
      ...reactHooks,
      ...testingLibrary,
    },
  },
}

/**
 * Eloquence ESLint configs generator
 * @param {Object} opts
 * @param {'node'|'react'} opts.target
 * @param {boolean} opts.esm
 */
module.exports = ({ target, esm = true }) => {
  const sourceType = esm ? 'module' : 'script'

  return {
    // Configs are intended to be used as root, with overrides where appropriate
    root: true,

    extends: ['prettier', ...targetConfigs[target].extends],

    // Override Espree parser with Babel
    parser: 'babel-eslint',

    // Default parser to latest ECMA version and ESModules with the goal of
    // staying as close to current syntax as possible
    parserOptions: {
      ecmaVersion: 11,
      sourceType,
      ecmaFeatures: {
        jsx: true,
      },
    },

    // Plugins for imports, accessibility and react
    plugins: ['import', 'prettier', ...targetConfigs[target].plugins],

    settings: {
      // --- Import plugin settings

      // Increase import cache lifetime to 60s
      'import/cache': 60,

      // Handle Node and TS extensions
      'import/extensions': ['.cjs', 'mjs', '.js', '.ts', '.tsx', '.d.ts'],

      // Use webpack to resolve projects to handle src alias
      'import/resolver': path.resolve(__dirname, 'resolver'),

      // --- React plugin settings ---
      'react': {
        pragma: 'React',
        version: 'detect',
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        // Used by react/jsx-no-target-blank
        linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
      },
    },

    env: {
      es6: true,
      node: target === 'node',
      browser: target === 'react',
    },

    rules: envRuleSeverities(NODE_ENV, {
      // --- ESLint core rules configuration ---
      ...coreBestPractices,
      ...coreEcmaScript,
      ...corePossibleErrors,
      ...coreStylisticIssues,
      ...coreVariables,

      // --- Target rules ---

      ...targetConfigs[target].rules,

      // --- Plugin rules ---

      ...imports,

      // Prettier formatting enforcement via Prettier *plugin*
      // (this is different from the rule overrides set in the Prettier *config*)
      'prettier/prettier': 'error',
    }),

    // --------------------------------------------------------
    // File overrides

    overrides: [
      // --- 🚔 TypeScript --------------------------
      {
        files: ['*.ts', '*.tsx'],
        // Parser is required for linting types, the Babel TS plugin only strips
        // types out
        parser: '@typescript-eslint/parser',
        parserOptions: {
          // TS always uses ESM
          sourceType: 'module',
          // Projects must provide a TS config
          project: './tsconfig.json',
        },
        plugins: ['@typescript-eslint'],
        settings: {
          // Import extension overrides
          // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
          'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
          },
        },
        rules: envRuleSeverities(NODE_ENV, typescript),
      },

      // --- ✅ Test files --------------------------
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

      // --- 🌲 Cypress files --------------------------
      {
        files: ['cypress/**/*'],
        // Enable Cypress test writing best practice rules
        plugins: ['cypress'],
        env: {
          'cypress/globals': true,
        },
        rules: cypress,
      },

      // --- ⚙️ Configuration files  --------------------------
      {
        files: [
          '.eslintrc.js',
          '.storybook/main.js',
          'cypress/plugins/index.js',
          'babel.config.js',
          'jest.config.js',
          'webpack.config.js',
        ],
        parserOptions: {
          // Ensure that configs read by Node are scripts (override Cypress)
          sourceType: 'script',
        },
        env: {
          node: true,
        },
        rules: {
          // Allow using process.env in tooling configuration files
          'node/no-process-env': 'off',
        },
      },
    ],
  }
}
