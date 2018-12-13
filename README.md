<div align="center">
  <img src="./assets/eloquence.png" width="600" alt="Eloquence">
</div>

<hr>

<div align="center">
  <p><em>Adaptive ESLint configs that stay out of your way.</em></p>
  <br>
</div>

<div align="center">
  <img
    width="300"
    src="./assets/logos.png"
    alt="Extends Airbnb code quality rules with Prettier.js formatting"
  >
</div>

<br>

<hr>

<p align="center">
  <a href="https://www.npmjs.com/package/eslint-config-eloquence">
    <img src="https://img.shields.io/npm/v/eslint-config-eloquence.svg" alt="current version">
  </a>
  <a href="https://travis-ci.com/crystal-ball/eslint-config-eloquence" alt="build status">
    <img src="https://travis-ci.com/crystal-ball/eslint-config-eloquence.svg?branch=master">
  </a>
  <a href="https://greenkeeper.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://badges.greenkeeper.io/crystal-ball/eslint-config-eloquence.svg" alt="Uses greenkeeper">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Prettier">
  </a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="managed by semantic release">
  </a>
</p>

Eloquence is a robust and adaptive ESLint ruleset for code quality, style and
formatting.

- 🧐 Intelligently adjusts error levels for style and formatting rules in dev
  envs
- ✅ Extends Airbnb and Prettier for a comprehensive, battle tested ruleset
- 🔋 Manages dependencies for simplified setup and use of ESLint
- 🌲 Includes plugin for Cypress
- 🎉 Encourages ESModules everywhere

The most important opinion of Eloquence is that we believe linters shouldn't get
in your way while developing, so in non-test environments all rules related to
styling are downgraded to warnings and all formatting rules are silenced. See
[Rules](#rules) for details.

## ⚙️ Setup

#### Install Dependencies

```sh
npm i eslint-config-eloquence prettier@1.13.5 -D
```

_We recommend adding [Prettier][] as an exact version project dependency to
ensure all contributors are using the same version of Prettier, while still
allowing projects to update Prettier versions on their own schedule._

#### Configure ESLint

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: 'eloquence'

  /* ...any project overrides of default configurations */
}
```

#### Configure Prettier

Creating a `.prettierrc` is optional. If you don't include one Prettier will use
its default configurations when formatting. See [Prettier options][] for
available format options.

#### Project types

For webpack projects an environment variable can be specified to configure the
[import plugin][`eslint-plugin-import`] to use the project's `webpack.config.js`
to resolve files.

```javascript
process.env.ELOQUENCE_PROJECT_TYPE = 'webpack'

// .eslintrc.js
module.exports = {
  root: true,
  extends: 'eloquence'
}
```

_⚠️ webpack projects require the `eslint-import-resolver-webpack` package which
is NOT included in the dependencies of this project!_

## 👩‍🏫 Rules

The Eloquence ruleset balances providing a rigorous, comprehensive ruleset with
providing only valuable linting messaging during non-test workflows. A
comprehensive ruleset helps people contribute to projects by programatically
answering questions about the code conventions expected by a project. However a
comprehensive ruleset can also inhibit creative problem solving by distracting
developers with non-critical messaging. To solve this issue Eloquence
intelligently adjusts the linter error level for rule types by environment:

#### Error levels

| Env  | Quality | Style   | Formatting |
| ---- | ------- | ------- | ---------- |
| Test | `error` | `error` | `error`    |
| Dev  | `error` | `warn`  | `off`      |

So you always see feedback related to code quality, but during development non
critical feedback related to code style and formatting is moderated.

#### Rule composition

1.  The [Airbnb][] ruleset provides a rigorous, battle tested, community
    endorsed foundational ruleset for code quality and style.
2.  The [Prettier][] ruleset provides formatting requirements.
3.  Eloquence uses `NODE_ENV` to adjust the error level of all style and
    formatting rules based on environment.

#### Eloquence rules

Eloquence updates a few of the rules set by the Airbnb base in the spirit of
only providing value added requirements.

| Rule                           | Config | Motivation                                                                                                      |
| ------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------- |
| `react/jsx-filename-extension` | `off`  | Using a different file extension for files with JSX typically complicates project tooling without adding value. |
| `react/sort-comp`              | `off`  | Current bug: https://github.com/yannickcr/eslint-plugin-react/pull/685                                          |
| `jsx-a11y/anchor-is-valid`     | `off`  | Current bug: https://github.com/airbnb/javascript/pull/1648                                                     |

## 🔋 Batteries included

This package will automatically include all of the packages needed to run
ESLint. Projects should allow this package to "own" the dependency management
for packages related to ESLint. _(When possible ensure that the only version of
`eslint` and `babel-eslint` included in a project are the versions specified by
this package.)_

#### Included dependencies:

- [`eslint`][]
- [`babel-eslint`][]
- [`eslint-config-airbnb`][]
- [`eslint-config-prettier`][]
- [`eslint-plugin-cypress`][]
- [`eslint-plugin-flowtype`][]
- [`eslint-plugin-import`][]
- [`eslint-plugin-jsx-a11y`][]
- [`eslint-plugin-prettier`][]
- [`eslint-plugin-react`][]

## 😍 Contributing

This is an open source project that welcomes and appreciates contributions from
everyone 🎉. <br /> Please read the [Code of Conduct](./CODE_OF_CONDUCT.md) and
[Contributing](./.github/CONTRIBUTING.md) guides to get started.

<!-- Links -->

[airbnb]: https://github.com/airbnb/javascript
[`eslint`]: https://eslint.org/
[`babel-eslint`]: https://github.com/babel/babel-eslint
[`eslint-config-airbnb`]: https://github.com/airbnb/javascript
[`eslint-config-prettier`]: https://github.com/prettier/eslint-config-prettier
[`eslint-plugin-cypress`]: https://github.com/cypress-io/eslint-plugin-cypress
[`eslint-plugin-flowtype`]: https://github.com/gajus/eslint-plugin-flowtype
[`eslint-plugin-import`]: https://github.com/benmosher/eslint-plugin-import
[`eslint-plugin-jsx-a11y`]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[`eslint-plugin-prettier`]: https://github.com/prettier/eslint-plugin-prettier
[`eslint-plugin-react`]: https://github.com/yannickcr/eslint-plugin-react
[prettier]: https://prettier.io/
[prettier options]: https://prettier.io/docs/en/options.html
