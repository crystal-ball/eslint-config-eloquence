'use strict'

/**
 * Node.js specific rules
 */
module.exports = (esm) => ({
  // Extensions must be provided for ESM usage
  'import/extensions': [
    esm ? 'error' : 'off',
    'always',
    'ignorePackages',
    {
      cjs: 'always',
      mjs: 'always',
      ts: 'always',
    },
  ],
})
