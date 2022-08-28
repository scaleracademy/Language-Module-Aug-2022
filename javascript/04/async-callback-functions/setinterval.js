

const intervalId = setInterval(function() {
  console.log('running.....')
}, 2000)

setTimeout(function () {
  clearInterval(intervalId)
}, 10000)