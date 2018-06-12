const { NODE_ENV = 'development', ELOQUENCE_PROJECT_TYPE = 'node' } = process.env

const webpackProject = ELOQUENCE_PROJECT_TYPE === 'webpack'

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
    ecmaVersion: 9,
    sourceType: 'module',
    jsx: true
  },

  parser: 'babel-eslint',

  // Extend the plugins already included by the Airbnb base
  plugins: [/* react, jsx-a11y, import */ 'prettier', 'flowtype'],

  env: {
    browser: webpackProject,
    node: true,
    jest: true
  },

  settings: {
    // For webpack projects use the `eslint-import-resolver-webpack` resolver, else
    // default to standard Node resolver (with support for .mjs files)
    'import/resolver': webpackProject
      ? 'webpack'
      : { node: { extensions: ['.js', '.mjs', '.json'] } }
  },

  rules: Object.assign(
    {
      // --- 🌬 Flow
      // See: https://github.com/gajus/eslint-plugin-flowtype
      'flowtype/define-flow-type': 'warn',
      'flowtype/require-valid-file-annotation': 'warn',
      'flowtype/use-flow-type': 'warn',

      // --- ⬆️ Updates/Enhancements
      // Don't enforce .jsx file extension, it doesn't provide a clear benefit and
      // often requires addl configs on other tooling, do less ¯\_(ツ)_/¯
      'react/jsx-filename-extension': 'off',
      // Include .mjs file extension in list of file that shouldn't use ext
      'import/extensions': [
        'error',
        'always',
        { js: 'never', jsx: 'never', mjs: 'never' }
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
          aspects: ['noHref', 'invalidHref', 'preferButton']
        }
      ]
    },

    // 🌍 Environment adjustments
    // ---------------------------------------------------------------------------

    /*
     * Improve ESLint DX by adjusting severity of non-critical rules based on
     * environment. When not in test/production make common stylistic issues warn
     * instead of error, don't include Prettier, etc. This speeds up developing
     * (especially when using webpack dev server hooked into the errors overlay 😉)
     */
    NODE_ENV === 'development'
      ? {
          // Allow dev tools in dev environment
          'no-console': 'off',
          'no-debugger': 'off',

          // These rules are non critical, stylistic rules, warn only in dev for them
          'arrow-body-style': 'warn',
          'no-unused-vars': 'warn',
          'prefer-const': 'warn',
          'prefer-destructuring': 'warn',

          'react/default-props-match-prop-types': 'warn',
          'react/forbid-prop-types': 'warn',
          'react/no-unused-prop-types': 'warn',
          'react/no-unused-state': 'warn',
          'react/prefer-stateless-function': 'warn',
          'react/prop-types': 'warn',
          'react/require-default-props': 'warn',

          'import/first': 'warn'
        }
      : {
          // Validate formatting is correct in test,prod,etc.
          'prettier/prettier': 'error'
        }
  )
}
