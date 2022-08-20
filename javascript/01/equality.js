// == losely equal 
// === strictly equal

console.log(1 == '1'); // true
console.log(1 === '1'); // false

console.log('' == 0); // true

console.log((0).toString()) // -> '' not the case
console.log(Number(''))

// ------------ for complex objects ----------------
console.log('-------------------------------')

let arr1 = [1,2,3]
let arr2 = [1,2,3]
let arr3 = arr1

console.log(arr1 === arr2) // because lvalue is not same (no need to even check rvalue)
console.log(arr1 == arr2)
console.log(arr1 === arr3) // true because they are same object (lvalue same)