const {
  docs_nav: docsNav,
  api_nav: apiNav,
} = acyort.config

function nav(data, prefix) {
  const html = ['<ul>', '', '</ul>']
  const titles = Object.keys(data)

  html[1] = titles.map((title) => {
    const menus = data[title].map((menu) => {
      if (menu === 'Overview') {
        return `<a href="/${prefix}/">${menu}</a>`
      }
      return `<a href="/${prefix}/${menu.toLowerCase()}/">${menu}</a>`
    })

    return `<li><p>${title}</p>${menus.join('')}</li>`
  }).join('')

  return html.join('')
}

acyort.extend.helper('_docsNav', function () {
  return nav(docsNav, 'docs')
})

acyort.extend.helper('_apiNav', function () {
  return nav(apiNav, 'api')
})
