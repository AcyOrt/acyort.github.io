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
  ifFixed()
})
