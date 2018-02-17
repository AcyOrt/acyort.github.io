acyort.builder.register(['home'])

acyort.extend.register('after_build', function (data) {
  const { posts } = data
  const { status } = acyort.server

  if (
    !status.path                                ||
    status.path.indexOf('home.html') > -1       ||
    status.path.indexOf('/partials/') > -1      ||
    status.path.indexOf('.yml') > -1            ||
    status.path.indexOf('/layout.html') > -1
  ) {
    acyort.builder.output('home', 'index.html', posts[0])
  }
})
