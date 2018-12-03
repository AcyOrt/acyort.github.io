module.exports = function processor() {
  const { authors } = this.config
  const issues = this.store.get('issues')
    .filter(({ user }) => authors.includes(user.login))
    .map(issue => ({
      id: issue.id,
      title: issue.title,
      tags: issue.labels.map(({ name }) => name),
      category: (issue.milestone || {}).title,
      updated: issue.updated_at,
      content: issue.body,
    }))

  this.store.set('updatedAt', issues[0].updated)
  this.store.set('version', this.version)
}
