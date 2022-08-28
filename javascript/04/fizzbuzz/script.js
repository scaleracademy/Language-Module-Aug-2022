const count = document.getElementById('count')
const print = document.getElementById('print')
const fizzbuzz = document.getElementById('fizzbuzz')

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
  let x = 1;
  while (x < count){
    if (x%5 == 0){
      console.log("fizz");
      fizzbuzz.innerText = "fizz";
    }
    if (x%3 == 0){
      console.log("buzz");
      fizzbuzz.innerText = "buzz";
      x+=1;
      continue;
    }
    else
    {
      console.log(x);
      fizzbuzz.innerText = x.toString();
    }
    x+=1;
  }
}
