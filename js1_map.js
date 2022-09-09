// map method
// the difference between forEach and map is latter returns an
//array but forEach doesn't.
// Array of empty objects
const noPeople = [{}, {}, {}];

noPeople.forEach((element, index, array) => console.log(element, index, array));

noPeople.forEach((element, index, array) => console.log('For each element'));

noPeople.map((element) => console.log('It is for each element'));

// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making a new one

const people = [
  { name: 'John', age: 30, postion: 'Developer' },
  { name: 'Dave', age: 35, postion: 'Technical Lead' },
  { name: 'Smith', age: 40, postion: 'Project Manager' },
];

// displaying all the elements in callback function
people.map((element, index, array) => console.log(element, index, array));

// returning a map array
// map is for array and array of objects
const mapValues = people.map((element) => 'hellow world');
console.log(mapValues);

const values = [1, 2, 3, 4, 5, 6, 7];
const mapNumbers = values.map((element) => element * 10);
console.log(mapNumbers);

const nameChange = people.map((element) => element.name + 'project name');
console.log(nameChange);

// modify something and returns the array
const nameChange1 = people.map((element, index, array) => {
  element.name += ' added';
  return array;
});
console.log(nameChange1);

// return the modified values
const nameChange2 = people.map((element, index, array) => {
  return {
    firstName: element.name,
    number: element.age,
  };
});
console.log(nameChange2);

// it gives an array of html elements
// We can use it in .html
const names = people.map((person) => `<h1>${person.name}</h1>`);
console.log(names);

const result = document.querySelector('#result');
result.innerHTML = names;
// to avoid commas in the HTML page
result.innerHTML = names.join('');
