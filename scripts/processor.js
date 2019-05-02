const { relative, join } = require('path')
const dirTree = require('directory-tree')
const fm = require('front-matter')
const slugify = require('@sindresorhus/slugify')

module.exports = function processor() {
  const {
    version,
    fs,
    renderer,
    helper,
    store,
  } = this
  const config = this.config.get()
  const cacheFile = join(config.base, 'pages.json')

  this.config.set('version', version)

  if (fs.existsSync(cacheFile)) {
    store.set('pages', require(cacheFile)) // eslint-disable-line
    return
  }

  const toc = helper.getHelper('_toc')
  const sourcesPath = join(config.base, 'sources')
  const dirs = dirTree(sourcesPath, { extensions: /\.md$/ })
  const trees = []

  const re = (o) => {
    const {
      type,
      children,
      path,
    } = o

    if (type === 'directory') {
      children.forEach(re)
    }
    if (type === 'file') {
      const { attributes, body } = fm(fs.readFileSync(path, 'utf8'))
      const relativePath = relative(sourcesPath, path).split('.md')[0]

      let language = 'en'
      let url = `/${relativePath}/`

      if (relativePath.includes('en/')) {
        url = `/${relativePath.split('en/')[1]}/`
      } else {
        [language] = relativePath.split('/')
      }

      trees.push({
        ...attributes,
        path: `${url}index.html`,
        url,
        language,
        toc: toc(body),
        content: renderer.render('markdown', body, { getHeadingId: slugify }),
      })
    }
  }

  re(dirs)

  fs.outputFileSync(cacheFile, JSON.stringify(trees))
  store.set('pages', trees)
}
