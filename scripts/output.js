module.exports = function output() {
  this.store.get('pages').forEach((page) => {
    const { path } = page
    this.outputHTML({
      template: 'doc',
      path,
      data: page,
    })
  })
}
