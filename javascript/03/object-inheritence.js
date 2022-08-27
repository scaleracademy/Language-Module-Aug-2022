let a = {p: 10, q: 20}
let c = {k: 10}

let b = Object.create(a)

console.log(a, b)
console.log(b.p)

b.p = 12
a.q = 25

console.log(b) 

console.log(a == b)
console.log(a.isPrototypeOf(b))
console.log(a.isPrototypeOf(c))

let o1 = {x: 10}
let o2 = Object.create(o1)
o2.y = 'asdsa'
let o3 = Object.create(o2)
o3.z = true
let o4 = Object.create(o3)

console.log(a.__proto__.__proto__)
console.log(b.__proto__.__proto__.__proto__)

console.log(o4.__proto__.__proto__.__proto__ == o1)
console.log(o4.__proto__.__proto__.__proto__.__proto__.__proto__ == null)

console.log("----------------------")

let num = 10
console.log(num.__proto__)