acyort.extend.register('after_fetch', function (data) {
  const { updated_at } = data[0]
  acyort.config.updated_at = updated_at
})
