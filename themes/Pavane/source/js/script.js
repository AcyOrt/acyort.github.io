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
  var wh = window.innerHeight
  var bh = document.body.clientHeight
  var height = Array.prototype.slice.call(stay)
    .map(function (d) {
      return d.clientHeight
    })
    .max()

  function ifFixed() {
    if (window.scrollY > 280 && window.scrollY < bh - wh + (wh - height - 150)) {
      stay.forEach(function (d) {
        d.classList.add('fixed')
      })
    } else {
      stay.forEach(function (d) {
        d.classList.remove('fixed')
      })
    }
    requestAnimationFrame(ifFixed)
  }
  ifFixed()
})
