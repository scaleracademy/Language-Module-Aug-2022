let a = true;
const start = Date.now();


setTimeout(() => {
  console.log('resetting a, at = ', Date.now() - start);
  a = false;
}, 1000);

while (Date.now() - start < 3000) {

}
