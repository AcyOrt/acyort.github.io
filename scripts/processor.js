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
      const splited = matched[1].split('/').filter(i => i)
      const data = {
        id,
        title: matched[2],
        name: splited.slice(-1)[0],
        url: `/${matched[1]}/`,
        path: `/${matched[1]}/index.html`,
        language: labels.map(({ name }) => name)[0] || 'en',
        category: (milestone || {}).title,
        content: this.renderer.render('markdown', body, { lineNumbers: false }),
      }

      if (data.language !== 'en') {
        data.path = `/${data.language}${data.path}`
      }

      return data
    })

  this.store.set('pages', pages)
  this.config.version = this.version
  this.config.updated_at = issues[0].updated_at
}
