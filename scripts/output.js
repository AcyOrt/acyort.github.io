module.exports = function output() {
  this.store.get('pages')
    .forEach((page) => {
      const { path, language } = page
      this.helper.language = language
      this.outputHTML({
        template: 'doc',
        path,
        data: page,
      })
    })

  this.store.get('posts')
    .forEach((post) => {
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

  this.copySource()
}
