const config = {
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'react/jsx-closing-bracket-location': 0, // Prettier
    'react/jsx-indent': 0, // Prettier
    'react/jsx-indent-props': 0, // Prettier
    'react/jsx-wrap-multilines': 0 // Prettier
  }
};

// Lint for prettier only in TEST envs
if (process.env.NODE_ENV === 'TEST') {
  config.rules['prettier/prettier'] = [
    'error',
    { singleQuote: true, printWidth: 84 }
  ];
}

module.exports = config;
