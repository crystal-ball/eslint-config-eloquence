'use strict'

module.exports = {
  extends: ['./node.js'],

  rules: {
    // CommonJS rule overrides
    'import/extensions': 'off',
    'import/no-useless-path-segments': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
