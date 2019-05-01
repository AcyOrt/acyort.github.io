const { relative, resolve } = require('path')
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

  const toc = helper.getHelper('_toc')
  const sourcesPath = resolve(__dirname, '../sources')
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
        version,
        toc: toc(body),
        content: renderer.render('markdown', body, { getHeadingId: slugify }),
      })
    }
  }

  re(dirs)

  store.set('pages', trees)
}
