'use strict'

/**
 * Extend base config for writing Node services and packages
 */
module.exports = {
  extends: './index.js',
  parserOptions: {
    sourceType: 'script'
  },
  env: {
    node: true,
    jest: true
  },
  rules: {
    // Enable setting use strict pragma b/c node envs are NOT in modules
    strict: ['error', 'safe'],
    // Allow global require to prevent circular dependencies
    'global-require': 'off'
  }
}
