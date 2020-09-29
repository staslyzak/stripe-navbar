const path = require('path')

const {
  compilerOptions: {paths},
} = require('../jsconfig.json')

const aliases = {}

for (key in paths) {
  aliases[key.replace('/*', '')] = path.resolve(
    __dirname,
    '..',
    paths[key][0].replace('/*', ''),
  )
}

module.exports = aliases
