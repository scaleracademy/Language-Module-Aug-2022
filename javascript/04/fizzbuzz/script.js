const count = document.getElementById('count');
const print = document.getElementById('print');
const ul = document.getElementById('fizzbuzz');

/**
 * print 1 - N (N = value of count box)
 * if number divisible by 15 print 'fizzbuzz'
 * if number divisible by 5 print 'fizz'
 * if number divisible by 3 print 'buzz' 
 * if not divisible by 3 or 5, print the number itself
 * 
 * 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz ..... 
 */

const FIZZ = 'fizz', BUZZ = 'buzz'
function isDivisbleBy(denominator) {
  return function (num) {
    return (num % denominator) === 0;
  }
}

const isDivisbleBy3 = isDivisbleBy(3);
const isDivisbleBy5 = isDivisbleBy(5);

if (print) {
  print.onclick = function () {
    const maxCount = Number(count.value);
    const elementsToPrint = [];
    for (let i = 1; i <= maxCount; ++i) {
      if (isDivisbleBy3(i) && isDivisbleBy5(i)) {
        elementsToPrint.push(FIZZ + BUZZ);
      } else if (isDivisbleBy5(i)) {
        elementsToPrint.push(FIZZ);
      } else if (isDivisbleBy3(i)) {
        elementsToPrint.push(BUZZ);
      } else {
        elementsToPrint.push(i);
      }
    }
  
    ul.innerHTML = '';
    elementsToPrint.forEach(ele => {
      const liElement = document.createElement('li');
      liElement.innerHTML = ele;
      ul.appendChild(liElement);
    });
  }
}

/**
 * Assignment Solution By Instructor (Arnav)
 */
// print.onclick = function () {
//   const start = Date.now();
//   for (let i = 1; i <= count.value; i++) {
//     let li = document.createElement("li");
//     let text = "";
//     if (i % 3 == 0) {
//       text += "fizz";
//     }
//     if (i % 5 == 0) {
//       text += "buzz";
//     }
//     if (text === "") {
//       text = i;
//     }
//     li.innerText = text;
//     ul.appendChild(li);
//   }
//   console.log('time = ', Date.now() - start);
// };