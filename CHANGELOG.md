# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and
this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [6.2.0] - 2017-12-11

### Changed

* Node projects can now follow best practices and use `console.log` for outputting
  to stdout.

## [6.1.0] - 2017-11-17

### Added

* Warnings for low importance, tedious rules are now able to be downgraded during
  normal development and linted as errors in test. This makes hacking easier 🎉
  while still maintaining quality in tests.

### Changed

* Updated non Airbnb deps to latest.

## [6.0.1] - 2017-10-23

### Fixed

* Added `specialLink` value `to` to `jsx-a11y/anchor-is-valid` so that React Router
  `<Link/>` components validate correctly.

## [6.0.0] - 2017-10-22

v6 updates the linting configurations to match the convention for typing in general
and typing for React component props specifically.

The preferred method of adding static typing is with Flow. Support for TypeScript is
dropped. Integration with Flow has proven to provide nearly all the benefits of TS
with less overhead.

React component prop types should be typed using Flow. This removes the need for
using hoisted function names to declare types before component definitions. Class
properties or type definitions can be declared at the beginning of component
files/definitions. This allows removal of the `no-use-before-define` customization.
