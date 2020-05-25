'use strict'

/**
 * Node.js rules from `eslint-plugin-node`
 * https://github.com/mysticatea/eslint-plugin-node
 */
module.exports = {
  // --------------------------------------------------------
  // Possible errors

  // When working with callbacks require errors are handled
  'node/handle-callback-err': 'error',

  // When working with callbacks, always pass null, undefined, or Error as the
  // first arg to callback
  'node/no-callback-literal': 'error',

  // Disallow exports = {}, use module.exports = {}
  'node/no-exports-assign': 'error',

  // Don't use deprecated apis ¯\_(ツ)_/¯
  'node/no-deprecated-api': 'error',

  // Disallow use of new operator with the require function, treat require calls
  // like ESM imports for easier migrations
  'node/no-new-require': 'error',

  // Disallow string concatenation with __dirname and __filename, path.join or
  // path.resolve should be used instead to ensure the correct OS separators
  // are used
  'node/no-path-concat': 'error',

  // Disallow process.exit(), ansyc stdout operations or logging may be terminated
  // it's better to call process.exitCode() and use an exception to allow Node
  // to terminate the process.
  'node/no-process-exit': 'error',

  // Any bin file must be published
  'node/no-unpublished-bin': 'error',

  // Don't use unsupported features
  'node/no-unsupported-features/es-builtins': 'error',
  'node/no-unsupported-features/node-builtins': 'error',

  // There are enough projects with Node+Cypress or browser imports that this
  // rule is more irritating than helpful
  'node/no-unsupported-features/es-syntax': 'off',

  // Updates ESLint to treat process.exit similar to throwing an error
  'node/process-exit-as-throw': 'error',

  // Require correct shebang for node shell scripts
  'node/shebang': 'error',

  // --------------------------------------------------------
  // --- Imports

  // Modules must be declared in package.json
  'node/no-extraneous-import': 'error',
  'node/no-extraneous-require': 'error',

  // Referenced modules must exist
  'node/no-missing-import': 'error',
  'node/no-missing-require': 'error',

  // Use import plugin to restrict module usage
  'node/no-restricted-import': 'off',
  'node/no-restricted-require': 'off',

  // Any referenced module must be published
  'node/no-unpublished-import': 'error',
  'node/no-unpublished-require': 'error',

  // --------------------------------------------------------
  // --- Stylistic

  // Enforce using return with callbacks to prevent accidentally calling them
  // more than once, by
  'node/callback-return': ['error', ['callback', 'cb', 'next']],

  // Enforce consistent usage of `module.exports` vs `exports`
  'node/exports-style': ['error', 'module.exports'],

  // Extensions are typically ommitted, but should be required in experimental
  // modules context
  'node/file-extension-in-import': 'off',

  // Enforce require calls occur at module top level-scope, ensures similar
  // behavior to ESM and discourages often confusing workarounds to circular
  // dependencies
  'node/global-require': 'error',

  // Enforce require calls be grouped separately from variable declarations
  'node/no-mixed-requires': ['error', { grouping: true, allowCall: false }],

  // Prefer accessing environment variables in a single location that manages
  // service configs
  'node/no-process-env': 'error',

  // Prefer async methods whenever possible
  'node/no-sync': 'error',

  // Prefer using globals instead of requiring
  'node/prefer-global/buffer': ['error', 'always'],
  'node/prefer-global/console': ['error', 'always'],
  'node/prefer-global/process': ['error', 'always'],
  'node/prefer-global/text-decoder': ['error', 'always'],
  'node/prefer-global/text-encoder': ['error', 'always'],
  'node/prefer-global/url-search-params': ['error', 'always'],
  'node/prefer-global/url': ['error', 'always'],

  // Prefer promises over callbacks
  'node/prefer-promises/dns': 'error',
  'node/prefer-promises/fs': 'error',
}
