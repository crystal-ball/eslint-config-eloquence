/**
 * TypeScript Configs:
 * Extends Airbnb and uses Prettier for all formatting related linting.
 * TypeScript parser is specified for ESLint and Prettier, rules that are better
 * handled by TS compiler are turned off.
 */
const config = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'typescript-eslint-parser',
  plugins: ['prettier'],
  // NOTE: Currently we are turning off the eslint-plugin-import rules. If the TS
  // parser and the plugin are updated to the point that they work well together,
  // these settings need to be included to override the Airbnb settings.
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx']
  //     }
  //   },
  //   'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  //   'import/parsers': {
  //     'typescript-eslint-parser': ['.ts', '.tsx']
  //   }
  // },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // Allow use of named functions before declared, they are hoisted and this makes
    // it possible to declare propTypes at top of component files
    'no-use-before-define': ['error', { functions: false }],
    // Allow console logs in development, and upgrade them to error in test
    'no-console': 'off',

    // Turn off ESLint rules handled by TypeScript compiler
    'no-unused-vars': 'off',
    'no-undef': 'off',

    // Turn off eslint-plugin-import rules handled by TypeScript compiler
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
  },
}

// Lint for prettier only in TEST envs
if (process.env.NODE_ENV === 'test') {
  Object.assign(config.rules, {
    'prettier/prettier': [
      'error',
      { singleQuote: true, printWidth: 84, semi: false },
    ],
    'no-console': 'error',
  })
}

module.exports = config
