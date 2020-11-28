<h1 align="center">
  <img src="./docs/assets/eloquence.png" width="600" alt="Eloquence">
</h1>
<br>

<div align="right">
  <!-- prettier-ignore-start -->
  <a href="https://www.npmjs.com/package/eslint-config-eloquence">
    <img src="https://img.shields.io/npm/v/eslint-config-eloquence" alt="Package version" valign="text-top"/>
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-eloquence">
    <img src="https://img.shields.io/npm/dt/eslint-config-eloquence?color=blue" alt="NPM downloads" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/eslint-config-eloquence/actions?workflow=CI%2FCD">
    <img src="https://github.com/crystal-ball/eslint-config-eloquence/workflows/CI%2FCD/badge.svg" alt="Build status" valign="text-top" />
  </a>
  <a href="https://snyk.io/test/github/crystal-ball/eslint-config-eloquence?targetFile=package.json">
    <img src="https://snyk.io/test/github/crystal-ball/eslint-config-eloquence/badge.svg?targetFile=package.json" alt="Known vulnerabilities" valign="text-top" />
  </a>
  <code>:status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>

  <br />
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="Renovate" valign="text-top" />
  </a>
  <a href="https://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/Commitizen-%E2%9C%93%20friendly-10e67b" alt="Commitizen friendly" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/eslint-config-eloquence#workspaces/-projects-5b88b5c9af3c0a2186966767/board?repos=90155935">
    <img src="https://img.shields.io/badge/ZenHub-managed-5e60ba.svg" alt="ZenHub" valign="text-top" />
  </a>
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img src="https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic_release-e10079.svg" alt="Semantic Release" valign="text-top"/>
  </a>
  <a href="./CODE_OF_CONDUCT.md">
    <img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0-de8cf2.svg" alt="Contributor Covenant" valign="text-top" />
  </a>
  <code>:integrations</code>

  <br />
  <a href="https://github.com/crystal-ball">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/crystal-ball.github.io">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" valign="text-top" />
  </a>
  <code>:flair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
  <!-- prettier-ignore-end -->
</div>

---

Eloquence is a robust and adaptive ESLint configuration set for code linting
code quality, style and formatting.

- 🔋 Manages all ESLint dependencies for simple setup and version maintenance
- 🧐 Intelligently adjusts error severity for style and formatting rules for
  development workflows
- 😲 Smartly overrides configurations for Storybook, Cypress, webpack, MDX and
  Jest files.
- ✅ React Testing Library and Jest DOM rules
- 😍 Fully integrated with linting for Prettier formatting
- 🌲 Includes Cypress tests specific ruleset
- 👮‍♀️ Supports linting TypeScript projects
- 📝 Supports linting MDX files

