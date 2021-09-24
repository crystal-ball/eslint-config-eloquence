'use strict'

/**
 * Plugin rules for linting imports
 *
 * 📝 https://github.com/benmosher/eslint-plugin-import
 *
 * ## Cookbook
 *
 * - Restrict importing a specific module by setting a `no-restricted-imports`
 *   value. This can be useful for things like preventing React Router's Link
 *   component from being used instead of an application Link component.
 * - Restrict where modules can be imported by setting an
 *   `import/no-restricted-paths` value. This can be useful for enforcing
 *   boundaries between modules, like separating Electron client code from main
 *   code, or for enforcing that an index file is used for a Design System
 *   directory
 */
module.exports = {
  // --------------------------------------------------------
  // Core rules

  // Disallow configured imports, off by default and can be configured
  // as needed by repo
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

  // --------------------------------------------------------
  // Static anlysis

  // Ensure all referenced modules can be resolved on the filesystem
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // Ensure that all named imports exist in the referenced module
  'import/named': 'error',

  // Ensure that default imports exist in the referenced module
  'import/default': 'error',

  // Ensure that all imports accessed on a namespace exist in the referenced module
  'import/namespace': 'error',

  // Restrict which files can be imported in a configured directory, off by default
  // and can be configured as needed by repo. Would be useful for projects with different
  // envs like Electron client and main.
  'import/no-restricted-paths': 'off',

  // Forbid import of modules using absolute paths
  'import/no-absolute-path': 'error',

  // Forbid require() calls with expressions
  'import/no-dynamic-require': 'error',

  // Prevent importing submodules of other modules, off by default and all access must be
  // whitelisted, making it unlikely this rule will be helpful.
  'import/no-internal-modules': 'off',

  // Forbid Webpack loader syntax in imports
  'import/no-webpack-loader-syntax': 'error',

  // Forbid a module from importing itself, this can sometimes happen in refactoring
  'import/no-self-import': 'error',

  // Prevent cyclical dependencies between modules
  'import/no-cycle': ['error', { maxDepth: Infinity }],

  // Prevent unnecessary `..` and `/` segments in import paths, `noUselessIndex` config
  // makes ending paths in `index.js` error as useless. Prefer automatic index resolution.
  'import/no-useless-path-segments': ['error', { noUselessIndex: true }],

  // Prevents imports to folders in relative parent paths, disabled as it's a common
  // pattern to import a root level file like `routing.js` or `errors.js`
  'import/no-relative-parent-imports': 'off',

  // --------------------------------------------------------
  // Helpful warnings

  // Helps prevent invalid exports, e.g. multiple default exports
  'import/export': 'error',

  // Warns when a default import has the same name as a named export as it's likely
  // a typo
  'import/no-named-as-default': 'error',

  // Warn when accessing a *property* on a default export that matches a named export
  // from the referenced module, this is usually a misunderstanding of the difference
  // between named exports and object destructuring.
  'import/no-named-as-default-member': 'error',

  // Prevents imports marked as deprecated with JSDoc
  'import/no-deprecated': 'error',

  // Require that any imported module in production code is installed by
  // requiring the module is listed in `dependencies`.
  // ⚙️ Configured explicitly in /src override
  'import/no-extraneous-dependencies': 'off',

  // Forbid mutable exports, they can easily lead to difficult to maintain code.
  'import/no-mutable-exports': 'error',

  // Reports modules without any exports and modules with unused exports. In
  // theory a great way to identify dead code, but in practice just too finnicky
  'import/no-unused-modules': 'off',

  // --------------------------------------------------------
  // Module systems

  // Warn if a module could be mistakenly parsed as a script by a consumer
  // leveraging Unambiguous JavaScript Grammar, disabled because application environments
  // are always webpack bundled or Node.js and disambiguity is not needed/could be buggy
  'import/unambiguous': 'off',

  // Prevent using CommonJS modules
  'import/no-commonjs': 'off',

  // Prevent using AMD modules
  'import/no-amd': 'error',

  // Prevent using Node.js builtin modules
  'import/no-nodejs-modules': 'off',

  // TODO: use the `esm` config to opt in to stricter module system linting

  // --------------------------------------------------------
  // Style guide

  // Require import statements are declared first in a file
  'import/first': 'error',

  // Require that all exports are declared last in a file, disabled b/c  it's
  // convenient to declare them inline
  'import/exports-last': 'off',

  // Disallow duplicate imports
  'import/no-duplicates': 'error',

  // Disallows namespace imports, disabled b/c they are fine, especially for
  // importing from a directory index file of helper/api/etc. funcs. webpack
  // also successfully tree-shakes namespace imports
  'import/no-namespace': 'off',

  // Ensure consistent use of file extension within the import path
  'import/extensions': ['error', 'never'],

  // Require that Node built-ins and node_module imports are grouped before
  // application imports.
  'import/order': [
    'error',
    {
      'groups': [
        'builtin',
        'external', // includes configured `import/external-module-folders`
        'internal', // includes configured `import/internal-regex`
        'parent',
        'sibling',
        'index',
        'unknown',
      ],
      // Currently not enforced... validate that alphabetize doesn't require mixing
      // within larger groups, eg node built-in and a node_module
      'alphabetize': {
        order: 'ignore',
      },
      // Require a newline between builtins+external and source code modules.
      // Allow but don't require a newline inside groups
      'newlines-between': 'ignore',
    },
  ],

  // Require a newline after the last import/require in a group
  'import/newline-after-import': 'error',

  // Requires using a default export if a module only has one export, disabled
  // b/c named exports are a good practice for ensuring consistency across the
  // codebase
  'import/prefer-default-export': 'off',

  // Forbid modules to have too many dependencies, doesn't seem value added to try and
  // configure a useful number.
  'import/max-dependencies': 'off',

  // Allow unassigned imports, it's surprisingly irritating to have to allow
  // each occurence
  'import/no-unassigned-import': 'off',

  // Prevent importing the default as if it were named
  'import/no-named-default': 'error',

  // Allow default and named exports
  'import/no-default-export': 'off',
  'import/no-named-export': 'off',

  // Reports if a module's default export is unnamed, only enforced for fns and classes
  // to encourage better debug-ability
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

  // Reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present
  // in a single file.
  'import/group-exports': 'off',

  // dynamic imports require a leading comment with a webpackChunkName
  'import/dynamic-import-chunkname': [
    'error',
    {
      importFunctions: [],
      webpackChunknameFormat: '[a-zA-Z-_/.]+',
    },
  ],
}
