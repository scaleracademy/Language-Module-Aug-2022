h1()
// h2() // ReferenceError: Cannot access 'h2' before initialization
// h3() // TypeError: h3 is not a function

// functions get hoisted with their definition
function h1 () {
  console.log('hello function');
}

let h2 = function () {
  console.log('hello let function');
}

var h3 = function () {
  console.log('hello var function');
}

console.log(typeof h2)