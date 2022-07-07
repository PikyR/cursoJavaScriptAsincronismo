function sum(n1, n2) {
  return n1 + n2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

calc(99, 1, sum); // 100

/* * * * * * * */

setTimeout(() => {
  console.log('Transcurrieron dos segundos');
}, 2000);

/* * * * * * * */

function print(name) {
  console.log(`Hola ${name}`);
}

setTimeout(print, 3000, 'pky'); // Hola pky