const { _time } = acyort.helper.methods

acyort.extend.register('after_fetch', function (data) {
  const { updated_at } = data[0]
  acyort.config.updated_at = acyort.config.language === 'default' ?
    _time(updated_at, 'MMMM DD, YYYY') :
    _time(updated_at, 'YYYY-MM-DD')
})
