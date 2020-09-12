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

const pluginCypress = require('./rules/plugin-cypress')
const pluginImport = require('./rules/plugin-import')
const pluginJestDom = require('./rules/plugin-jest-dom')
const pluginNode = require('./rules/plugin-node')
const pluginReact = require('./rules/plugin-react')
const pluginReactA11y = require('./rules/plugin-react-a11y')
const pluginReactHooks = require('./rules/plugin-react-hooks')
const pluginTestingLibrary = require('./rules/plugin-testing-library')
const pluginTypescript = require('./rules/plugin-typescript')

const targetNode = require('./rules/target-node')
const targetReact = require('./rules/target-react')
const targetTypeScript = require('./rules/target-typescript')

const envRuleSeverities = require('./rule-severities')

const { NODE_ENV } = process.env

const targetConfigs = {
  // --- NODE TARGET CONFIGS
  node: {
    // Extend node plugin recommended for additional Node globals
    extends: ['plugin:node/recommended'],
    plugins: ['node'],
    rules: {
      ...pluginNode,
      ...targetNode,
    },
    src: {
      // ℹ️ In project source code ensure that access to process.env is
      // controlled.
      'node/no-process-env': 'error',

      // ℹ️ Calling process.exit outside project source code isn't
      // problematic
      'node/no-process-exit': 'error',
    },
  },
  // --- REACT TARGET CONFIGS
  react: {
    extends: ['prettier/react'],
    plugins: ['jest-dom', 'jsx-a11y', 'react', 'react-hooks', 'testing-library'],
    rules: {
      ...pluginJestDom,
      ...pluginReact,
      ...pluginReactA11y,
      ...pluginReactHooks,
      ...pluginTestingLibrary,
      ...targetReact,
    },
    src: {},
  },
}

/**
 * Eloquence ESLint configs generator
 * @param {Object} opts
 * @param {boolean} [opts.esm]
 * @param {string[]} [opts.ignorePatterns] Array of paths that will be ignored
 * @param {{[key: string]: unknown}} [opts.rules]
 * @param {'node'|'react'} opts.target
 */
module.exports = function eloquence({
  esm = true,
  ignorePatterns = [],
  rules = {},
  target,
}) {
  const sourceType = esm ? 'module' : 'script'

  return {
    // Default expectation is a single config at root of project, with overrides
    // for directory and file customizations
    root: true,

    ignorePatterns,

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
      // Increase import cache lifetime to 60s
      'import/cache': 60,

      // Mark `@/..` imports as "internal", used by the `import/order` rule
      'import/internal-regex': /^@\//,

      // Use webpack to resolve projects to handle src alias
      'import/resolver': path.resolve(__dirname, 'resolver'),

      // Extensions that will be parsed to check for exports, including JS, TS,
      // React extenions, Node ESM, and type definitions
      'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],

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

      // --- Plugin rules ---
      ...pluginImport,

      // --- Target rules ---
      ...targetConfigs[target].rules,

      // Prettier formatting enforcement via Prettier *plugin*
      // (this is different from the rule overrides set in the Prettier *config*)
      'prettier/prettier': 'error',

      // Project specified rules have priority
      ...rules,
    }),

    // --------------------------------------------------------
    // File overrides

    overrides: [
      // --- 1️⃣ Source --------------------------
      {
        files: ['src/**'],
        rules: {
          // ℹ️ Prevent forgotten console.logs only needed in project source
          // code
          'no-console': NODE_ENV === 'test' ? 'error' : 'off',

          // ℹ️ Imported modules in project source need to be declared as
          // dependencies to ensure they're available in production
          'import/no-extraneous-dependencies': [
            'error',
            // Allow imports from devDependencies in story and test files
            { devDependencies: ['**/*.{spec,stories}.{cjs,mjs,js}'] },
          ],

          ...targetConfigs[target].src,
        },
      },

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
          // Config from plugin:import/typescript
          'import/external-module-folders': ['node_modules', 'node_modules/@types'],
          'import/parsers': {
            // Use the ESLint-TS parser when parsing TS and type definition files
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
          },
        },

        rules: envRuleSeverities(NODE_ENV, {
          ...pluginTypescript,
          ...targetTypeScript,
        }),
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
        rules: pluginCypress,
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
      },
    ],
  }
}
