// Rest operator ...
// gathers or collects items
// destructuring , funtions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['banana', 'apple', 'orange', 'grapes'];
const [fruit] = fruits;
console.log(fruit);

// object
const person = { name: 'bob', lastName: 'smith', job: 'developer' };
const { name } = person;
console.log(name);

console.log('With spread operator');
// With spread operator ...
// arrays
const fruits1 = ['banana', 'apple', 'orange', 'grapes'];
const [fruit1, ...restArray] = fruits1;
console.log(fruit1, restArray);
// we can use all array related functionalities on restArray

// object
// ...rest should be the last one

const person1 = { name: 'bob', lastName: 'smith', job: 'developer' };
const { name: name1, ...restObject } = person1;
console.log(name1, restObject);

// functions

const getAverages = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  scores.map((element) => console.log(element));
  scores.forEach((element) => console.log(element));
};

// ...scores is represented by an array
getAverages('student', 80, 67, 98, 56, 34);
