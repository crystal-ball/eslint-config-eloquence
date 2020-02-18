'use strict'

const coreBestPractices = require('./src/core-best-practices')
const coreEcmaScript = require('./src/core-ecma-script')
const corePossibleErrors = require('./src/core-possible-errors')
const coreStylisticIssues = require('./src/core-stylistic-issues')
const coreVariables = require('./src/core-variables')
const imports = require('./src/imports')
const node = require('./src/node')
const react = require('./src/react')
const reactA11y = require('./src/react-a11y')
const reactHooks = require('./src/react-hooks')
const cypress = require('./src/cypress')
const typescript = require('./src/typescript')
const envRuleSeverities = require('./src/env-rule-severities')

module.exports = ({ target }) => {
  const targetEnv = target === 'node' ? { node: true } : { browser: true }
  const targetRules =
    target === 'node'
      ? {
          ...node,
        }
      : {
          ...react,
          ...reactA11y,
          ...reactHooks,
        }

  return {
    extends: ['prettier'],

    // Override Espree parser with Babel
    parser: 'babel-eslint',

    // Default parser to latest ECMA version and ESModules with the goal of
    // staying as close to current syntax as possible
    parserOptions: {
      ecmaVersion: 11,
      sourceType: 'script',
      ecmaFeatures: {
        jsx: true,
      },
    },

    // Plugins for imports, accessibility and react
    plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],

    settings: {
      // --- Import plugin settings

      // Increase import cache lifetime to 60s
      'import/cache': 60,

      // Use webpack to resolve projects to handle src alias
      'import/resolver': 'eslint-config-eloquence/resolver',

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
      es6: true,
      ...targetEnv,
    },

    rules: envRuleSeverities({
      // --- ESLint core rules configuration ---
      ...coreBestPractices,
      ...coreEcmaScript,
      ...corePossibleErrors,
      ...coreStylisticIssues,
      ...coreVariables,

      // --- Target rules ---

      ...targetRules,

      // --- Plugin rules ---

      ...imports,

      // Prettier formatting enforcement via Prettier *plugin*
      // (this is different from the rule overrides set in the Prettier *config*)
      'prettier/prettier': 'error',
    }),

    // --- File overrides -----------------------------------

    overrides: [
      // --- 📖 Source files
      {
        files: ['src/**/*'],
        parserOptions: {
          // Assumption is that source files will always be compiled with Babel
          // so ESM should always be possible
          sourceType: 'module',
        },
      },

      // 🚔 TypeScript
      {
        files: ['*.ts'],

        // Parser is required for linting types, the Babel TS plugin only strips
        // types out
        parser: '@typescript-eslint/parser',

        parserOptions: {
          // TS always supports ESM
          sourceType: 'module',
          // Projects must provide a TS config
          project: './tsconfig.json',
        },

        // Enable Typescript rules
        plugins: ['@typescript-eslint'],

        settings: {
          // Import extension overrides
          // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
          'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
          'import/external-module-folders': ['node_modules', 'node_modules/@types'],
          'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
          },
        },

        rules: envRuleSeverities(typescript),
      },

      // --- ✅ Spec files
      {
        files: ['*.spec.js'],
        parserOptions: {
          // Jest uses Babel so we should be able to always write tests in ESM
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

      // --- 🌲 Cypress files
      {
        files: ['cypress/**/*'],
        parserOptions: {
          sourceType: 'module',
        },
        // Enable Cypress test writing best practice rules
        plugins: ['cypress'],
        env: {
          'cypress/globals': true,
        },
        rules: cypress,
      },

      // --- 📚 Storybook files
      {
        files: ['.storybook/**/*'],
        parserOptions: {
          sourceType: 'module',
        },
      },

      // --- ⚙️ Configuration files
      {
        files: [
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
