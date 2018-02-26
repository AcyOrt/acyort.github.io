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
    posts.forEach((post) => {
      if (post.tags.length) {
        const { name } = post.tags[0]
        acyort.builder.output('home', `${name}/index.html`, post)
      } else {
        acyort.builder.output('home', 'index.html', post)
      }
    })
  }
})
