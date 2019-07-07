'use strict'

const devRuleOverrides = require('./src/dev-rule-overrides')

/**
 * React applications use the base ruleset extended with the React ruleset.
 */
module.exports = {
  extends: [
    // Project rules, settings, etc. definitions
    './src/base-config.js',
    './src/react-config.js',

    // Prettier override
    'prettier',
    'prettier/react',
  ],

  rules: {
    ...devRuleOverrides('react'),
  },
}
