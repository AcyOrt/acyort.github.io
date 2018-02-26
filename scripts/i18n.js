const path = require('path')

const tagMap = {}

acyort.extend.register('after_fetch', function (data) {
  data.forEach(({ id, labels }) => {
    if (labels.length) {
      const { name } = labels[0]

      if (tagMap[name]) {
        tagMap[name].push(id)
      } else {
        tagMap[name] = [id]
      }
    }
  })
})

acyort.extend.register('after_process', function (data) {
  const tags = Object.keys(tagMap)

  data.pages.forEach((page) => {
    for (let i = 0; i < tags.length; i += 1) {
      if (tagMap[tags[i]].indexOf(page.id) > -1) {
        page.path = path.join('/', tags[i], page.path)
      }
    }
  })
})
