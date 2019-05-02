/* eslint-disable */
Array.prototype.max = function () {
  return Math.max.apply(null, this);
}

document.addEventListener('DOMContentLoaded', function () {
  var w = window.innerWidth
  var stay = document.querySelectorAll('.stay')
  var bh = document.body.clientHeight
  var height = Array.prototype.slice.call(stay)
    .map(function (d) {
      return d.clientHeight
    })
    .max()

  function ifFixed() {
    var wh = window.innerHeight

    if (window.scrollY > 280) {
      stay.forEach(function (d) {
        d.classList.add('fixed')
      })

      if (height + 170 > wh && bh - wh - window.scrollY < 120) {
        Array.prototype.slice.call(stay).forEach(function (d) {
          d.style.maxHeight = (wh - 170) + 'px'
        })
      } else if (50 + height > wh) {
        Array.prototype.slice.call(stay).forEach(function (d) {
          d.style.maxHeight = (wh - 50) + 'px'
        })
      } else {
        Array.prototype.slice.call(stay).forEach(function (d) {
          d.style.maxHeight = 'none'
        })
      }
    } else {
      stay.forEach(function (d) {
        d.classList.remove('fixed')
      })

      Array.prototype.slice.call(stay).forEach(function (d) {
        d.style.maxHeight = 'none'
      })
    }
    requestAnimationFrame(ifFixed)
  }

  if (stay.length && w > 600) {
    ifFixed()
  }

  document.querySelector('#language').addEventListener('change', function () {
    var path = location.pathname.split('/')
    var language = this.value

    if (language === 'en') {
      path.splice(0, 2)
      location.href = '/' + path.join('/')
    } else {
      location.href = '/' + language + path.join('/')
    }
  })

  document.querySelector('#toggle').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.toggle('active')
    this.classList.toggle('active')
    document.body.classList.toggle('active')
  })

  ;[].slice.call(document.querySelectorAll('.markdown a'))
    .filter(function (a) {
      var href = a.getAttribute('href')
      var name = a.getAttribute('name')
      return href && href.charAt(0) === '/' && name !== 'paginator'
    })
    .forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault()
        var href = a.getAttribute('href')
        var prefix = window.__language === 'en' ? '' : '/' + window.__language
        location.href = prefix + href
      })
    })
})
