// filter and find methods

// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition

// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

// filter

const filterValues = people.filter((person) => person.name === 'peter');
console.log(filterValues);

const filterValues1 = people.filter((person) => {
  return person.age < 30;
});
console.log(filterValues1);
