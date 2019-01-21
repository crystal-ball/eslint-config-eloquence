const fs = require('fs')
const path = require('path')

/**
 * Attempt to read a .eslintrc.js config file in current directory to check for
 * a configured project type. If none found use default node
 */
module.exports = () => {
  try {
    let configPath = path.resolve(process.cwd(), '.eslintrc.js')

    if (fs.existsSync(configPath)) {
      const config = require(configPath)

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
