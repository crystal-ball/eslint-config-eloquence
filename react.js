'use strict'

const path = require('path')

const coreBestPractices = require('./src/rules/core-best-practices')
const coreEcmaScript = require('./src/rules/core-ecma-script')
const corePossibleErrors = require('./src/rules/core-possible-errors')
const coreStylisticIssues = require('./src/rules/core-stylistic-issues')
const coreVariables = require('./src/rules/core-variables')

const pluginCypress = require('./src/rules/plugin-cypress')
const pluginImport = require('./src/rules/plugin-import')
const pluginJest = require('./src/rules/plugin-jest')
const pluginJestDom = require('./src/rules/plugin-jest-dom')
const pluginJestFormatting = require('./src/rules/plugin-jest-formatting')
const pluginReact = require('./src/rules/plugin-react')
const pluginReactA11y = require('./src/rules/plugin-react-a11y')
const pluginReactHooks = require('./src/rules/plugin-react-hooks')
const pluginTestingLibrary = require('./src/rules/plugin-testing-library')
const pluginTypescript = require('./src/rules/plugin-typescript')

const envRuleSeverities = require('./src/rule-severities')

const { NODE_ENV } = process.env

/**
 * Base configs for React projects
 */
module.exports = {
  // Default expectation is a single config at root of project, with overrides
  // for directory and file customizations
  root: true,

  // Project custom ignore patterns, defaults to ignoring build directories
  // and forcing linting of dot files and directories
  ignorePatterns: ['!.*', 'coverage', 'node_modules', 'public', 'dist'],

  // Provides warnings for eslint-disable directives that aren't necessary
  reportUnusedDisableDirectives: true,

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    // Projects must provide a TS config, this needs to be configurable to support
    // applications possibly including multiple tsConfigs for Cypress
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    '@typescript-eslint',
    'cypress',
    'import',
    'jest',
    'jest-dom',
    'jest-formatting',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'testing-library',
  ],

  settings: {
    // Increase import cache lifetime to 60s
    'import/cache': 60,

    // Mark `@/..` imports as "internal", used by the `import/order` rule
    'import/internal-regex': /^@\//,

    // Use Node resolver upgraded with `@` alias support
    'import/resolver': path.resolve(__dirname, 'src/resolver'),

    // ℹ️ Import plugin TS configs apply to all projects, ref plugin:import/typescript

    // Extensions that will be parsed to check for exports, including JS, TS,
    // React extenions, Node ESM, and type definitions
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],

    // Ensure that types are considered external imports
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

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
    browser: true,
  },

  rules: envRuleSeverities(NODE_ENV, {
    // --- ESLint core rules configuration ---
    ...coreBestPractices,
    ...coreEcmaScript,
    ...corePossibleErrors,
    ...coreStylisticIssues,
    ...coreVariables,

    // --- Plugin rules configuration ---
    ...pluginImport,
    ...pluginReact,

    ...pluginReactA11y,
    ...pluginReactHooks,

    // Prettier formatting enforcement enabled by Prettier *plugin*
    'prettier/prettier': 'error',

    // Core rules that conflict with Prettier not disabled by eslint-config-prettier
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  }),

  // --------------------------------------------------------
  // File overrides (Override directories, then extensions, then files)
  overrides: [
    // --- 1️⃣ Source directory --------------------------
    {
      files: ['src/**/*'],

      parser: '@typescript-eslint/parser',

      rules: {
        // TS rules include type-checking rules which requires files are part of the
        // TSConfig project so they're scoped to just the src/ directory
        ...pluginTypescript,

        // ℹ️ Prevent forgotten console.logs only needed in project source
        // code
        'no-console': NODE_ENV === 'test' ? 'error' : 'warn',

        // ℹ️ Imported modules in project source need to be declared as
        // dependencies to ensure they're available in production
        'import/no-extraneous-dependencies': [
          'error',
          // Allow imports from devDependencies in story and test files
          { devDependencies: ['**/*.{spec,stories}.{cjs,mjs,js}'] },
        ],
      },
    },

    // --- 🌲 Cypress directory --------------------------
    {
      files: ['cypress/**/*'],

      env: { 'cypress/globals': true },

      rules: {
        ...pluginCypress,
        // Screen utility isn't available in Cypress tests
        'testing-library/prefer-screen-queries': 'off',
      },
    },

    // --- 🚔 TypeScript files --------------------------
    {
      files: ['*.ts', '*.tsx'],

      rules: envRuleSeverities(NODE_ENV, {
        // TS requires that fn params are typed so this rule is unnecessary
        'react/prop-types': 'off',
        // TS will error if required props aren't passed or default props without
        // initializers are used in an unsafe way
        'react/require-default-props': 'off',
      }),
    },

    // --- ✅ Test files --------------------------
    {
      files: ['*.spec.js'],

      env: { jest: true },

      rules: {
        // In Jest test files allow defining `jest.mock()` calls before imports
        // Under the hood Jest hoists these to the top of the file and it helps
        // visually distinguish modules that are being replaced with mocks
        'import/first': 'off',
        ...pluginJest,
        ...pluginJestDom,
        ...pluginJestFormatting,
        ...pluginTestingLibrary,
      },
    },

    // --- ⚙️ Configuration files --------------------------
    {
      files: [
        '.eslintrc.js',
        '.storybook/main.js',
        'babel.config.js',
        'jest.config.js',
        'next.config.js',
        'tailwind.config.js',
        'webpack.config.js',
      ],

      parserOptions: {
        sourceType: 'script',
      },

      env: { node: true },
    },
  ],
}
