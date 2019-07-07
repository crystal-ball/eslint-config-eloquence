'use strict'

const devRuleOverrides = require('./src/dev-rule-overrides')

/**
 * Node.js services use the base ruleset extended with the Node ruleset.
 */
module.exports = {
  extends: [
    // Project rules, settings, etc. definitions
    './src/base-config.js',
    './src/node-config.js',

    // Prettier override
    'prettier',
  ],

  rules: {
    ...devRuleOverrides('node'),
  },
}
