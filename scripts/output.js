module.exports = function output() {
  const { path: filePath = '' } = this.store.get('server_status') || {}

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

  const posts = () => {
    this.store.get('posts').forEach((post) => {
      const { language } = post
      this.helper.language = language
      if (language !== 'en') {
        this.outputHTML({
          template: 'home',
          path: `${language}/index.html`,
          data: post,
        })
      } else {
        this.outputHTML({
          template: 'home',
          path: 'index.html',
          data: post,
        })
      }
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
    posts()
    return
  }

  pages()
  posts()
  source()
}
