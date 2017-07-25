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
    // Disable Airbnb rules
    'no-param-reassign': 0,
    'no-continue': 0
  }
};

// Lint for prettier only in TEST envs
if (process.env.NODE_ENV === 'TEST') {
  config.rules['prettier/prettier'] = ['error', { singleQuote: true, printWidth: 84 }];
}

module.exports = config;
