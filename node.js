/**
 * ## Node
 * Projects should use @std/esm for ESModules in Node projects today. Config sets
 * resolver to parse any js/mjs/json file and updates extension requirements to
 * exclude .mjs.
 */
module.exports = {
  extends: [require.resolve('./index.js')],
  parserOptions: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.json'],
      },
    },
  },
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'import/extensions': ['error', 'always', { js: 'never', mjs: 'never' }],
    // It is best practice to console.log to stdout with Node(Docker) modules
    'no-console': 'off',
  },
}
