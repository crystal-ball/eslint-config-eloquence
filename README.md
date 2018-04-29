<h1 align="center">Crystal Ball ESLint Configs</h1>

<p align="center">
  <a href="https://travis-ci.org/crystal-ball/eslint-config-eloquence" alt="build status">
    <img src="https://travis-ci.org/crystal-ball/eslint-config-eloquence.svg?branch=master">
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/crystal-ball/eslint-config-eloquence.svg" alt="Uses greenkeeper">
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-eloquence">
    <img src="https://img.shields.io/npm/v/eslint-config-eloquence.svg?style=flat-square" alt="current version">
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

Project linting for code quality, style and formatting.

* ✅ Extends Airbnb and Prettier
* 🌬 Provides support for Flow
* 🎉 Encourages ESModules everywhere
* 🧐 Smart error vs warn rule levels per env

## Setup

#### Install Dependencies

```sh
npm i eslint-config-eloquence prettier -D
```

_We recommend adding `prettier` as a project dependency to help ensure that all
editors use the locally installed Prettier for formatting. Some editors will use
a global or bundled version (which may have formatting differences) if there
isn't a `prettier` in the project's `package.json`._

#### Configure ESLint

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: 'eloquence',

  /* ...any project overrides of default configurations */
}
```

#### Project types

For webpack projects the project type can be specified to configure the import
plugin to use the project `webpack.config.js` to resolve files matching webpack.

```javascript
process.env.ELOQUENCE_PROJECT_TYPE = 'webpack'

// .eslintrc.js
module.exports = {
  root: true,
  extends: 'eloquence',

  /* ...any project overrides of default configurations */
}
```

_⚠️ webpack projects require the `eslint-import-resolver-webpack` package which
is NOT included in the dependencies of this project!_

## Batteries included

This package includes all of the modules needed to run ESLint as dependencies.
This makes installation easy (this package coordinates all dependency versions),
and allows projects to use this package as the "owner" of ESLint. When possible
ensure that the only version of `eslint` and `babel-eslint` included in a
project are the versions specified by this package.

#### Included dependencies:

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
