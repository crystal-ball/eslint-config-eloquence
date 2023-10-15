'use strict'

const path = require('path')

const envRuleSeverities = require('./src/rule-severities')
const coreBestPractices = require('./src/rules/core-best-practices')
const coreEcmaScript = require('./src/rules/core-ecma-script')
const corePossibleErrors = require('./src/rules/core-possible-errors')
const coreStylisticIssues = require('./src/rules/core-stylistic-issues')
const coreVariables = require('./src/rules/core-variables')
const pluginCypress = require('./src/rules/plugin-cypress')
const pluginImport = require('./src/rules/plugin-import')
const pluginReact = require('./src/rules/plugin-react')
const pluginReactA11y = require('./src/rules/plugin-react-a11y')
const pluginReactHooks = require('./src/rules/plugin-react-hooks')
const pluginTypescript = require('./src/rules/plugin-typescript')

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

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    '@typescript-eslint',
    'cypress',
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],

  settings: {
    // --- Import plugin settings ---
    // Assumes tools like eslint-loader aren't used
    'import/cache': Infinity,
    // Use Node resolver upgraded with `@` alias support
    'import/resolver': path.resolve(__dirname, 'src/resolver'),
    // TS Support - Extensions that plugin-import will be parse to check for exports
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    // TS Support - Ensure that modules resolved with type definitions are considered external imports
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

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
    // --- 💡 TypeScript files --------------------------
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      rules: {
        ...envRuleSeverities(NODE_ENV, pluginTypescript),

        // TS requires that fn params are typed so this rule is unnecessary
        'react/prop-types': 'off',
        // TS will error if required props aren't passed or default props without
        // initializers are used in an unsafe way
        'react/require-default-props': 'off',
      },
    },

    // --- 1️⃣ Source directory --------------------------
    {
      files: ['src/**/*'],

      rules: {
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

    // --- ✅ Jest tests --------------------------
    {
      files: ['src/**/*.spec.js'],
      extends: [
        'plugin:jest-formatting/strict',
        'plugin:jest/all',
        'plugin:jest-extended/all',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      plugins: [
        'jest',
        'jest-dom',
        'jest-extended',
        'jest-formatting',
        'testing-library',
      ],
      env: { jest: true },
      rules: {
        'jest/unbound-method': 'off', // requires addl ts configs to enable
        'jest/prefer-expect-assertions': 'off', // just a little toooo opinionated
        'testing-library/prefer-user-event': 'error', // opt in to stricter user-event
      },
    },

    // --- 🌲 Cypress tests --------------------------
    {
      files: ['cypress/**/*'],
      env: { 'cypress/globals': true },
      rules: pluginCypress,
    },

    // --- ⚙️ Configuration files --------------------------
    {
      files: [
        'webpack/**/*',
        '.babelrc.js',
        '.eslintrc.js',
        '.storybook/main.js',
        'babel.config.js',
        'jest.config.js',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        'webpack.config.js',
      ],
      parserOptions: { sourceType: 'script' },
      env: { node: true },
    },
  ],
}
