const { resolve } = require('path')

const airbnb = require.resolve('eslint-config-airbnb')
const reactRules = require(resolve(airbnb, '..', 'rules', 'react.js'))

// Create dev vs test env rule sets
// ---------------------------------------------------------------------------

// Test rule set matches airbnb defaults
const testRuleSet = {
  'react/forbid-prop-types': reactRules.rules['react/forbid-prop-types'],
  'react/prop-types': reactRules.rules['react/prop-types'],
  'react/jsx-filename-extension': reactRules.rules['react/jsx-filename-extension'],
  'react/no-unused-prop-types': reactRules.rules['react/no-unused-prop-types'],
}

// Create dev rule set with warning linter levels
const devRuleSet = {}
Object.keys(testRuleSet).forEach(key => {
  const rule = [...testRuleSet[key]]
  rule.splice(0, 1, 'warn')
  devRuleSet[key] = rule
})

/**
 * ## Web Client/Frontend
 * Adds prettier/react rules and ecmaFeatures for using JSX. Sets the resolver to
 * Webpack for the import plugin.
 */
const config = {
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
    // Updates/Enhancements
    // ---------------------------------------------------------------------------
    // Ensures anchor tags are valid, but Airbnb added the <Link> component without
    // also including the `to` prop that configures the href 😑
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'], // ADDITION FOR REACT ROUTER LINK PROP
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // 🐛 Bugs
    // ---------------------------------------------------------------------------
    // Class ordering currently doesn't support class property syntax, which is 🙅
    // Update on: https://github.com/yannickcr/eslint-plugin-react/pull/685
    'react/sort-comp': 'off',
  },
}

// ✅ Test env level rules
// ---------------------------------------------------------------------------
if (process.env.NODE_ENV === 'test') {
  Object.assign(config.rules, testRuleSet)
}

module.exports = config
