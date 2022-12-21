// If the object binded to the function is changed inside the function, then does it also chenge in main code. ans: Yes 

console.log(this) // blank object

function fun1() {
    this.a = "lavde"
    console.log(this) // globalThis
}

let obj2 = {
    a: "hell",
    b:10,
    c: true,
    d: fun1
}

obj2.d()

let obj = {
    a: "hello",
    b: 10,
    c: true
}

// let f = fun1.bind(obj);
// f();
// fun1.call(obj)
fun1.apply(obj)

console.log(obj, "Original Object")