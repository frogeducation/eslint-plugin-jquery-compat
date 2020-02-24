const path = require('path')
const glob = require('glob')

module.exports = glob.sync(path.join(__dirname, '*.js'))
  .filter(filename => filename.replace(/\\/g, '/') !== __filename.replace(/\\/g, '/'))
  .map(filename => path.relative(__dirname, filename))
  .map(filename => {
    const key = path.basename(filename).replace(/\.js$/, '')
    const value = require(`./${filename}`)

    return [key, value]
  })
  .reduce((acc, next) => {
    acc[next[0]] = next[1];
    return acc;
  }, {});

