module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  env: {
    browser: true,
    node: true
  },

  rules: {
    // Possible Errors Rules
    'comma-dangle': [1, 'always-multiline'],
    'no-cond-assign': [1, 'except-parens'],
    'no-constant-condition': 1,
    'no-control-regex': 1,
    'no-dupe-args': 1,
    'no-dupe-keys': 1,
    'no-duplicate-case': 1,
    'no-empty-character-class': 1,
    'no-empty': 1,
    'no-ex-assign': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': [1, 'functions'],
    'no-extra-semi': 1,
    'no-func-assign': 1,
    'no-inner-declarations': 1,
    'no-invalid-regexp': 1,
    'no-irregular-whitespace': 1,
    'no-negated-in-lhs': 1,
    'no-obj-calls': 1,
    'no-regex-spaces': 1,
    'no-sparse-arrays': 1,
    'no-unreachable': 1,
    'use-isnan': 1,
    'no-unexpected-multiline': 1,

    // Best Practices Rules
    'curly': 1,
    'default-case': 1,
    'dot-notation': 1,
    'dot-location': [1, 'property'],
    'eqeqeq': 1,
    'no-caller': 1,
    'no-div-regex': 1,
    'no-eq-null': 1,
    'no-extra-bind': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-implied-eval': 1,
    'no-lone-blocks': 1,
    'no-loop-func': 1,
    'no-native-reassign': 1,
    'no-new-func': 1,
    'no-new-wrappers': 1,
    'no-new': 1,
    'no-octal-escape': 1,
    'no-octal': 1,
    'no-param-reassign': 0,
    'no-redeclare': 1,
    'no-script-url': 1,
    'no-unused-expressions': 0,
    'no-with': 1,
    'radix': 1,
    'wrap-iife': [1, 'inside'],
    'yoda': [1, 'never'],
    'strict': 0,

    // Variable Rules
    'no-delete-var': 1,
    'no-shadow-restricted-names': 2,
    'no-shadow': [1, {
      'builtinGlobals': false,
      'hoist': 'functions'
    }],
    'no-undef-init': 1,
    'no-undef': 1,
    'no-undefined': 0,
    'no-unused-vars': [1, {
      'vars': 'all',
      'args': 'none'
    }],

    // Node Rules
    'callback-return': [2, ['callback', 'cb', 'next']],
    'handle-callback-err': 2,
    'no-new-require': 1,
    'no-path-concat': 1,
    'no-process-exit': 2,

    // Style Rules
    'array-bracket-spacing': [1, 'never'],
    'brace-style': [1, '1tbs', { allowSingleLine: true }],
    'block-spacing': 1,
    'no-multi-spaces': 1, // Aligning variable declarations will trip this
    'no-trailing-spaces': 1,
    'object-curly-spacing': [1, 'always'],
    'quotes': [1, 'single'],
    'jsx-quotes': [1, 'prefer-single'],
    'semi': [1, 'always'],

    // ========================================================
    // React Rules
    // ========================================================
    'react/jsx-boolean-value': [1, 'never'], // No explicit true values
    'react/jsx-closing-bracket-location': [1, 'line-aligned'], // Closing multiline tag match opening tag
    'react/jsx-curly-spacing': [1, 'never', { 'allowMultiline': true }], // no spacing around prop curlies
    'react/jsx-equals-spacing': [1, 'never'], // no spacing around props equals
    'react/jsx-first-prop-new-line': [1, 'multiline'], // first prop must be on newline when multiline
    'react/jsx-indent': [1, 2], // 2 spaces for newlines
    'react/jsx-indent-props': [1, 2], // 2 spaces for props
    'react/jsx-key': 1, // No missing keys for iterable elements
    'react/jsx-no-bind': 1, // Use constructor or new components to handle binding methods
    'react/jsx-no-comment-textnodes': 1, // Prevent accidental comment syntax
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0, // Allow literal text
    'react/jsx-no-target-blank': 1, // Require rel='noreferrer noopener for anchors
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1, // Pascal case component names
    'react/jsx-space-before-closing': [1, 'always'], // Require space before closing slash
    'react/jsx-tag-spacing': [1, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/jsx-uses-react': 1, // Mark React as used when JSX is used
    'react/jsx-uses-vars': 1, // Find variables used in JSX and mark
    'react/jsx-wrap-multilines': [1, {
      declaration: true,
      assignment: true,
      return: true
    }],
    'react/no-array-index-key': 1, // Don't use index as key
    'react/no-children-prop': 1, // Don't pass children as props
    'react/no-danger-with-children': 1, // Don't use dangerous html && children
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1, // Use this.setState
    'react/no-find-dom-node': 1, // Use refs instead of findDOMNode
    'react/no-multi-comp': [1, { ignoreStateless: true }], // Allow stateless components
    'react/no-set-state': 0, // Allow this.setState
    'react/no-string-refs': 1,
    'react/no-unescaped-entities': 1,
    'react/no-unknown-property': 1,
    'react/no-unused-prop-types': [1, {
      customValidators: [
      ],
      skipShapeProps: true,
    }], // Require validated props to be used
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-default-props': 1,
    'react/self-closing-comp': 1,
    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^on.+$/',
        '/^render.+$/',
        'render'
      ],
    }],
    'react/sort-prop-types': 1, // Alphabetize prop types
    'react/style-prop-object': 1, // Use an object for styles
  }
};
