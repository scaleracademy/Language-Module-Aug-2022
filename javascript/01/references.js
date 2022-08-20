// Pass by value vs Pass by reference

// JavaScript -> ?? 

let a = 10;
function change(b) {
    b = 2;
}
change(a)
console.log(a) // proof pass by value


let x = [1,2,3]
function changeArr(y) {
    y.push(4)
}
changeArr(x)
console.log(x) // proof pass by value (i.e. lvalue)



