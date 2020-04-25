const nodeConfigs = require('./node')

describe('Node configs', () => {
  test('The configs match the snapshot', () => {
    expect(nodeConfigs).toMatchSnapshot()
  })
})
