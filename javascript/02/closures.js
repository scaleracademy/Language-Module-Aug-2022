function createCounter(init, delta) {
  let x = init;
  let y = delta;
  function count () {
    x = x + y;
    return x;
  }

  return count;
}

const c1 = createCounter(10, 5);
const c2 = createCounter(15, 2);

console.log(c1(), c1(), c1())
console.log(c2(), c2(), c2())
console.log(c1(), c1(), c1())


function a () {
  let x = 10
  let p = 1
  function b () {
    let x = 20
    let q = 2
    function c () {
      let x = 30
      let r = 3
      function d () {
        let x = 40
        let s = p + q + r + 4
      }
      return d
    }
    return c
  }
  return b
}

a()()()()

let f1 = a() // this is b
let f2 = f1() // this is c
let f3 = f2() // this is d
f3()

globalThis.a = a // does not happen automatically in NodeJS 

console.log(globalThis.a)