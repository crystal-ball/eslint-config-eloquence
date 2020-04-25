const typescriptConfigs = require('./typescript')

describe('TypeScript configs', () => {
  test('The configs match the snapshot', () => {
    expect(typescriptConfigs).toMatchSnapshot()
  })
})
