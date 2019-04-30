const { relative, resolve } = require('path')
const dirTree = require('directory-tree')


module.exports = function processor() {
  const { version, fs } = this
  const SOURCES_PATH = resolve(__dirname, '../sources')
  const tree = dirTree(SOURCES_PATH, { extensions: /\.md$/ })

  console.log(relative(SOURCES_PATH, '/Users/am0200/Documents/github/site/sources/en/miscellaneous'))

  /*
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
        content: this.renderer.render('markdown', body, {
          lineNumbers: false,
          headingIdFormater: s => s
            .replace(/\//g, '')
            .toLowerCase()
            .split(' ')
            .join('-'),
        }),
        raw: body,
      }

      if (data.language !== 'en') {
        data.path = `/${data.language}${data.path}`
      }

      return data
    })
  */
}
