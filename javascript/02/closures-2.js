function createCounter(init, delta) {
  let x = init;
  let y = delta;
  function count () {
    let x = 5;
    let y = 25;
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