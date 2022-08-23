function createGreeter(greeting) {

  function greet(name) {
    console.log(greeting + ' ' + name + '!');
  }

  return greet;
}

const gm = createGreeter('Good Morning');
const ge = createGreeter('Good Evening');

gm('Scaler');
ge('Scaler');

// print : "Good Morning Scaler!"


const arr = [1, 14, 2, 45, 13, 46, 654, 3, 23, 21];
function incComp (a, b) { return  a < b }

console.log(arr.sort(incComp))