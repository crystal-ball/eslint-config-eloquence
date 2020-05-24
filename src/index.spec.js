'use strict'

const eloquence = require('./index')

describe('Node configs', () => {
  test('The configs match the snapshot', () => {
    expect(eloquence({ target: 'node' })).toMatchSnapshot()
  })
})

describe('React configs', () => {
  test('The configs match the snapshot', () => {
    expect(eloquence({ target: 'react' })).toMatchSnapshot()
  })
})
