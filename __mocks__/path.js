module.exports = {
  resolve(...args) {
    // Provide consistent resolved paths in unit tests for snapshots
    return '/mock/test/path'
  },
}
