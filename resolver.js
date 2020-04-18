'use strict'

const fs = require('fs')
const path = require('path')
const nodeResolver = require('eslint-import-resolver-node')

exports.interfaceVersion = 2

const defaultAliases = {
  '@': path.resolve(fs.realpathSync(process.cwd()), 'src'),
}

exports.resolve = function resolve(source, file, config) {
  const aliases = config && config.aliases ? config.aliases : defaultAliases
  let dealiasedSource = source

  Object.keys(aliases).forEach((alias) => {
    // Use the alias plus a directory separator to make sure we don't match
    // package names that start with some alias
    const osAlias = alias + path.sep

    if (dealiasedSource.startsWith(osAlias)) {
      dealiasedSource = dealiasedSource.replace(
        new RegExp(osAlias),
        aliases[alias] + path.sep,
      )
    }
  })

  return nodeResolver.resolve(dealiasedSource, file, {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    ...config,
  })
}
