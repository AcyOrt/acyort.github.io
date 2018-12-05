const fetcher = require('./fetcher')
const processor = require('./processor')
const helpers = require('./helper')

module.exports = (acyort) => {
  const {
    _apiNav,
    _paginator,
    _docsNav,
  } = helpers(acyort)

  acyort.workflow.register(
    fetcher.bind(acyort),
    processor.bind(acyort),
  )

  acyort.helper.register('_apiNav', _apiNav)
  acyort.helper.register('_docsNav', _docsNav)
  acyort.helper.register('_paginator', _paginator)
}
