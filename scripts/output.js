module.exports = function output() {
  const { path: filePath = '' } = this.store.get('server_status') || {}
  const { language: locale, languages } = this.config

  const pages = () => {
    this.store.get('pages').forEach((page) => {
      const { path, language } = page
      this.helper.language = language
      this.outputHTML({
        template: 'doc',
        path,
        data: page,
      })
    })
  }

  const home = () => {
    Object.keys(languages).concat([locale]).forEach((language) => {
      this.helper.language = language
      this.outputHTML({
        template: 'home',
        path: language === 'en' ? 'index.html' : `${language}/index.html`,
        data: { language },
      })
    })
  }

  const source = () => {
    this.copySource()
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
