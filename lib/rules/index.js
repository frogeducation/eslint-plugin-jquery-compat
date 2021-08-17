const path = require('path')

const glob = require('glob')

const pkg = require('../../package.json')

module.exports = glob
  .sync(path.join(__dirname, '**/*.js'))
  .filter(
    filename => filename.replace(/\\/g, '/') !== __filename.replace(/\\/g, '/')
  )
  .map(filename => path.relative(__dirname, filename))
  .reduce((rules, filename) => {
    const name = filename.replace(/\.js$/, '')
    const rule = require(`./${filename}`)

    rule.meta.docs.url = `${pkg.repository.url}/blob/develop/docs/rules/${name}.md`

    return {
      ...rules,
      [name]: rule,
    }
  }, {})
