'use strict'

/**
 * Extend base config for writing Storybook setup configs (individual stories
 * are colocated in /src and use webpack configs)
 */
module.exports = {
  extends: './index.js',
  env: {
    node: true
  }
}
