module.exports = function processor() {
  const regex = /^\[(.+?)]/
  const { authors } = this.config
  const issues = this.store.get('issues')
  const pages = issues
    .filter(({ user, title }) => authors.includes(user.login) && regex.test(title))
    .map((issue) => {
      const {
        id,
        title,
        labels,
        milestone,
        body,
      } = issue
      const matched = title.split(regex)

      return {
        id,
        title: matched[2],
        url: `/${matched[1]}/`,
        path: `/${matched[1]}/index.html`,
        language: labels.map(({ name }) => name)[0] || 'en',
        category: (milestone || {}).title,
        content: this.renderer.render('markdown', body, { lineNumbers: false }),
      }
    })

  this.store.set('pages', pages)
  this.store.set('updatedAt', issues[0].updated)
  this.store.set('version', this.version)
}
