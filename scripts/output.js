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

  this.copySource()
}
