function fun0(arg1, arg2) {
  console.log(arg1, arg2)
  console.log(this)
}


fun0(); // globalThis

let obj = {a: 10, b: 'asdasd'}

console.log("-------")

fun0.call(obj, 33, 55)
fun0.apply(obj, [12, 14])  

/**
 * Function is called, with the 'this' pointing to the supplied
 * object 'obj'. 
 * NO NEW FUNCTION IS CREATED
 * THE 'this' IS NOT PERMANENTLY MODIFIED
 * 
 * call -> function args passed as normal args (starting from 2nd arg)
 * apply -> functino args are passed as a single array
 */