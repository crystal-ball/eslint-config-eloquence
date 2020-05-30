# Package notes

- Currently the `react` and `node` target assumes you're creating a React
  application/Node.js service so packages like Componentry have to add `process`
  to globals, etc. It would be convenient to somehow indicate that a package is
  being configured and handle this internally.

## ESModule subtleties:

1. ESLint itself does not support an ESM configuration, the `.cjs` extension
   must be used to provide a CommonJS configuration.
1. Extensions are required for _Node projects_ WITH _ESM enabled_, otherwise
   they are forbidden.
1. Unused modules can only be linted for in src/ in ESM projects, the rule
   doesn't work for CommonJS, and config files are false positives.
