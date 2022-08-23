function fun0() {
  console.log(this)
}


fun0(); // globalThis

let obj = {a: 10, b: 'asdasd'}

let fun1 = fun0.bind(obj);
console.log("-----")
fun1();

/**
 * We did not need to put fun1 inside obj, 
 * but still 'this' of fun1 points to obj now
 */