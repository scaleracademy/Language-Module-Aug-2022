console.log(typeof 10)
console.log(typeof 'abcd')
console.log(typeof true)
console.log(typeof 9.5)  // no separate float type 
console.log(typeof undefined)
console.log(typeof null)

let a = {a: 10, b: 'asdasd'}
let b = [1,2,3]
let c = BigInt(4576474376765756756) // for > 2^53
let d = Symbol('x')

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

console.log('==============================')

let i = 10
let i2 = Number(10)
let i3 = new Number(10) // never do this

console.log(typeof i)
console.log(typeof i2)
console.log(typeof i3)