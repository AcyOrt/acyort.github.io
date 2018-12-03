const { join } = require('path')
const octokit = require('@octokit/rest')()

function getData(acyort) {
  const cacheFile = join(process.cwd(), 'cache.json')
  const { repository } = acyort.config
  const [owner, repo] = repository.split('/')
  const { fs, logger } = acyort

  if (fs.existsSync(cacheFile)) {
    return Promise.resolve(require(cacheFile)) // eslint-disable-line
  }

  let back = []

  return new Promise((resolve) => {
    async function load(page = 1) {
      logger.info(`getting data...${page}`)

      const { data, headers } = await octokit.issues.listForRepo({
        owner,
        repo,
        per_page: 20,
        page,
      })

      back = back.concat(data)

      if (headers.link.includes('rel="next"')) {
        load(page + 1)
      } else {
        fs.outputFileSync(cacheFile, JSON.stringify(back))
        resolve(back)
      }
    }
    load()
  })
}

module.exports = async (acyort) => {
  acyort.store.set('issues', await getData(acyort))
}
