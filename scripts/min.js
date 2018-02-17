const cssmin = require('cssmin')
const pathFn = require('path')

acyort.extend.register('after_build', function (data) {
  if (!acyort.server.status.running) {
    const { public_dir, base } = acyort.config
    const path = pathFn.join(base, public_dir, 'css/style.css')
    const css = acyort.fs.readFileSync(path, 'utf8')
    const min = cssmin(css)

    acyort.fs.outputFileSync(path, min)
    acyort.logger.success('Css has been compressed')
  }
})
