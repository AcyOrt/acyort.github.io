const catsMap = {}

acyort.filter.register('after_fetch', function (data) {
  data.forEach((issue) => {
    if (issue.milestone) {
      const { title } = issue.milestone
      const { id } = issue

      if (catsMap[title]) {
        catsMap[title].push(id)
      } else {
        catsMap[title] = [id]
      }
    }
  })
})

acyort.filter.register('after_process', function (data) {
  const cats = Object.keys(catsMap)

  data.pages.forEach((page) => {
    for (let i = 0; i < cats.length; i += 1) {
      if (catsMap[cats[i]].indexOf(page.id) > -1) {
        return page.category = cats[i]
      }
    }
  })
})
