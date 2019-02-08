'use strict'

/**
 * Extend base config for writing webpack bundled applications
 */
module.exports = {
  extends: './index.js',
  settings: {
    // For webpack projects use the `eslint-import-resolver-webpack` resolver
    // NB: supposedly this could just be 'webpack' but that doesn't seem to
    // actually work for unknown reasons
    'import/resolver': 'eslint-import-resolver-webpack'
  },
  env: {
    browser: true,
    jest: true
  },
  globals: {
    // Allow accessing process.env injected variables in webpack build
    process: false
  }
}
