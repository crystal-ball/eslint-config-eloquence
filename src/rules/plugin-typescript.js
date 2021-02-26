'use strict'

/**
 * Plugin rules for TypeScript
 *
 * 📝 https://github.com/typescript-eslint/typescript-eslint
 */
module.exports = {
  // --- Disabled ESLint rules ----------------------
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts

  'constructor-super': 'off', // ts(2335) & ts(2377)
  'getter-return': 'off', // ts(2378)
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-func-assign': 'off', // ts(2539)
  'no-import-assign': 'off', // ts(2539) & ts(2540)
  'no-new-symbol': 'off', // ts(2588)
  'no-obj-calls': 'off', // ts(2349)
  'no-setter-return': 'off', // ts(2408)
  'no-this-before-super': 'off', // ts(2376)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
  'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
  'prefer-const': 'error', // ts provides better types with const
  'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
  'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
  'valid-typeof': 'off', // ts(2367)

  // Disable ESLint scope analysis, see "TypeScript Scope Analysis"
  // https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.0.0
  'no-redeclare': 'off',
  'no-shadow': 'off',
  'no-undef': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',

  // --- Recommended rules --------------------------
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts

  'no-array-constructor': 'off',
  'no-empty-function': 'off',
  'no-extra-semi': 'off',

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  // Bans using `// @ts-*` directives unless a comment is included (to explain
  // why the directive is needed)
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
    },
  ],
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
  '@typescript-eslint/no-array-constructor': 'error',

  // Helps avoid possible confusing return statements that happen to be void,
  // ignoreVoidOperator allows returning those values by explicityl marking them void, eg:
  // if (missingSomeValue) return void console.error('oh no')
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreVoidOperator: true },
  ],
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-this-alias': 'error',

  // Prevents unnecessary type constraints, eg: <T extends unknown>
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  // Disallow unused variables (including types)
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
}

// TypeScript rules managed by Prettier
// Ref: (https://github.com/prettier/eslint-config-prettier/blob/main/index.js
// @typescript-eslint/brace-style
// @typescript-eslint/comma-dangle
// @typescript-eslint/comma-spacing
// @typescript-eslint/func-call-spacing
// @typescript-eslint/indent
// @typescript-eslint/keyword-spacing
// @typescript-eslint/member-delimiter-style
// @typescript-eslint/no-extra-parens
// @typescript-eslint/no-extra-semi
// @typescript-eslint/object-curly-spacing
// @typescript-eslint/semi
// @typescript-eslint/space-before-function-paren
// @typescript-eslint/space-infix-ops
// @typescript-eslint/type-annotation-spacing
