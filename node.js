/**
 * Module notes: This config handles two types of Node projects: ESM and
 * CommonJS.
 * - ESM projects will have a type of `module` in their package.json and are
 *   expected to still be using .js file extensions. These projects may have
 *   scripts or configuration files run by CommonJS tools (like Jest and
 *   ESLint), which will have .cjs file extensions. Overrides
 * - CommonJS projects are expected to use .js file extensions for all files,
 *   and all files will use commonJS modules
 */

'use strict'

const path = require('path')

const coreBestPractices = require('./src/rules/core-best-practices')
const coreEcmaScript = require('./src/rules/core-ecma-script')
const corePossibleErrors = require('./src/rules/core-possible-errors')
const coreStylisticIssues = require('./src/rules/core-stylistic-issues')
const coreVariables = require('./src/rules/core-variables')

const pluginImport = require('./src/rules/plugin-import')
const pluginJest = require('./src/rules/plugin-jest')
const pluginJestFormatting = require('./src/rules/plugin-jest-formatting')
const pluginNode = require('./src/rules/plugin-node')
const pluginTypescript = require('./src/rules/plugin-typescript')

const envRuleSeverities = require('./src/rule-severities')

const { NODE_ENV } = process.env

/**
 * Base configs for Node.js projects
 */
module.exports = {
  // Node plugin will check package.json type field and set correct Node
  // globals, sourceType, and overrides for .cjs files
  extends: ['plugin:node/recommended'],

  // Default expectation is a single config at root of project, with overrides
  // for directory and file customizations
  root: true,

  // Project custom ignore patterns, defaults to ignoring build directories
  // and forcing linting of dot files and directories
  ignorePatterns: ['!.*', 'coverage/*', 'public/*', 'dist/*'],

  // Provides warnings for eslint-disable directives that aren't necessary
  reportUnusedDisableDirectives: true,

  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {},
    // Projects must provide a TS config, this needs to be configurable to support
    // applications possibly including multiple tsConfigs for Cypress
    // nb: if additional file extensions need to be included in the TS parser use the
    // extraFileExtensions option.
    project: ['./tsconfig.json'],
  },

  plugins: ['@typescript-eslint', 'import', 'jest', 'jest-formatting', 'prettier'],

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
    'import/extensions': ['.cjs', '.js', '.mjs', '.ts', '.d.ts'],

    // Ensure that types are considered external imports
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },

  env: {
    es6: true,
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
    ...pluginNode,

    // Prettier formatting enforcement enabled by Prettier *plugin*
    'prettier/prettier': 'error',

    // Node ESM projects must specify all import extensions
    'import/extensions': ['error', 'ignorePackages'],
    // Node ESM requires full import paths (override default noUselessIndex)
    'import/no-useless-path-segments': 'error',
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

        // ℹ️ In project source code ensure that access to process.env is
        // controlled.
        'node/no-process-env': 'error',

        // ℹ️ Imported modules in project source need to be declared as
        // dependencies to ensure they're available in production
        'import/no-extraneous-dependencies': [
          'error',
          // Allow imports from devDependencies in story and test files
          { devDependencies: ['**/*.{spec}.{cjs,mjs,js}'] },
        ],
      },
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
        ...pluginJestFormatting,
      },
    },

    // --- 💾 CommonJS files --------------------------
    {
      files: ['*.cjs'], // Only for files *opted* into CJS *inside* an ESM project
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/extensions': ['error', 'ignorePackages'],
      },
    },
  ],
}
