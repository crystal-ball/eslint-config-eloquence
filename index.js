const { NODE_ENV = 'development' } = process.env
// ℹ️ If we need to start switching configs based on project type (node vs browser),
// Use a `process.env.PROJECT_TYPE` environment variable set in the consuming
// .elsintrc.js in order to switch project types while still using a single entry
// point for both

/**
 * Environment specific rules
 *
 * Improve ESLint DX by adjusting severity of non-critical rules based on
 * environment. When not in test/production make common stylistic issues warn
 * instead of error, don't include Prettier, etc. This speeds up developing
 * (especially when using webpack dev server hooked into the errors overlay 😉)
 */
const envRules =
  NODE_ENV === 'development'
    ? {
        // Allow dev tools in dev environment
        'no-console': 'off',
        'no-debugger': 'off',

        // These rules are non critical, stylistic rules, warn only in dev for them
        'arrow-body-style': 'warn',
        'no-unused-vars': 'warn',
        'prefer-destructuring': 'warn',

        'react/default-props-match-prop-types': 'warn',
        'react/forbid-prop-types': 'warn',
        'react/jsx-filename-extension': 'warn',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'warn',
        'react/prop-types': 'warn',

        'import/first': 'warn',
      }
    : {
        // Validate formatting is correct
        'prettier/prettier': 'error',
      }

/**
 * 😍 ESLint Configs
 *
 * Configuration sets up Airbnb for all code quality linting and Prettier for all
 * formatting linting rules. See README for details.
 */
module.exports = {
  // Base: https://github.com/airbnb/javascript
  extends: ['airbnb', 'prettier', 'prettier/react'],

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    jsx: true,
  },

  // Required for experimental features like object rest spread
  parser: 'babel-eslint',

  // Extend the plugins already included by the Airbnb base
  plugins: [/* react, jsx-a11y, import */ 'prettier', 'flowtype'],

  // Jest can be used for testing in any env!
  env: {
    browser: true,
    node: true,
    jest: true,
  },

  settings: {
    // Add .mjs to resolved extensions
    'import/resolver': { node: { extensions: ['.js', '.mjs', '.json'] } },
  },

  rules: Object.assign(
    {
      // 🌬 Flow (https://github.com/gajus/eslint-plugin-flowtype)
      // ---------------------------------------------------------------------------
      'flowtype/define-flow-type': 'warn',
      'flowtype/require-valid-file-annotation': 'warn',
      'flowtype/use-flow-type': 'warn',

      // ⬆️ Updates/Enhancements
      // ---------------------------------------------------------------------------

      // Enforcing .jsx file extensions doesn't provide a clear benefit and often
      // ends up requiring additional custom configs elsewhere ¯\_(ツ)_/¯
      'react/jsx-filename-extension': 'off',
      // Include .mjs file extension in list of file that shouldn't use ext
      'import/extensions': [
        'error',
        'always',
        { js: 'never', jsx: 'never', mjs: 'never' },
      ],

      // 🐛 Bugs
      // ---------------------------------------------------------------------------

      // Class ordering currently doesn't support class property syntax, which is 🙅
      // Update on: https://github.com/yannickcr/eslint-plugin-react/pull/685
      'react/sort-comp': 'off',
      // Ensures anchor tags are valid, but Airbnb added the <Link> component without
      // also including the `to` prop that configures the href 😑
      // Update on: https://github.com/airbnb/javascript/pull/1648
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'], // ADDITION FOR REACT ROUTER LINK PROP
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],
    },
    // Merge rule udpates for the env and project type to get final ruleset
    envRules
  ),
}
