const promesa = new Promise((resolve, reject) => {
  resolve('Ea!');
});

promesa; // Promise { 'Ea!' }

/* * * * * * * */
/*
  Las promesas tienen 3 estados:
  * Pendiente
  * Cumplido
  * Rechazado
*/

const cows = 24;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`Vacas: ${cows}`);
  } else {
    reject('no hay vacas suficientes');
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('Vacas contadas!');
});