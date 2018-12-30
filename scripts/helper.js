/* eslint no-underscore-dangle: 0 */
module.exports = (acyort) => {
  const { __ } = acyort.helper.methods
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
          return `<a href="/${prefix}/">${__(menu)}</a>`
        }
        return `<a href="/${prefix}/${menu.toLowerCase()}/">${__(menu)}</a>`
      })

      return `<li><p>${__(title)}</p>${menus.join('')}</li>`
    }).join('')

    return html.join('')
  }

  function getLinks(navs) {
    return Object.values(navs)
      .reduce((prev, next) => prev.concat(next), [])
      .map(link => link.toLowerCase())
  }

  const allLinks = {
    docs: getLinks(docsNav),
    api: getLinks(apiNav),
  }

  function _docsNav() {
    const { language } = this
    return nav(docsNav, language !== 'en' ? `${language}/docs` : 'docs')
  }

  function _apiNav() {
    const { language } = this
    return nav(apiNav, language !== 'en' ? `${language}/api` : 'api')
  }

  function _paginator() {
    const { name, category, language } = this

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
        return `<a name="paginator" class="${dire}" href="/${prefix}/">${__(`paginator.${dire}`)}</a>`
      }
      return `<a name="paginator" class="${dire}" href="/${prefix}/${item}/">${__(`paginator.${dire}`)}</a>`
    }

    if (index === -1) {
      return `<a class="disabled"></a>${linkTag(index + 1, 'next')}`
    }

    if (index === links.length - 1) {
      return linkTag(index, 'prev')
    }

    return linkTag(index, 'prev') + linkTag(index, 'next')
  }

  return {
    _apiNav,
    _docsNav,
    _paginator,
  }
}
