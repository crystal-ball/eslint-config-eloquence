'use strict'

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
}
