# Contributing to ESLint Config Eloquence Guide

Contributions are welcome! This guide is a resource for navigating the package
structure and conventions.

## Code of Conduct

Please read the repository [Code of Conduct](../CODE_OF_CONDUCT.md), we take it
seriously and contributors are required to adhere to the guidelines.

## Node target

This package supports Node >=7.4, and must not use language features not
supported by Node 7.4. These configs are consumed and executed by editors, and
the Node version used by Electron inside Atom is 7.4. Unsupported syntax
features in this package will break linting in Atom!
