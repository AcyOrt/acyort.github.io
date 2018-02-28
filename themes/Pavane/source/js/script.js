var steps = [
  'Spin up Environment ',
  '...',
  '',
  'npm i acyort -g ',
  '...',
  '+ acyort@2.0.13',
  'added 239 packages in 9.412s',
  '',
  'acyort init ',
  '...',
  '✔ Configure "config.yml" to start your blog',
  '',
  'acyort build ',
  '...',
  'i Use plugin: acyort-toc',
  'i Getting data from GitHub (LoeiFy/Recordum)  ... 1',
  '✔ /posts/244718742.html',
  '✔ /index.html',
  '',
  'git commit -m "Updated by circleci" ',
  '...',
  '[gh-pages fd05522] Updated by circleci',
  '',
  'git push https://github.com/LoeiFy/Recordum.git gh-pages:gh-pages ',
  '...',
  'To https://github.com/LoeiFy/Recordum.git',
  '7359d0f..b5e0a56  gh-pages -> gh-pages'
]

window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60)
          }
})()

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

  var current = 0
  var typer = document.querySelector('#typer')
  function type() {
    if (current < steps.length) {
      var step = steps[current]
      var time = 1000

      if (!step) {
        typer.innerHTML += '\n'
        current += 1
        return setTimeout(type, 800)
      }

      if (step === '...') {
        function dot(t) {
          typer.innerHTML += t ? '.\n' : '.'
        }
        dot()
        setTimeout(function () {
          dot()
          setTimeout(function () {
            dot(true)
            current += 1
            setTimeout(type, 500)
          }, 300)
        }, 300)
      } else {
        typer.innerHTML += step + (steps[current + 1] === '...' ? '' : '\n')
        current += 1
        setTimeout(type, 500)
      }
    }
  }

  if (typer && w > 600) {
    type()
  }

  document.querySelector('#language').addEventListener('change', function () {
    var path = location.pathname.split('/')
    var language = this.value

    if (!language) {
      path.splice(0, 2)
      location.href = '/' + path.join('/')
    } else {
      location.href = '/' + language + path.join('/')
    }
  })

  document.querySelector('#toggle').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.toggle('active')
    this.classList.toggle('active')
  })
})
