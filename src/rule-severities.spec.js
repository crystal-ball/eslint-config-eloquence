'use strict'

const ruleSeverities = require('./rule-severities')

describe('ruleSeverities()', () => {
  it('rules are not downgraded in test', () => {
    const rules = ruleSeverities('test', { 'no-unused-vars': 'error' })

    expect(rules['no-unused-vars']).toBe('error')
  })

  it('string value rules are downgraded', () => {
    const rules = ruleSeverities('development', { 'no-unused-vars': 'error' })

    expect(rules['no-unused-vars']).toBe('warn')
  })

  it('array value rules are downgraded', () => {
    const rules = ruleSeverities('development', {
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
    })

    expect(rules['no-unused-vars']).toStrictEqual([
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ])
  })

  it('disabled rules stay disabled', () => {
    const rules = ruleSeverities('development', { 'no-unused-vars': 'off' })

    expect(rules['no-unused-vars']).toBe('off')
  })
})
