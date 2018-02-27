acyort.builder.register(['home', 'doc'])

acyort.extend.register('after_build', function (data) {
  const { posts, pages } = data
  const { status } = acyort.server

  if (
    !status.path                                ||
    status.path.indexOf('home.html') > -1       ||
    status.path.indexOf('/partials/') > -1      ||
    status.path.indexOf('.yml') > -1            ||
    status.path.indexOf('/layout.html') > -1
  ) {
    posts.forEach((post) => {
      const { language } = post
      if (language) {
        acyort.helper.resetLocale(language)
        acyort.builder.output('home', `${language}/index.html`, post)
      } else {
        acyort.helper.resetLocale('default')
        acyort.builder.output('home', 'index.html', post)
      }
    })
  }

  if (
    !status.path                                ||
    status.path.indexOf('doc.html') > -1        ||
    status.path.indexOf('/partials/') > -1      ||
    status.path.indexOf('.yml') > -1            ||
    status.path.indexOf('/layout.html') > -1
  ) {
    pages.forEach((page) => {
      const { language, path } = page
      if (language) {
        acyort.helper.resetLocale(language)
      } else {
        acyort.helper.resetLocale('default')
      }
      acyort.builder.output('doc', path, page)
    })
  }
})
