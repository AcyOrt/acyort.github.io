const fetcher = require('./fetcher')
const processor = require('./processor')

module.exports = (acyort) => {
  acyort.workflow.register(
    fetcher.bind(acyort),
    processor.bind(acyort),
  )
}
