'use strict'

jest.mock('path')

const eloquence = require('./index')

describe('Configs', () => {
  it('When ignorePatterns is passed, then the returned configs include them', () => {
    const configs = eloquence({ target: 'node', ignorePatterns: ['coverage'] })

    expect(configs.ignorePatterns).toStrictEqual(['coverage'])
  })

  it('When rules is passed, then they have precedence', () => {
    const configs = eloquence({
      target: 'node',
      rules: {
        'no-var': 'off',
      },
    })

    expect(configs.rules['no-var']).toBe('off')
  })
})

describe('Node configs', () => {
  it('The configs match the snapshot', () => {
    expect(eloquence({ target: 'node' })).toMatchSnapshot()
  })
})

describe('React configs', () => {
  it('The configs match the snapshot', () => {
    expect(eloquence({ target: 'react' })).toMatchSnapshot()
  })
})
