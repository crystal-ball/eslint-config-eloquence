const { resolve } = require('path')

const airbnb = require.resolve('eslint-config-airbnb')
const react = require(resolve(airbnb, '../rules/react.js'))
const { rules } = react

// Create dev vs test env rule sets
// ---------------------------------------------------------------------------

// This set of rules will be warnings in dev to keep ESLint out of the way on
// stylistic issues while HACKIN
const warnLevelRuleSet = [
  'react/default-props-match-prop-types',
  'react/forbid-prop-types',
  'react/jsx-filename-extension',
  'react/no-unused-prop-types',
  'react/no-unused-state',
  'react/prop-types',
]

// Create dev rule set with warning linter levels
const devRuleSet = {}
warnLevelRuleSet.forEach(rule => {
  const ruleConfig = [...rules[rule]]
  ruleConfig.splice(0, 1, 'warn')
  devRuleSet[rule] = ruleConfig
})

/**
 * ## Web Client/Frontend
 * Adds prettier/react rules and ecmaFeatures for using JSX. Sets the resolver to
 * Webpack for the import plugin.
 */
const config = {
  extends: [
    require.resolve('./index.js'),
    'prettier/react', // Prettier formatting support for JSX
  ],
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
  rules: Object.assign(
    {
      // ⬆️ Updates/Enhancements
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
    devRuleSet
  ),
}

// ✅ Test env level rules
// ---------------------------------------------------------------------------
if (process.env.NODE_ENV === 'test') {
  // In test we switch back to the default error level for all rules
  const testRuleSet = {}
  warnLevelRuleSet.forEach(rule => {
    testRuleSet[rule] = rules[rule]
  })

  Object.assign(config.rules, testRuleSet)
}

module.exports = config
