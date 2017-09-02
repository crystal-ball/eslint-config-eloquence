/**
 * Client Configs:
 * Extends Airbnb and uses Prettier for all formatting related linting. Configures
 * Webpack as resolver, enables jsx.
 */
const config = {
  extends: [require.resolve('./index.js'), 'prettier/react'], // Add react formatting
  parserOptions: {
    ecmaFeatures: { jsx: true } // Enable JSX
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

module.exports = config
