'use strict'

module.exports = {
  resolve() {
    // Provide consistent resolved paths in unit tests for snapshots
    return '/mock/test/path'
  },
}
