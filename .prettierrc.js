'use strict'

module.exports = {
  arrowParens: 'always',
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 90,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  // --- Language overrides
  overrides: [
    // Keep markdown files very compact for readability
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
    // Allow really long lines in:
    // - HTML because it's only used for index files and looks nice with
    //   consistent single line tags
    // - YAML files because it's often easier to read shell commands when
    //   they're not broken into multiple lines awkwardly
    {
      files: ['*.html', '*.yml', '*.yaml'],
      options: {
        printWidth: 140,
      },
    },
  ],
}
