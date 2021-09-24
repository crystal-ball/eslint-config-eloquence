'use strict'

// --- 📝 MDX files --------------------------
// 📝: https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx/src/configs/recommended.ts
module.exports = {
  overrides: [
    {
      files: ['*.mdx'],
      parser: 'eslint-mdx',
      plugins: ['mdx'],
      processor: 'mdx/remark',

      globals: {
        React: 'readonly',
      },

      rules: {
        'lines-between-class-members': 'off',
        'no-unused-expressions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        // HTML style comments are not valid in MDX
        'mdx/no-jsx-html-comments': 'error',
        // Not sure what this is...
        'mdx/no-unused-expressions': 'error',
        // Integration with remark plugins
        'mdx/remark': 'error',
      },
    },
  ],
}
