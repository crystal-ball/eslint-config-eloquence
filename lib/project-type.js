const fs = require('fs')
const path = require('path')

/**
 * Attempt to read a .eslintrc.js config file in current directory to check for
 * a configured project type. If none found use default node
 */
module.exports = () => {
  try {
    const configPath = path.resolve(process.cwd(), '.eslintrc.js')

    if (fs.existsSync(configPath)) {
      /* eslint-disable import/no-dynamic-require, global-require */
      const config = require(configPath)
      /* eslint-enable import/no-dynamic-require, global-require */

      if (config && config.settings && config.settings.eloquence) {
        return config.settings.eloquence.projectType || 'node'
      }
    }
  } catch (ex) {
    console.warn('Failed to resolve config file')
  }

  // Return the default project type of node
  return 'node'
}
