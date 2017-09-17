/**
 * ## Web Client/Frontend
 * Adds prettier/react rules and ecmaFeatures for using JSX. Sets the resolver to
 * Webpack for the import plugin.
 */
module.exports = {
  extends: [require.resolve('./index.js'), 'prettier/react'], // React formatting
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    node: false
  },
  settings: {
    // Use webpack resolver for resolving file extensions and file paths
    'import/resolver': 'webpack'
  },
  rules: {
    // Allow use of named functions before declared, they are hoisted and this makes
    // it possible to declare propTypes at top of component files
    'no-use-before-define': ['error', { functions: false }]
  }
}
