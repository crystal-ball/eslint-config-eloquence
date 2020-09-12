'use strict'

/**
 * Plugin rules for React hooks
 *
 * 📝 https://reactjs.org/docs/hooks-rules.html
 */
module.exports = {
  // Enforce that references used in hooks are included in hook dependency arrays
  'react-hooks/exhaustive-deps': 'error',

  // Enforce that hooks are only called inside components or other hooks, and
  // that they are called in the same order every render
  'react-hooks/rules-of-hooks': 'error',
}
