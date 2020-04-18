'use strict'

const severityOverrides = {
  // Allow dev tools in dev environment
  'no-console': 'off',
  'no-debugger': 'off',

  // These rules are non critical, stylistic rules, warn only in dev for them
  'arrow-body-style': 'warn',
  'class-methods-use-this': 'warn',
  'no-unused-vars': 'warn',
  'prefer-const': 'warn',
  'prefer-destructuring': 'warn',
  'sort-imports': 'warn',

  // Imports style preferences rules
  'import/first': 'warn',
  'import/order': 'warn',

  // Don't show any Prettier formatting errors during dev b/c they're SUPER
  // noisy and annoying and NOT helpful at that time
  'prettier/prettier': 'off',

  // React style preferences rules
  'react/default-props-match-prop-types': 'warn',
  'react/forbid-prop-types': 'warn',
  'react/jsx-boolean-value': 'warn',
  'react/jsx-sort-default-props': 'warn',
  'react/jsx-sort-props': 'warn',
  'react/sort-prop-types': 'warn',
  'react/no-multi-comp': 'warn',
  'react/no-unescaped-entities': 'warn',
  'react/no-unused-prop-types': 'warn',
  'react/no-unused-state': 'warn',
  'react/prefer-stateless-function': 'warn',
  'react/prop-types': 'warn',
  'react/require-default-props': 'warn',
  'react/self-closing-comp': 'warn',
}

module.exports = (rules) => {
  // During tests linting, rule severity levels are not overridden
  if (process.env.NODE_ENV === 'test') return rules

  // Outside tests linting, downgrade severity levels for style and formatting
  // rules by setting the rule level. ESLint handles rule extends with a level
  // only by keeping the original rule settings and overriding the level only
  // which makes this a super convenient list of severity overrides that won't
  // affect the rule custom settings
  Object.keys(severityOverrides).forEach((rule) => {
    /* eslint-disable no-param-reassign */
    if (rules[rule]) {
      if (Array.isArray(rules[rule])) {
        rules[rule][0] = severityOverrides[rule]
      } else {
        rules[rule] = severityOverrides[rule]
      }
    }
    /* eslint-enable no-param-reassign */
  })

  return rules
}
