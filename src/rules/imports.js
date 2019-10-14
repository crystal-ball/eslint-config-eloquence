'use strict'

const strictMode = process.env.NODE_ENV === 'test'

module.exports = {
  // Require that multiple member imports are sorted alphabetically (ignore
  // the declaration order, it's nice to sort them by import path instead of
  // by import member)
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': [
    strictMode ? 'error' : 'warn',
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    },
  ],

  // Core rule disabled in preference of `import/no-duplicates
  // https://eslint.org/docs/rules/no-duplicate-imports
  'no-duplicate-imports': 'off',

  // Disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': 'error',

  // Disallow specific imports, this should be  enabled by project
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

  // --- Static analysis

  // ensure imports point to files/modules that can be resolved
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // ensure named imports coupled with named exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
  'import/named': 'error',

  // ensure default import coupled with default export
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
  'import/default': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
  'import/namespace': 'off',

  // --- Helpful warnings:

  // disallow invalid exports, e.g. multiple defaults
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
  'import/export': 'error',

  // do not allow a default import name to match a named export
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'error',

  // warn on accessing default export property names that are also named exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 'error',

  // disallow use of jsdoc-marked-deprecated imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
  'import/no-deprecated': 'off',

  // Require that any module used for application code is declared as a
  // `dependencies`
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
  // paths are treated both as absolute paths, and relative to process.cwd()
  'import/no-extraneous-dependencies': [
    'error',
    // globs allow using devDependencies in story and test files
    { devDependencies: ['**/*.{spec,stories}.js'] },
  ],

  // Forbid mutable exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 'error',

  // --- Module systems:

  // disallow require()
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
  'import/no-commonjs': 'off',

  // disallow AMD require/define
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
  'import/no-amd': 'error',

  // No Node.js builtin modules
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
  'import/no-nodejs-modules': 'off',

  // --- Style guide:

  // disallow non-import statements appearing before import statements
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
  'import/first': 'error',

  // disallow duplicate imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',

  // disallow namespace imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
  'import/no-namespace': 'error',

  // Ensure consistent use of file extension within the import path
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    },
  ],

  // Require that imports are ordered by group (provides context of what's being
  // used in a module)
  // ensure absolute imports are above relative imports and that unassigned imports are ignored
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  'import/order': [
    strictMode ? 'error' : 'warn',
    {
      groups: [
        // Node built-ins and external packages are grouped together
        ['builtin', 'external'],
        // The webpack `@` imports resolve as 'unknown'
        'unknown',
        // All other imports
        ['internal', 'parent', 'sibling', 'index'],
      ],
      // Don't require newlines between groups, in files with only a few imports
      // it's nice not to break them up with newlines
      'newlines-between': 'ignore',
    },
  ],

  // Require a newline after the last import/require in a group
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  'import/newline-after-import': 'error',

  // Using named exports is a good practice for ensuring consistency across the codebase
  // so this rule is off
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  'import/prefer-default-export': 'off',

  // Restrict which files can be imported in a given folder
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off',

  // Forbid modules to have too many dependencies
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
  'import/max-dependencies': 'off',

  // Forbid import of modules using absolute paths
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  'import/no-absolute-path': 'error',

  // Forbid require() calls with expressions
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'error',

  // prevent importing the submodules of other modules
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
  'import/no-internal-modules': 'off',

  // Warn if a module could be mistakenly parsed as a script by a consumer
  // leveraging Unambiguous JavaScript Grammar
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
  // this should not be enabled until this proposal has at least been *presented* to TC39.
  // At the moment, it's not a thing.
  'import/unambiguous': 'off',

  // Forbid Webpack loader syntax in imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': 'error',

  // Prevent unassigned imports
  // importing for side effects is perfectly acceptable, if you need side effects.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
  'import/no-unassigned-import': 'off',

  // Prevent importing the default as if it were named
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
  'import/no-named-default': 'error',

  // Reports if a module's default export is unnamed, only enforced for fns and classes
  // to encourage better debug-ability
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': [
    'error',
    {
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: true,
      allowLiteral: true,
      allowObject: true,
    },
  ],

  // Don't require that all exports are declared last, it's convenient to declare them inline
  // This rule enforces that all exports are declared at the bottom of the file.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
  'import/exports-last': 'off',

  // Reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present
  // in a single file.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
  'import/group-exports': 'off',

  // Default exports are ok!
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
  'import/no-default-export': 'off',

  // Prohibit named exports. this is a terrible rule, do not use it.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
  'import/no-named-export': 'off',

  // Forbid a module from importing itself
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
  'import/no-self-import': 'error',

  // Forbid cyclical dependencies between modules
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
  'import/no-cycle': ['error', { maxDepth: Infinity }],

  // Ensures that there are no useless path segments
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': 'error',

  // dynamic imports require a leading comment with a webpackChunkName
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
  'import/dynamic-import-chunkname': [
    'error',
    {
      importFunctions: [],
      webpackChunknameFormat: '[a-zA-Z-_/.]+',
    },
  ],

  // Use this rule to prevent imports to folders in relative parent paths.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
  'import/no-relative-parent-imports': 'off',

  // Reports modules without any exports, or with unused exports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
  'import/no-unused-modules': 'off',
}
