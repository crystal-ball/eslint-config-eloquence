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

const envRuleSeverities = require('./src/rule-severities')
const coreBestPractices = require('./src/rules/core-best-practices')
const coreEcmaScript = require('./src/rules/core-ecma-script')
const corePossibleErrors = require('./src/rules/core-possible-errors')
const coreStylisticIssues = require('./src/rules/core-stylistic-issues')
const coreVariables = require('./src/rules/core-variables')
const pluginImport = require('./src/rules/plugin-import')
const pluginNode = require('./src/rules/plugin-node')
const pluginTypescript = require('./src/rules/plugin-typescript')

const { NODE_ENV } = process.env

/**
 * Base configs for Node.js projects
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

  // Node plugin will check package.json type field and set correct Node
  // globals, sourceType, and overrides for .cjs files
  extends: ['plugin:node/recommended'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {},
  },

  plugins: ['@typescript-eslint', 'import', 'prettier'],

  settings: {
    // Assumes tools like eslint-loader aren't used
    'import/cache': Infinity,
    // Use Node resolver upgraded with `@` alias support
    'import/resolver': path.resolve(__dirname, 'src/resolver'),
    // TS Support - Extensions that plugin-import will be parse to check for exports
    'import/extensions': ['.cjs', '.js', '.mjs', '.ts'],
    // TS Support - Ensure that modules resolved with type definitions are considered external imports
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
    // --- 💡 TypeScript files --------------------------
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        // Project required for type-aware rules - include only for src otherwise any
        // file not in tsconfig include will break linting
        project: ['./tsconfig.json'],

        rules: {
          ...envRuleSeverities(NODE_ENV, pluginTypescript),
        },
      },
    },
    // --- 1️⃣ Source directory --------------------------
    {
      files: ['src/**/*'],

      rules: {
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
      extends: [
        'plugin:jest-formatting/strict',
        'plugin:jest/all',
        'plugin:jest-extended/all',
      ],
      plugins: ['jest', 'jest-extended', 'jest-formatting'],
      rules: {
        'jest/unbound-method': 'off', // requires addl ts configs to enable
        'jest/prefer-expect-assertions': 'off', // just a little toooo opinionated
      },

      env: { jest: true },
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
