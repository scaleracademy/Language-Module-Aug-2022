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

print.onclick = function () {
  const start = Date.now();
  for (let i = 1; i <= count.value; i++) {
    let li = document.createElement("li");
    let text = "";
    if (i % 3 == 0) {
      text += "fizz";
    }
    if (i % 5 == 0) {
      text += "buzz";
    }
    if (text === "") {
      text = i;
    }
    li.innerText = text;
    ul.appendChild(li);
  }
  console.log('time = ', Date.now() - start);
};