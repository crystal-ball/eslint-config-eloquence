<div align="center">
  <img src="./docs/assets/eloquence.png" width="600" alt="Eloquence">
</div>
<br>
<hr>

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

<p align="center">
  <a href="https://github.com/crystal-ball/eslint-config-eloquence#zenhub">
    <img src="https://img.shields.io/badge/Shipping_faster_with-ZenHub-5e60ba.svg?style=flat-square" alt="Issues managed using ZenHub"/>
  </a>
</p>

Eloquence is a robust and adaptive ESLint configuration set for code linting
code quality, style and formatting.

- 🧐 Intelligently adjusts error severity for style and formatting rules for
  development workflows
- 🔋 Manages all ESLint dependencies for simple setup and version maintenance
- 😍 Fully integrated with linting for Prettier formatting
- 🌲 Includes Cypress tests specific ruleset
- 👮‍♀️ Supports linting TypeScript projects

The most important opinion of Eloquence is that linters shouldn't get in your
way while developing, so outside test environments all rules related to styling
are downgraded to warnings and all formatting rules are silenced. See
[Rules](#rules) for details.

## ⚙️ Setup

#### Install Dependencies

```sh
# All projects:
npm i eslint-config-eloquence prettier -D

# React projects using webpack
npm i eslint-import-resolver-webpack -D
```

_We recommend adding [Prettier][] as an exact version project dependency to
ensure all contributors are using the same version of Prettier, while still
allowing projects to update Prettier versions on their own schedule._

#### Configure ESLint

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: 'eloquence/react',
}
```

#### Pretty print output

The [`eslint-formatter-pretty`][] package is included in the dependencies and
can be used to output pretty formatted results. The pretty printed results
include hyperlinks to the rule docs and the files.

```
eslint --format=pretty file.js
```

![Pretty prints links](./docs/assets/pretty.png)

#### Project types

Eloquence supports Node.js services and React applications with two separate
configurations optimized for the project type. Use the project configuration for
the `.eslintrc.js` config in the root of your project:

- `eloquence/node` - for Node services and NPM packages
- `eloquence/react` - for React applications bundled with webpack

Additional configurations are available for linting files related to specific
tools:

- `eloquence/cypress` - for Cypress acceptance test files
- `eloquence/storybook` - for Storybook configuration files
- `eloquence/typescript` - for really strict projects

## 👩‍🏫 Rules

The Eloquence ruleset balances providing a rigorous, comprehensive ruleset with
providing only valuable linting messaging during non-test workflows. A
comprehensive ruleset helps people contribute to projects by programatically
answering questions about the code conventions expected by a project. However a
comprehensive ruleset can also inhibit creative problem solving by distracting
developers with non-critical messaging. To solve this issue Eloquence
intelligently adjusts the linter error level for rule types by environment:

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

TypeScript can be supported by extending the `eloquence/typescript` base, which
will change the parser and add the `@typescript-eslint` plugin along with rules
for linting TypeScript.

```js
// .eslintrc.js
module.exports = {
  root: true
  extends: ['eloquence/node', 'eloquence/typescript']
}
```

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

#### Required dependencies

_The TypeScript dependencies are not included in the package and must be
installed by the project._

- [`typescript`][]
- [`@typescript-eslint/parser`][]
- [`@typescript-eslint/eslint-plugin`][]

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
- [`eslint-plugin-import`][]
- [`eslint-plugin-jsx-a11y`][]
- [`eslint-plugin-prettier`][]
- [`eslint-plugin-react`][]
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
[`eslint-config-airbnb`]:https://github.com/airbnb/javascript
[`eslint-config-prettier`]:https://github.com/prettier/eslint-config-prettier
[`eslint-formatter-pretty`]:https://github.com/sindresorhus/eslint-formatter-pretty
[`eslint-import-resolver-webpack`]:https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack
[`eslint-plugin-cypress`]:https://github.com/cypress-io/eslint-plugin-cypress
[`eslint-plugin-import`]:https://github.com/benmosher/eslint-plugin-import
[`eslint-plugin-jsx-a11y`]:https://github.com/evcohen/eslint-plugin-jsx-a11y
[`eslint-plugin-prettier`]:https://github.com/prettier/eslint-plugin-prettier
[`eslint-plugin-react`]:https://github.com/yannickcr/eslint-plugin-react
[`eslint`]:https://eslint.org/
[`typescript`]:https://github.com/Microsoft/TypeScript
[airbnb]:https://github.com/airbnb/javascript
[prettier options]:https://prettier.io/docs/en/options.html
[prettier]:https://prettier.io/
<!-- prettier-ignore-end -->
