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
    'comma-dangle': [2, 'always-multiline'],
    'no-cond-assign': [2, 'except-parens'],
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'no-unexpected-multiline': 2,

    // Best Practices Rules
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-eq-null': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 0,
    'no-redeclare': 2,
    'no-script-url': 2,
    'no-unused-expressions': 0,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': [2, 'never'],
    'strict': 0,

    // Variable Rules
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': [2, {
      'builtinGlobals': false,
      'hoist': 'functions'
    }],
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 0,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],

    // Node Rules
    'callback-return': [2, ['callback', 'cb', 'next']],
    'handle-callback-err': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
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
    'react/jsx-boolean-value': [2, 'never'], // No explicit true values
    'react/jsx-closing-bracket-location': [2, 'line-aligned'], // Closing multiline tag match opening tag
    'react/jsx-curly-spacing': [2, 'never', { 'allowMultiline': true }], // no spacing around prop curlies
    'react/jsx-equals-spacing': [2, 'never'], // no spacing around props equals
    'react/jsx-first-prop-new-line': [2, 'multiline'], // first prop must be on newline when multiline
    'react/jsx-indent': [2, 2], // 2 spaces for newlines
    'react/jsx-indent-props': [2, 2], // 2 spaces for props
    'react/jsx-key': 2, // No missing keys for iterable elements
    'react/jsx-no-bind': 2, // Use constructor or new components to handle binding methods
    'react/jsx-no-comment-textnodes': 2, // Prevent accidental comment syntax
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0, // Allow literal text
    'react/jsx-no-target-blank': 2, // Require rel='noreferrer noopener for anchors
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2, // Pascal case component names
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/jsx-uses-react': 2, // Mark React as used when JSX is used
    'react/jsx-uses-vars': 2, // Find variables used in JSX and mark
    'react/jsx-wrap-multilines': [2, {
      declaration: true,
      assignment: true,
      return: true
    }],
    'react/no-array-index-key': 2, // Don't use index as key
    'react/no-children-prop': 2, // Don't pass children as props
    'react/no-danger-with-children': 2, // Don't use dangerous html && children
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2, // Use this.setState
    'react/no-find-dom-node': 2, // Use refs instead of findDOMNode
    'react/no-multi-comp': [2, { ignoreStateless: true }], // Allow stateless components
    'react/no-set-state': 0, // Allow this.setState
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': [2, {
      customValidators: [
      ],
      skipShapeProps: true,
    }], // Require validated props to be used
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/self-closing-comp': 2,
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
    'react/sort-prop-types': 2, // Alphabetize prop types
    'react/style-prop-object': 2, // Use an object for styles
  }
};
