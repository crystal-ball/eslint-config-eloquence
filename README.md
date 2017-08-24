# Crystal Ball ESLint Configs

<div>

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
</div>

Eslint + Airbnb + Prettier = :heart_eyes:


## Usage
The package exports separate `typescript.js` and `javascript.js`. Extend the
appropriate config for your project:

```javascript
// .eslintrc.js
module.exports = {
  extends: '@crystal-ball/eloquence/typescript'
}
```

## Dependencies
All dependencies required for running ESLint will be installed as dependencies of
this package. This ensures that there are no conflicting versions of ESLint in a
consuming project's dependencies.
