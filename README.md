<div align="center">
<img width="500" src="https://cdn.rawgit.com/crystal-ball/eslint-config-eloquence/master/assets/logos.png" alt="Extends Airbnb code quality rules with Prettier.js formatting">
</div>

# Crystal Ball ESLint Configs
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Installing:
Add the package and Prettier as dev dependencies to your project:
```sh
npm i eslint-config-healthsparq prettier -D
```
_We recommend adding Prettier as an explicit project dependency because some editors
will only use Prettier as a dependency if it is in the `package.json`_

If you are using the web configs, install the webpack resolver as well:
```sh
npm i eslint-import-resolver-webpack -D
```

#### Flow
Static typing using flow is supported through the `eslint-plugin-import` package.

## Usage
Extending this package's config will set the default:

- `parserOptions`
- `parser`
- `env`
- `plugins`
- `rules`

There are seperate configs for Node projects and web projects to handle turning
on/off features like JSX, webpack resolving, `.mjs` file extensions, etc. The
configs are `node` and `web` and can be extended like so:

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

#### Dependencies
All dependencies required for running ESLint will be installed as dependencies of
this package. This ensures that there are no conflicting versions of ESLint in a
consuming project's dependencies. Installed dependencies include:
- eslint
- babel-eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-flowtype
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
