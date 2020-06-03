'use strict'

module.exports = {
  'testing-library/await-async-query': 'error',
  'testing-library/await-async-utils': 'error',
  'testing-library/await-fire-event': 'error',
  'testing-library/no-await-sync-query': 'error',
  'testing-library/no-debug': 'error',
  'testing-library/no-dom-import': ['error', 'react'],
  'testing-library/no-manual-cleanup': 'error',
  'testing-library/no-wait-for-empty-callback': 'error',
  'testing-library/prefer-explicit-assert': 'error',

  // Prefer using `findBy*` instead of `waitFor`+`getBy`
  'testing-library/prefer-find-by': 'error',

  'testing-library/prefer-presence-queries': 'error',
  'testing-library/prefer-screen-queries': 'error',
  'testing-library/prefer-wait-for': 'error',
}
