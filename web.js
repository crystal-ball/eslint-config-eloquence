/**
 * ## Web Client/Frontend
 * Adds prettier/react rules and ecmaFeatures for using JSX. Sets the resolver to
 * Webpack for the import plugin.
 */
module.exports = {
  extends: [require.resolve('./index.js'), 'prettier/react'], // React formatting
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: false,
  },
  globals: {
    // Allows accessing process.env.NODE_ENV
    process: false,
  },
  settings: {
    // Use webpack resolver for resolving file extensions and file paths
    'import/resolver': 'webpack',
  },
  rules: {
    // Class ordering currently doesn't support class property syntax, which is 🙅
    // Update on: https://github.com/yannickcr/eslint-plugin-react/pull/685
    'react/sort-comp': 'off',
  },
}
