'use strict'

/**
 * Extend base config for writing Storybook setup configs (individual stories
 * are colocated in /src and use webpack configs)
 */
module.exports = {
  extends: ['./react.js'],
  env: {
    node: true,
  },
}
