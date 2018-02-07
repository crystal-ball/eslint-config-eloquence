<h1 align="center">Crystal Ball ESLint Configs</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@crystal-ball/eslint-config-eloquence">
    <img src="https://img.shields.io/npm/v/@crystal-ball/eslint-config-eloquence.svg?style=flat-square" alt="current version">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Prettier">
  </a>
  <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen">
  </a>
</p>

<div align="center">
  <img
    width="350"
    src="https://cdn.rawgit.com/crystal-ball/eslint-config-eloquence/master/assets/logos.png"
    alt="Extends Airbnb code quality rules with Prettier.js formatting"
  >
</div>

## Installing:

Add the package and Prettier as dev dependencies to your project:

```sh
npm i eslint-config-healthsparq prettier -D
```

_We recommend adding `prettier` as a project dependency to help ensure that all
editors use the locally installed Prettier for formatting. Some editors will use
a global or bundled version (which may have formatting differences) if there
isn't a `prettier` in the project's `package.json`._

### Flow

Static typing using flow is supported through the `eslint-plugin-flowtype`
package.

## Usage

Extending this package's config will set the default:

* `parserOptions`
* `parser`
* `env`
* `plugins`
* `rules`

There are seperate configs for Node projects and web projects to handle enabling
features like JSX, webpack resolving, `.mjs` file extensions, etc. The configs
are `node` and `web`.

#### Webpack Project

```javascript
// .eslintrc.js
module.exports = { extends: '@crystal-ball/eloquence/web' }
```

#### Node Project

```javascript
// .eslintrc.js
module.exports = { extends: '@crystal-ball/eloquence/node' }
```

## Dependencies

All dependencies required for running ESLint will be installed as dependencies
of this package. This ensures that there are no conflicting versions of ESLint
in a consuming project's dependencies. Installed dependencies include:

* eslint
* babel-eslint
* eslint-config-airbnb
* eslint-config-prettier
* eslint-plugin-flowtype
* eslint-plugin-import
* eslint-plugin-jsx-a11y
* eslint-plugin-prettier
* eslint-plugin-react

## 😍 Contributing

This is an open source project that welcomes and appreciates contributions from
everyone 🎉. <br /> Please read the [Code of Conduct](./CODE_OF_CONDUCT.md) and
[Contributing](./.github/CONTRIBUTING.md) guides to get started.
