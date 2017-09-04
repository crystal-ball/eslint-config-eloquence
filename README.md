<div align="center">
<img width="500" src="https://cdn.rawgit.com/crystal-ball/eslint-config-eloquence/master/assets/logos.png" alt="Extends Airbnb code quality rules with Prettier.js formatting">
</div>

# Crystal Ball ESLint Configs
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Installing:
Add package as a dev dependency to your project:
```sh
npm i eslint-config-healthsparq -D
```

If you are using the web configs, install the webpack resolver as well:
```sh
npm i eslint-import-resolver-webpack -D
```

## Usage
Extending this package's config will handle setting the base parserOptions, parser,
plugins and env. There are seperate configs for Node projects and web projects
to handle turning on/off features like JSX, webpack resolving, `.mjs` file
extensions, etc. The configs are `node` and `web` and can be extended like so:

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

#### Overriden Rules
The only Airbnb code quality rule that is overriden is setting
[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) to
`{ functions: false }`. This allows propTypes of
stateless functional components to be decalred before the component defintion using
a function declarartion:

```javascript
Radical.propTypes = {
  name: string.isRequired
}

export default function Radical({ name }) {
 return <h1>{name} is RADICAL!</h1>
}
```

This lets us always declare our prop types before the component definition, which
is helpful when evaluating some new component.

#### Dependencies
All dependencies required for running ESLint will be installed as dependencies of
this package. This ensures that there are no conflicting versions of ESLint in a
consuming project's dependencies. Installed dependencies include:
- babel-eslint
- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- prettier

## TypeScript
Linting for TypeScript is an opt-in. First, add the ESLint TS parser:

```shell
npm i typescript-eslint-parser
```

Then extend the TyepScript configuration:

```javascript
// .eslintrc.js
module.exports = {
  extends: '@crystal-ball/eloquence/typescript'
}
```
