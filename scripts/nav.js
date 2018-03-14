const {
  docs_nav: docsNav,
  api_nav: apiNav,
} = acyort.config
const { __ } = acyort.helper.methods

function nav(data, prefix) {
  const html = ['<ul>', '', '</ul>']
  const titles = Object.keys(data)

  html[1] = titles.map((title) => {
    const menus = data[title].map((menu) => {
      if (menu === 'Overview') {
        return `<a href="/${prefix}/">${__(menu)}</a>`
      }
      return `<a href="/${prefix}/${menu.toLowerCase()}/">${__(menu)}</a>`
    })

    return `<li><p>${__(title)}</p>${menus.join('')}</li>`
  }).join('')

  return html.join('')
}

function getLinks(nav) {
  return Object.values(nav)
    .reduce((prev, next) => prev.concat(next), [])
    .map(link => link.toLowerCase())
}

const allLinks = {
  docs: getLinks(docsNav),
  api: getLinks(apiNav)
}

acyort.helper.register('_docsNav', function (language) {
  return nav(docsNav, language !== 'en' ? `${language}/docs` : 'docs')
})

acyort.helper.register('_apiNav', function (language) {
  return nav(apiNav, language !== 'en' ? `${language}/api` : 'api')
})

acyort.helper.register('_paginator', function ({ name, category, language }) {
  if (!category) {
    return ''
  }

  const lanPath = language === 'en' ? '' : `${language}/`

  const prefix = category === 'API' ? `${lanPath}api` : `${lanPath}docs`
  const links = category === 'API' ? allLinks.api : allLinks.docs
  const index = links.indexOf(name.toLowerCase())

  function linkTag(i, dire) {
    const item = dire === 'prev' ? links[i - 1] : links[i + 1]
    if (item === 'overview') {
      return `<a class="${dire}" href="/${prefix}/">${__(`paginator.${dire}`)}</a>`
    }
    return `<a class="${dire}" href="/${prefix}/${item}/">${__(`paginator.${dire}`)}</a>`
  }

  if (index === -1) {
    return linkTag(index + 1, 'next')
  }

  if (index === links.length - 1) {
    return linkTag(index, 'prev')
  }

  return linkTag(index, 'prev') + linkTag(index, 'next')
})
