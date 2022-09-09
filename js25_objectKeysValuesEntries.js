// Three methods to convert object into arrays
// Object.keys() - convert property names into array
// Object.values() - convert propery values into array
// Object.entries() - converts both

const person = {
  name: 'John',
  age: 20,
  status: 'student',
};

console.log('keys are', Object.keys(person));
console.log('Values are', Object.values(person));
console.log('Entries are', Object.entries(person));

const result = Object.entries(person);
console.log(result);

// map method
const newResult = result.map((item) => {
  const [first, second] = item;
  console.log(first, second);
  return first;
});
console.log(newResult);

// for of
console.log('for of values');
for (const value of result) {
  console.log(value);
  const [first, second] = value;
  console.log(first, second);
}

// another way
console.log('Array destructuring');
for (const [first, second] of result) {
  console.log(first, second);
}
