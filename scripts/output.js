module.exports = function output() {
  const { outputHTML } = this
  const pages = this.store.get('pages')

  pages.forEach((page) => {
    const { path } = page
    outputHTML({
      template: 'doc',
      path,
      data: page,
    })
  })
}
