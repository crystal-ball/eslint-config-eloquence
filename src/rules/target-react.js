'use strict'

/**
 * React specific rules
 */
module.exports = {
  // ℹ️ webpack bundled React projects don't need extensions defined like Node
  // ESM projects so extensions must be consistently omitted.
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],

  // --- prettier/react
  'react/jsx-child-element-spacing': 'off',
  'react/jsx-closing-bracket-location': 'off',
  'react/jsx-closing-tag-location': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-curly-spacing': 'off',
  'react/jsx-equals-spacing': 'off',
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-indent': 'off',
  'react/jsx-indent-props': 'off',
  'react/jsx-max-props-per-line': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-multi-spaces': 'off',
  'react/jsx-tag-spacing': 'off',
  'react/jsx-wrap-multilines': 'off',
}
