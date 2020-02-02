'use strict'

/**
 * ESLint core 'Node.js and CommonJS' rules are specific to code running in
 * Node.js
 */
module.exports = {
  // Enforce return after a callback
  'callback-return': 'off',

  // Allow global require (sometimes required to prevent circular dependencies)
  'global-require': 'off',

  // Enforces error handling in callbacks (node environment)
  'handle-callback-err': 'off',

  // Disallow use of the Buffer() constructor
  'no-buffer-constructor': 'error',

  // Disallow mixing regular variable and require declarations
  'no-mixed-requires': ['off', false],

  // Disallow use of new operator with the require function
  'no-new-require': 'error',

  // Disallow string concatenation with __dirname and __filename
  'no-path-concat': 'error',

  // Disallow use of process.env
  'no-process-env': 'off',

  // Disallow process.exit()
  'no-process-exit': 'off',

  // Restrict usage of specified node modules
  'no-restricted-modules': 'off',

  // Disallow use of synchronous methods (off by default)
  'no-sync': 'off',

  // Require setting 'use strict' pragma in common JS node modules
  strict: ['error', 'safe'],
}
