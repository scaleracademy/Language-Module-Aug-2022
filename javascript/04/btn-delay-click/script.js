const btn = document.getElementById('btn');
const status = document.getElementById('status');

const counter = document.getElementById('counter');
const count = document.getElementById('count');

let c = 0;

btn.onclick = function () {
  status.innerText = 'WAITING';

  const start = Date.now();

  while (Date.now() - start < 15000) { }

  // status.innerText = 'DONE';
};

counter.onclick = function () {
  c++; 
  console.log('counter = ', c)
  count.innerText = c;
}