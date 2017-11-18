const { resolve } = require('path')

const airbnb = require.resolve('eslint-config-airbnb-base')
const es6Rules = require(resolve(airbnb, '..', 'rules', 'es6.js'))
const variablesRules = require(resolve(airbnb, '..', 'rules', 'variables.js'))
const importsRules = require(resolve(airbnb, '..', 'rules', 'imports.js'))

// Create dev vs test env rule sets
// ---------------------------------------------------------------------------

// Test rule set matches airbnb defaults
const testRuleSet = {
  'arrow-body-style': es6Rules.rules['arrow-body-style'],
  'no-unused-vars': variablesRules.rules['no-unused-vars'],
  'import/first': importsRules.rules['import/first'],
}

// Create dev rule set with warning linter levels
const devRuleSet = {}
Object.keys(testRuleSet).forEach(key => {
  const rule = [...testRuleSet[key]]
  rule.splice(0, 1, 'warn')
  devRuleSet[key] = rule
})

/**
 * # ESLint Configs
 * The Airbnb configs provide the base-base for all code quality linting rules.
 * Prettier is used for all code formatting linting rules.
 *
 * Modules are expected everywhere thanks to Node 8.5+ and @std/esm 🎉🎉🎉
 */
const config = {
  extends: ['airbnb', 'prettier'], // The base-base
  parserOptions: {
    ecmaVersion: 8,
    // ES Modules. Everywhere. 🎉🎉🎉
    sourceType: 'module',
  },
  parser: 'babel-eslint', // Required for experimental features like object rest spread
  plugins: ['prettier', 'flowtype'],
  // Jest can be used for testing in any env!
  env: { jest: true },
  rules: Object.assign(
    {
      // 🚫 Dev disabled rules
      // ---------------------------------------------------------------------------
      'no-console': 'off',
      'no-debugger': 'off',

      // 🌬 Flow (https://github.com/gajus/eslint-plugin-flowtype)
      // ---------------------------------------------------------------------------
      'flowtype/define-flow-type': 'warn',
      'flowtype/require-valid-file-annotation': 'warn',
      'flowtype/use-flow-type': 'warn',
    },
    // ⚠️ Dev warnings level rules
    // ---------------------------------------------------------------------------
    devRuleSet,
  ),
}

// ✅ Test env level rules
// ---------------------------------------------------------------------------
if (process.env.NODE_ENV === 'test') {
  Object.assign(
    config.rules,
    {
      // Validate formatting is correct
      'prettier/prettier': 'error',
      // Turn dev warnings back to errors
      'no-console': 'error',
      'no-debugger': 'error',
    },
    // Include original ruleset for 'error' level linting in test
    testRuleSet,
  )
}

module.exports = config
