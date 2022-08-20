let x = 10;
console.log(x);

function change() {
  let x = 20;
  console.log(x);
  if (true) {
    let x1 = 30;
    console.log(x, x1);
  }
  console.log(x);
}
change();
console.log(x);



// var x = 10;
// console.log(x);

// function change() {
//   console.log(x);
//   var x = 20;
//   if (true) {
//     console.log(x);
//     var x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// change();
// console.log(x);