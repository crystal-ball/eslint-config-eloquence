/**
 * Node Configs:
 * Projects should use @std/esm for ESModules in Node projects today. Node extend
 * sets the resolver to Node with config for .mjs files.
 */
const config = {
  extends: [require.resolve('./index.js')],
  parserOptions: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.json']
      }
    }
  },
  env: {
    browser: false,
    node: true
  },
  rules: {
    'import/extensions': ['error', 'always', { js: 'never', mjs: 'never' }]
  }
}

module.exports = config
