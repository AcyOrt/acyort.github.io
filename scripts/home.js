acyort.extend.register('after_init', function () {
  acyort.builder.addTags(['home'])
})

acyort.extend.register('after_build', function (data) {
  const { posts } = data
  const { status } = acyort.server

  if (
    !status                                     ||
    status.path.indexOf('home.html') > -1       ||
    status.path.indexOf('/partials/') > -1      ||
    status.path.indexOf('.yml') > -1            ||
    status.path.indexOf('/layout.html') > -1
  ) {
    acyort.builder.compile('home')
    acyort.builder.output('home', 'index.html', posts[0])
  }
})
