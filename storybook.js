'use strict'

/**
 * Extend base config for writing Storybook setup configs (individual stories
 * are colocated in /src and use webpack configs)
 */
module.exports = {
  extends: ['./react.js'],

  settings: {
    // Storybook setup uses the webpack resolver (inside React apps), but also
    // needs to import the core path module for configuring the Storybook
    // specific webpack configs
    'import/core-modules': ['path'],
  },

  env: {
    node: true,
  },
}