The most important opinion of Eloquence is that linters shouldn't get in your
way while developing, so outside test environments all rules related to styling
are downgraded to warnings and all formatting rules are silenced. See
[Rules](#rules) for details.

## ⚙️ Setup

#### Install Dependencies

```sh
npm i eslint-config-eloquence prettier -D
```

_Eloquence recommends adding [Prettier][] as an exact version project dependency
to ensure all contributors are using the same version of Prettier, while still
allowing projects to update Prettier versions on their own schedule._

#### Configure ESLint

The minimum configuration is the `target` option:

```javascript
// .eslintrc.js
'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = eloquence({ target: 'react|node' })
```

- Pass `'node'` - for Node services and NPM packages
- Pass `'react'` - for React applications bundled with webpack

#### Option `enableESM`

The `enableESM` option can be used to explicitly declare whether a project is
using ESModules or CommonJS. The default value is `true`.

#### Option `ignorePatterns`

Files and directories can be ignored by passing an array of string patterns. The
default value of `['!.*', 'public/*', 'dist/*']` will ignore two common build
output directories (public and dist), and will force linting in dotfiles and
directories beginning with dots (which are ignored by default by ESLint).

_Note that code coverage output already has ignore configurations and shouldn't
need addtiional configs._

#### Option `rules`

Final rule values can be overridden in a project by passing a `rules` option
with the override values. _(Values are used as is, it isn't possible to pass
only a severity override at this time.)_

#### Option reportUnusedDisableDirectives

Any unnecessary `eslint-disable` directive will cause a warning _(This helps
with maintenance of linting overrides)_. This default behavior can be overridden
with the `reportUnusedDisableDirectives` prop:

```javascript
'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = eloquence({
  target: 'react',
  reportUnusedDisableDirectives: false,
})
```

#### Pretty print output

The [`eslint-formatter-pretty`][] package is included in the dependencies and
can be used to output pretty formatted results. The pretty printed results
include hyperlinks to the rule docs and the files.

```sh
NODE_ENV=test npx eslint --format=pretty .
```

![Pretty prints links](./docs/assets/pretty.png)

### Recommended linting command

The recommended `package.json` command for linting runs on the entire directory,
and uses the configuration `ignorePatterns` to ignore files or directories. By
default `node_modules` and all dotfiles other than `.eslintrc.js` are ignored.
The below config and command will lint all `.js`, `.ts`, and `.tsx` files in the
repo, including dotfiles and directories starting with a dot, except for the
public directory.

```json
{
  "test:lint": "NODE_ENV=test eslint --format=pretty ."
}
```

```javascript
'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = eloquence({
  target: 'react',
})
```

## ⚙️ Imports customizations

Repositories can configure custom rules to enforce some common requirements:

- Restrict importing a specific module by setting a `no-restricted-imports`
  value. This can be useful for things like preventing React Router's Link
  component from being used instead of an application Link component.
- Restrict where certain modules can be imported by setting an
  `import/no-restricted-paths` value. This can be useful for enforcing
  boundaries between modules, like separating Electron client code from main
  code, or for enforcing that an index file is used for a component library
  directory

## 👩‍🏫 Rules

The Eloquence ruleset balances providing a rigorous, comprehensive ruleset with
providing only valuable linting messaging during non-test workflows. A
comprehensive ruleset helps people contribute to projects by programatically
answering questions about the code conventions expected by a project. However a
comprehensive ruleset can also be really noisy and problematically irritating.
To solve this issue Eloquence intelligently adjusts the linter error level for
rule types by environment:

#### Error levels

| Env  | Quality rules | Style rules | Formatting rules |
| ---- | ------------- | ----------- | ---------------- |
| Test | `error`       | `error`     | `error`          |
| Dev  | `error`       | `warn`      | `off`            |

This means linting related to code quality is always surfaced as a priority, but
during development non critical feedback related to code style and formatting is
moderated.

#### Linting philosphy

In general, the Eloquence ruleset tries to encourage these coding practices:

- Readable, explicit code is always preferred over clever code.
- Premature abstraction leads to more issues than duplicated code.
- Whenever possible try to write simple code that can be read through without
  puzzle solving.

## 👮‍♀️ TypeScript

TypeScript rules are supported out of the box for React and Node configurations
using an `override`. Projects using TS must provide a `tsconfig` in the project
root.

Eloquence supports TS as a supertype for adding types only and forbids using TS
enums.

#### VSCode

By default the ESLint extension for VSCode is only configured to lint JS
language files and you need to add the TypeScript and TypeScript+React languages
if you haven't.

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## 📝 MDX

You can opt in to linting MDX files with the `eslint-plugin-mdx` package:

```sh
npm i eslint-plugin-mdx -DE
```

```javascript
'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = eloquence({
  target: 'react',
  enableMDX: true,
})
```

## File overrides

Eloquence overrides the base project rules and settings for specific file
patterns to eliminate the need for ESLint configuration comments:

| Files                 | Updates                        |
| --------------------- | ------------------------------ |
| `[src/**/*]`          | Rules specific to source code  |
| `['*.ts', '*.tsx']`   | TypeScript rules enabled       |
| `['*.mdx']`           | MDX linting                    |
| `['*.spec.js']`       | Adds Jest globals              |
| `['cypress/**/*']`    | Adds Cypress globals and rules |
| `['.storybook/**/*']` | Support ESmodules              |

Finally, configuration files for Storybook, Cypress, Babel, Jest, and webpack
are all set to CommonJS modules with Node globals for configuring tooling
executed by Node.js.

## 🔋 Batteries included

This package will automatically include all of the packages needed to run
ESLint. Projects should allow this package to "own" the dependency management
for packages related to ESLint. _(When possible ensure that the only version of
`eslint` and `babel-eslint` included in a project are the versions specified by
this package.)_

#### Included dependencies:

- [`eslint`][]
- [`babel-eslint`][]
- [`eslint-config-prettier`][]
- [`eslint-plugin-cypress`][]
- [`eslint-plugin-import`][]
- [`eslint-plugin-jest-dom`][]
- [`eslint-plugin-jsx-a11y`][]
- [`eslint-plugin-prettier`][]
- [`eslint-plugin-react`][]
- [`eslint-plugin-react-hooks`][]
- [`eslint-plugin-testing-library`][]
- [`eslint-formatter-pretty`][]

## 😍 Contributing

This is an open source project that welcomes and appreciates contributions from
everyone 🎉. <br /> Please read the [Code of Conduct](./CODE_OF_CONDUCT.md) and
[Contributing](./.github/CONTRIBUTING.md) guides to get started.

## Thank You!

- The base ESLint rules for this project began with the Airbnb ESLint
  configuration and have evolved to the current rule definitions.

<!-- Links -->

<!-- prettier-ignore-start -->
[`@typescript-eslint/eslint-plugin`]:https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
[`@typescript-eslint/parser`]:https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
[`babel-eslint`]:https://github.com/babel/babel-eslint
[`eslint-config-prettier`]:https://github.com/prettier/eslint-config-prettier
[`eslint-formatter-pretty`]:https://github.com/sindresorhus/eslint-formatter-pretty
[`eslint-import-resolver-webpack`]:https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack
[`eslint-plugin-cypress`]:https://github.com/cypress-io/eslint-plugin-cypress
[`eslint-plugin-import`]:https://github.com/benmosher/eslint-plugin-import
[`eslint-plugin-jest-dom`]:https://github.com/testing-library/eslint-plugin-jest-dom
[`eslint-plugin-jsx-a11y`]:https://github.com/evcohen/eslint-plugin-jsx-a11y
[`eslint-plugin-prettier`]:https://github.com/prettier/eslint-plugin-prettier
[`eslint-plugin-react`]:https://github.com/yannickcr/eslint-plugin-react
[`eslint-plugin-react-hooks`]:https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
[`eslint-plugin-testing-library`]:https://github.com/testing-library/eslint-plugin-testing-library
[`eslint`]:https://eslint.org/
[`typescript`]:https://github.com/Microsoft/TypeScript
[prettier options]:https://prettier.io/docs/en/options.html
[prettier]:https://prettier.io/
<!-- prettier-ignore-end -->
