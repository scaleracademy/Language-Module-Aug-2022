/*
  Classical OOP 
  'this' ? -> reference to the current instance 

              cannot write in : 
                1. global scope (C++)
                2. static methods 
                3. in constructor, before 'super' call 
  JavaScript 
    - can use anywhere 
    - reference to current context where code is running
    - exception: in arrow functions, lexical this
    - exception: using bind/call we can re-direct this
*/


console.log(this); // the scope of current file
console.log(this == globalThis);

function printThis() {
  console.log(this);
  console.log(this == globalThis);
}

printThis(); // function runs in 'global' context, in this way

let obj = {
  a: 10,
  b: true,
  c: 'asdsad',
  d: printThis
}

obj.d()