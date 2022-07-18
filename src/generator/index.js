function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next().value; // 1
g.next().value; // 2 
g.next().value; // 3
g.next().value; // undefined

/* * * * * * * */

function* iterate(array) {
  for (const value of array) {
    yield value;
  }
}

const it = iterate([
  'a',
  'b',
  'c',
  'd',
  'e',
  'f'
])

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());