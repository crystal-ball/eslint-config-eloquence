/**                                                             Eloquence ESLint
 * -----------------------------------------------------------------------------
 *
 * ℹ️ Package notes
 *
 * ESModules: Package defaults to using ESM for ESLint `sourceType`
 * configuration, with overrides for Node executed tooling like Jest. Node ESM
 * using cjs and mjs file extensions not yet handled.
 *
 * @module
 */

'use strict'

const mdxOverrides = require('./mdx')
const nodeBase = require('./node')
const reactBase = require('./react')

module.exports = { mdxOverrides, nodeBase, reactBase }

/**
 * # V20

All in on an ESM && TS future.

## Breaking

- typescript must be installed in all projects
- Node projects are using the default parser outside of /src
- Node projects are using the TS parser inside /src

## All projects and TS

All projects are assumed to use TS. TS can be used even in JS projects using JSDoc docblocks. TS rules are scoped to the `src` directory and assume a `.tsconfig` file including that directory. TS rules are not included elsewhere at this time b/c of inconsistency in using TS for tooling and scripts.

## Node projects

Assumption is ESModules with a tsconfig for type checking (useful even if files are still JavaScript w/ JSDoc).
This "future-proofs" the default setup for when ESModule is supported by all tooling.

### Transition time

1. ESM projects may have tooling that still requires CommonJS (eg ESLint and Jest). These files should have .cjs extensions and will be linted with CommonJS appropriate rules.
2. CommonJS projects should include a type of `"commonjs"` in their package.json and will be linted with CommonJS appropriate rules.
 */
