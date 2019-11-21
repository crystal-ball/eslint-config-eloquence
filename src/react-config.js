'use strict'

const react = require('./rules/react')
const reactA11y = require('./rules/react-a11y')
const reactHooks = require('./rules/react-hooks')

/**
 * Extend base config for writing React applications bundled with webpack
 */
module.exports = {
  parserOptions: {
    jsx: true,
  },

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  settings: {
    // --- Import plugin settings
    // For webpack projects use the `eslint-import-resolver-webpack` resolver
    // NB: supposedly this could just be 'webpack' but that doesn't seem to
    // actually work for unknown reasons
    'import/resolver': 'eslint-import-resolver-webpack',

    // --- React plugin settings ---
    react: {
      pragma: 'React',
      version: '16.18',
    },
  },

  env: {
    browser: true,
  },

  globals: {
    // Allow accessing process.env injected variables in webpack build
    // TODO: it would be better to setup an example of a single configs mgmt
    // pattern like in Node projects and override this rule to allow accessing
    // process there, but nowhere else...
    process: false,
  },

  rules: {
    ...react,
    ...reactA11y,
    ...reactHooks,
  },
}
