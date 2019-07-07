/**
 * Node configs
 */

'use strict'

const node = require('./rules/node')

/**
 * Extend base config for writing Node services and packages
 */
module.exports = {
  parserOptions: {
    // Update to common JS modules as Node default until ESModules are fully
    // supported
    sourceType: 'script',
  },

  settings: {
    // Import plugin is used in all projects and is defaulted to the standard
    // node resolver with support for .mjs/.jsx extensions
    // https://www.npmjs.com/package/eslint-import-resolver-node
    'import/resolver': 'node',
  },

  env: {
    node: true,
  },

  rules: {
    ...node,
  },
}
