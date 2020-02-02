'use strict'

// https://reactjs.org/docs/hooks-rules.html
module.exports = {
  // Enforce that hooks are only called inside components or other hooks, and
  // that they are called in the same order every render
  'react-hooks/rules-of-hooks': 'error',

  // Enforce that deps used in effects are included in change deps
  // https://github.com/facebook/react/issues/14920
  'react-hooks/exhaustive-deps': 'warn',
}
