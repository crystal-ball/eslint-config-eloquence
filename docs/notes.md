# Package notes

- Currently the `react` and `node` target assumes you're creating a React
  application/Node.js service so packages like Componentry have to add `process`
  to globals, etc. It would be convenient to somehow indicate that a package is
  being configured and handle this internally.
