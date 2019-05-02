module.exports = function output() {
  const {
    store,
    config,
    util,
  } = this
  const { languages } = config.get()
  const { path: filePath = '' } = store.get('status', 'acyort-server') || {}

  const pages = () => {
    store.get('pages').forEach((page) => {
      const { path, language } = page
      config.set('language', language)
      util.outputHTML({
        template: 'doc',
        path,
        data: page,
      })
    })
  }

  const home = () => {
    Object.keys(languages).forEach((language) => {
      config.set('language', language)
      util.outputHTML({
        template: 'home',
        path: language === 'en' ? 'index.html' : `${language}/index.html`,
        data: { language },
      })
    })
  }

  const source = () => {
    util.copySource()
  }

  if (filePath.includes('/pavane/source/')) {
    source()
    return
  }

  if (filePath.includes('/layout/doc.html')) {
    pages()
    return
  }

  if (filePath.includes('/layout/home.html')) {
    home()
    return
  }

  pages()
  home()
  source()
}
