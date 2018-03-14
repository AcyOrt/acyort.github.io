acyort.template.register(['home', 'doc'])

acyort.filter.register('after_build', function (data) {
  const { posts, pages } = data
  const { status } = acyort.server
  const { _time } = acyort.helper.methods

  if (
    !status.path                                ||
    status.path.indexOf('home.html') > -1       ||
    status.path.indexOf('/partials/') > -1      ||
    status.path.indexOf('.yml') > -1            ||
    status.path.indexOf('/layout.html') > -1
  ) {
    posts.forEach((post) => {
      const { language } = post
      acyort.helper.resetLocale(language)
      if (language !== 'en') {
        acyort.builder.output('home', `${language}/index.html`, post)
      } else {
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
      acyort.helper.resetLocale(language)
      acyort.builder.output('doc', path, page)
    })
  }
})
