// faster/easier way to access/unpack variables from arrays,objects

// This is for array

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// traditional way
const fruits1 = fruits[0];
const fruits2 = fruits[1];
const fruits3 = fruits[2];
console.log(fruits1, fruits2, fruits3);

// array destructuring
const [a, b, c] = fruits;
console.log(a, b, c);

// leaving one value between
const [d, , f] = fruits;
console.log(d, f);

// we get only 2 values
const [g, h] = fruits;
console.log(g, h);

// if we go for the value which does not exist, we get undefined
// array contains only 3 values
const [p, q, r, s] = fruits;
console.log(p, q, r, s); // for s it is undefined

// swapping

let first = 'first';
let second = 'second';
console.log(first, second); // before swapping
[second, first] = [first, second]; // after swapping
console.log(first, second);
