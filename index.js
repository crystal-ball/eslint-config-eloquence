const config = {
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'typescript-eslint-parser',
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    // Allow use of named functions before declared, they are hoisted and this makes
    // it possible to declare propTypes at top of component files
    'no-use-before-define': ['error', { functions: false }],

    // Turn off JSX formatting rules that conflict with auto formatting done by Prettier
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilines': 'off',

    // Airbnb includes eslint-plugin-import, which currently fails to resolve TS
    // modules. TS lints these modules anways, so turn off these rules.
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off'
  }
}

// Lint for prettier only in TEST envs
if (process.env.NODE_ENV === 'TEST') {
  config.rules['prettier/prettier'] = [
    'error',
    { singleQuote: true, printWidth: 84, semi: false, parser: 'typescript' }
  ]
}

module.exports = config
