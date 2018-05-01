# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<a name="7.2.0"></a>

# 7.2.0 (https://github.com/crystal-ball/eslint-config-eloquence/compare/v7.1.1...v7.2.0) (2018-04-30)

### Features

* log level warn in dev for prefer sfc (9ac8479
  (https://github.com/crystal-ball/eslint-config-eloquence/commit/9ac8479))

## [7.1.1] 2018-04-30

### Fixed

* fix dev rule breaking package disabling rule

## [7.1.0] 2018-04-29

### Added

* Project type config to set webpack related project configs with
  `process.env.ELOQUENCE_PROJECT_TYPE`

## [7.0.0] 2018-04-29 - LevelUp

Package v7 includes two important updates:

* There is a single entry for node and browser project types. The duplicate
  entry types weren't really needed. Browser projects that _do_ use webpack
  custom resolution should specify it in the settings.
* Rule customization levels based on environment is simplified to take advantage
  of ESLint rule computation. It is possible to set the rule level for inherited
  rules without specifying the rule options 🎉

## [6.3.0] 2018-02-07

### Added

* Additional warn in dev rules added

## [6.2.1] 2018-02-07

### Fixed

* Function trailing commas removed to provide Node v7.4 compatability for Atom
  editors.

## [6.2.0] - 2017-12-11

### Changed

* Node projects can now follow best practices and use `console.log` for
  outputting to stdout.

## [6.1.0] - 2017-11-17

### Added

* Warnings for low importance, tedious rules are now able to be downgraded
  during normal development and linted as errors in test. This makes hacking
  easier 🎉 while still maintaining quality in tests.

### Changed

* Updated non Airbnb deps to latest.

## [6.0.1] - 2017-10-23

### Fixed

* Added `specialLink` value `to` to `jsx-a11y/anchor-is-valid` so that React
  Router `<Link/>` components validate correctly.

## [6.0.0] - 2017-10-22

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
