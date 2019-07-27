# [12.2.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v12.1.0...v12.2.0) (2019-07-27)


### Update

* Allow anonymous array, object and literal default exports (#95) ([645436d16bf975af8dffe08076bcd5b4792accaf](https://github.com/crystal-ball/eslint-config-eloquence/commit/645436d16bf975af8dffe08076bcd5b4792accaf)), closes [#95](https://github.com/crystal-ball/eslint-config-eloquence/issues/95) [#93](https://github.com/crystal-ball/eslint-config-eloquence/issues/93)

# [12.1.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v12.0.1...v12.1.0) (2019-07-27)


### Update

* Dependencies update 🆙 ([1fbc4a2e1e36649ab2a9fc67a8d24e870ac432bd](https://github.com/crystal-ball/eslint-config-eloquence/commit/1fbc4a2e1e36649ab2a9fc67a8d24e870ac432bd))

## [12.0.1](https://github.com/crystal-ball/eslint-config-eloquence/compare/v12.0.0...v12.0.1) (2019-07-12)


### Docs

* Fix changelog docs and update to latest dev deps 🔧 (#86) ([c87073253e9cc7ca17094f93b0c9f24490972b98](https://github.com/crystal-ball/eslint-config-eloquence/commit/c87073253e9cc7ca17094f93b0c9f24490972b98)), closes [#86](https://github.com/crystal-ball/eslint-config-eloquence/issues/86)

### Fix

* Fix import and continue rule definitions ✨ (#87) ([0948beb5de9419fda13a1113c03c31d2e657203b](https://github.com/crystal-ball/eslint-config-eloquence/commit/0948beb5de9419fda13a1113c03c31d2e657203b)), closes [#87](https://github.com/crystal-ball/eslint-config-eloquence/issues/87) [#70](https://github.com/crystal-ball/eslint-config-eloquence/issues/70) [#71](https://github.com/crystal-ball/eslint-config-eloquence/issues/71)

# eslint-config-eloquence changelog

This project strictly adheres to semver and will err on the side of releasing majors when
changes could possibly introduce breaking changes. This changelog is dynamically generated
with [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) configured
with [@crystal-ball/semantic-release-base](https://github.com/crystal-ball/semantic-release-base).

> Changelog tags
>
> - 💥 - Breaking change
> - 🔖 - Release notes
> - 💖 - New feature
> - ✨ - Updates
> - 🛠 - Fixes


# [12.0.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v11.2.0...v12.0.0) (2019-07-07)

### 💥 Breaking Changes

Rename any configuration using `eloquence/webpack` to `eloquence/react`. This
better reflects the project type rather than the tools used for the project.

### 🔖 Release Notes

This release cleans up the dependencies and rule definitions for Eloquence, most
importantly the dependency on the Airbnb package is removed and those rules are
copied into this repo. Reasons for this include:

- Better access to rules to handle switching between dev and test severity
  levels
- Faster releases to rules and linting issues
- More fine grained control of which rules are applied to which lint-set, eg
  Node.js and React rules are only applied to those lint sets.

Going forward this also has the benefit of consolidating all of the lint rules
applied for each set to this repo, allowing this repo to serve as the manager of
ESLint dependencies and rules.

### 💖 New

* Define rule configurations in repository 💖⏫ (#85) ([3f57e7a](https://github.com/crystal-ball/eslint-config-eloquence/commit/3f57e7a636166cc46810d759d268490c8e1384d4)), closes [#85](https://github.com/crystal-ball/eslint-config-eloquence/issues/85)

### Docs, Upgrade, Chore

* Update to project commit semantics 🔮✨ (#72) ([8e46a73](https://github.com/crystal-ball/eslint-config-eloquence/commit/8e46a737cb7d360d7b5e4980e15a3f7c73360a30)), closes [#72](https://github.com/crystal-ball/eslint-config-eloquence/issues/72)
* Add some of the missing releases to changelog 📝 ([da639ea](https://github.com/crystal-ball/eslint-config-eloquence/commit/da639ea68b84c6dc50936467a962924e5872651e))
* Format Changelog 📝 ([c828987](https://github.com/crystal-ball/eslint-config-eloquence/commit/c82898741d93fd95afb05a5d4bbacde750316ce0))
* Update dependency eslint-plugin-import to v2.17.3 (#69) ([955a541](https://github.com/crystal-ball/eslint-config-eloquence/commit/955a541985c2a4497edf3a619a710cc28d0a2e0e)), closes [#69](https://github.com/crystal-ball/eslint-config-eloquence/issues/69)
* Update dependency husky to v2.7.0 (#73) ([8c70763](https://github.com/crystal-ball/eslint-config-eloquence/commit/8c7076313783ec0abcee32d2add300c2c47f959a)), closes [#73](https://github.com/crystal-ball/eslint-config-eloquence/issues/73)


## [11.2.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v11.1.0...v11.2.0) (2019-05-19)


### 💖 New

* Add configs for TypeScript projects (#49) ([6761247](https://github.com/crystal-ball/eslint-config-eloquence/commit/6761247300fabcae424a18158371b8402f8dde6b)), closes [#49](https://github.com/crystal-ball/eslint-config-eloquence/issues/49)


## [11.1.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v11.0.0...v11.1.0) (2019-05-18)


### 💖 New

* Add pretty formatter dependency 💖 (#67) ([bd62aaf](https://github.com/crystal-ball/eslint-config-eloquence/commit/bd62aaf8a41786f1515b829f4b2c0a4042f644fa)), closes [#67](https://github.com/crystal-ball/eslint-config-eloquence/issues/67)

### ✨ Update

* Update dependencies and workflows (#63) ([66b2b60](https://github.com/crystal-ball/eslint-config-eloquence/commit/66b2b6081d1ce8da244fc74d114bc5feca9ffe73)), closes [#63](https://github.com/crystal-ball/eslint-config-eloquence/issues/63)
* Update dependency husky to v2.3.0 (#66) ([7c5c497](https://github.com/crystal-ball/eslint-config-eloquence/commit/7c5c497aa4991a00667d94974451639ba026d9db)), closes [#66](https://github.com/crystal-ball/eslint-config-eloquence/issues/66)

### Docs, Upgrade, Chore

* Configure Renovate (#51) ([0ceb0ad](https://github.com/crystal-ball/eslint-config-eloquence/commit/0ceb0ad806dcf012992f43e4e638899a81c8adf8)), closes [#51](https://github.com/crystal-ball/eslint-config-eloquence/issues/51)
* Pin dependencies (#54) ([6446a5a](https://github.com/crystal-ball/eslint-config-eloquence/commit/6446a5a6142e333b48c8a007af181ee90eacfbcd)), closes [#54](https://github.com/crystal-ball/eslint-config-eloquence/issues/54)
* Update dependency eslint to ~5.16.0 (#56) ([3a4a9c8](https://github.com/crystal-ball/eslint-config-eloquence/commit/3a4a9c8ed4087c9759cfb37a305f661c487981ac)), closes [#56](https://github.com/crystal-ball/eslint-config-eloquence/issues/56)
* Update dependency eslint-config-prettier to ~4.2.0 (#57) ([cce72c9](https://github.com/crystal-ball/eslint-config-eloquence/commit/cce72c94dca0c7bed735ba0e07f50328af6e5d69)), closes [#57](https://github.com/crystal-ball/eslint-config-eloquence/issues/57)
* Update dependency eslint-plugin-import to ~2.17.0 (#58) ([248b69f](https://github.com/crystal-ball/eslint-config-eloquence/commit/248b69ffa32fc3ab231f6e9d49ec3398ec2a87b2)), closes [#58](https://github.com/crystal-ball/eslint-config-eloquence/issues/58)
* Update dependency eslint-plugin-prettier to ~3.1.0 (#59) ([30a629c](https://github.com/crystal-ball/eslint-config-eloquence/commit/30a629c2e75a3d91fbb6fa5c9905b832b46d4f9a)), closes [#59](https://github.com/crystal-ball/eslint-config-eloquence/issues/59)
* Update dependency eslint-plugin-react to ~7.13.0 (#60) ([e5248b7](https://github.com/crystal-ball/eslint-config-eloquence/commit/e5248b78f1687d4d6dfd33924f087b81a5ad0f84)), closes [#60](https://github.com/crystal-ball/eslint-config-eloquence/issues/60)
* Update Node.js to v8.16 (#55) ([31ce389](https://github.com/crystal-ball/eslint-config-eloquence/commit/31ce38916de2badef5b36fff35eeedb7782348cb)), closes [#55](https://github.com/crystal-ball/eslint-config-eloquence/issues/55)
* Use Travis to target Node version instead of Docker (#62) ([080c66b](https://github.com/crystal-ball/eslint-config-eloquence/commit/080c66bb34fe4818890363d8ae6e0647d05f47d5)), closes [#62](https://github.com/crystal-ball/eslint-config-eloquence/issues/62)
* Addl badge awesomeness 💖 (#61) ([89279cc](https://github.com/crystal-ball/eslint-config-eloquence/commit/89279cc9245bfe2ef0f469d79442f37fe2235ec1)), closes [#61](https://github.com/crystal-ball/eslint-config-eloquence/issues/61)
* Replace Greenkeeper badge with Renovate badge (#53) ([807b697](https://github.com/crystal-ball/eslint-config-eloquence/commit/807b6979dde49709133f65fc62b7b72a25f642bf)), closes [#53](https://github.com/crystal-ball/eslint-config-eloquence/issues/53)
* Update dependency eslint-config-prettier to v4.3.0 (#65) ([fde33e4](https://github.com/crystal-ball/eslint-config-eloquence/commit/fde33e42144c6006d9d3b7fe09895e9f935dcb9c)), closes [#65](https://github.com/crystal-ball/eslint-config-eloquence/issues/65)


## [11.0.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v10.1.0...v11.0.0) (2019-02-08)

### 💥 Breaking Changes

Project types should be specified using entry files instead of settings

### 💖 New

* Entry files for project types created ([1e23bb0](https://github.com/crystal-ball/eslint-config-eloquence/commit/1e23bb0)), closes ([#37](https://github.com/crystal-ball/eslint-config-eloquence/issues/37))


## [10.1.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v10.0.0...v10.1.0) (2019-02-08)

### ✨ Update

* Add process global (#36) ([2126ced](https://github.com/crystal-ball/eslint-config-eloquence/commit/2126ced)), closes ([#35](https://github.com/crystal-ball/eslint-config-eloquence/issues/35))


## [10.0.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v9.6.0...v10.0.0) (2019-02-08)

### 💥 Breaking Changes

The flow plugin and rules are no longer included. The project type must be configured in the project
.eslintrc.js

### ✨ Update

* Update deps, add project type resolver, remove flow plugin ([473ba06](https://github.com/crystal-ball/eslint-config-eloquence/commit/473ba06))

<!-- Missing releases: 7.3, 7.3.1, 7.3.2, 7.4, 7.5, 8.0, 9.0, 9.1, 9.2, 9.3, 9.3.1, 9.3.2, 9.4, 9.5, 9.5.1, 9.6 -->

## [7.2.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v7.1.1...v7.2.0) (2018-04-30)

### ✨ Update

- log level warn in dev for prefer sfc ([9ac8479](https://github.com/crystal-ball/eslint-config-eloquence/commit/9ac8479))

### [7.1.1](https://github.com/crystal-ball/eslint-config-eloquence/compare/v7.1.0...v7.1.1) (2018-04-30)

### 🛠 Fixed

- fix dev rule breaking package disabling rule

## [7.1.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v7.0.0...v7.1.0) (2018-04-29)

### 💖 New

- Project type config to set webpack related project configs with
  `process.env.ELOQUENCE_PROJECT_TYPE`

## [7.0.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v6.3.0...v7.0.0) LevelUp (2018-04-29)

### 🔖 Release Notes

Package v7 includes two important updates:

- There is a single entry for node and browser project types. The duplicate
  entry types weren't really needed. Browser projects that _do_ use webpack
  custom resolution should specify it in the settings.
- Rule customization levels based on environment is simplified to take advantage
  of ESLint rule computation. It is possible to set the rule level for inherited
  rules without specifying the rule options 🎉

## [6.3.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v6.2.1...v6.3.0) (2018-02-07)

### 💖 New

- Additional warn in dev rules added

### [6.2.1](https://github.com/crystal-ball/eslint-config-eloquence/compare/v6.2.0...v6.2.1) (2018-02-07)

### 🛠 Fix

- Function trailing commas removed to provide Node v7.4 compatability for Atom
  editors.

## [6.2.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v6.1.0...v6.2.0) (2017-12-11)

### ✨ Update

- Node projects can now follow best practices and use `console.log` for
  outputting to stdout.

## [6.1.0](https://github.com/crystal-ball/eslint-config-eloquence/compare/v6.0.1...v6.1.0) (2017-11-17)

### 💖 New

- Warnings for low importance, tedious rules are now able to be downgraded
  during normal development and linted as errors in test. This makes hacking
  easier 🎉 while still maintaining quality in tests.

### Upgrade

- Updated non Airbnb deps to latest.

### [6.0.1](https://github.com/crystal-ball/eslint-config-eloquence/compare/v6.0.0...v6.0.1) (2017-10-23)

### 🛠 Fix

- Added `specialLink` value `to` to `jsx-a11y/anchor-is-valid` so that React
  Router `<Link/>` components validate correctly.

## 6.0.0 (2017-10-22)

### 🔖 Release Notes

v6 updates the linting configurations to match the convention for typing in
general and typing for React component props specifically.

The preferred method of adding static typing is with Flow. Support for
TypeScript is dropped. Integration with Flow has proven to provide nearly all
the benefits of TS with less overhead.

React component prop types should be typed using Flow. This removes the need for
using hoisted function names to declare types before component definitions.
Class properties or type definitions can be declared at the beginning of
component files/definitions. This allows removal of the `no-use-before-define`
customization.
