const reactConfigs = require('./react')

describe('React configs', () => {
  test('The configs match the snapshot', () => {
    expect(reactConfigs).toMatchSnapshot()
  })
})
