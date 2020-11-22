'use strict'

const ruleSeverities = require('./rule-severities')

describe('ruleSeverities', () => {
  test('Rules are not downgraded in test', () => {
    const rules = ruleSeverities('test', { 'no-unused-vars': 'error' })
    expect(rules['no-unused-vars']).toEqual('error')
  })

  test('String value rules are downgraded', () => {
    const rules = ruleSeverities('development', { 'no-unused-vars': 'error' })
    expect(rules['no-unused-vars']).toEqual('warn')
  })

  test('Array value rules are downgraded', () => {
    const rules = ruleSeverities('development', {
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
    })
    expect(rules['no-unused-vars']).toEqual([
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ])
  })

  test('Disabled rules stay disabled', () => {
    const rules = ruleSeverities('development', { 'no-unused-vars': 'off' })
    expect(rules['no-unused-vars']).toEqual('off')
  })
})
