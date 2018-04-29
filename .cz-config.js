'use strict'

module.exports = {
  types: [
    { value: 'feat', name: '🎉 feat:       A new feature' },
    { value: 'fix', name: '👍 fix:        A bug fix' },
    {
      value: 'refactor',
      name:
        '🔩 refactor:   A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: '🏎  perf:       A code change that improves performance',
    },
    {
      value: 'test',
      name: '✅ test:       Updating tests or adding missing tests',
    },
    {
      value: 'chore',
      name:
        '⬆️  chore:      Changes to the build process or development tools and libraries',
    },
    { value: 'docs', name: '📝 docs:       Documentation only changes' },
    { value: 'revert', name: '↩️  revert:     Revert to a commit' },
    { value: 'WIP', name: '🚧 wip:        Work in progress' },
  ],

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix', 'style', 'refactor', 'perf', 'chore'],
  scopes: [],
}
