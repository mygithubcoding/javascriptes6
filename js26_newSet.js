// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(),values(),forEach

const unique = new Set();
const random = 'value';
console.log(unique); // empty set
unique.add('first');
unique.add('second');
unique.add('third');
unique.add(1);
unique.add(2);
unique.add(random);
console.log(unique);
console.log(unique.delete(random)); // returns true if value exists else false
console.log(unique);
console.log(unique.has('first')); // returns boolean value

// if we have an array of objects , and get unique categories

// new Set() - accepts iterable objects

const products = [
  { title: 'high-back bench', company: 'ikea' },
  { title: 'albanny table', company: 'marcos' },
  { title: 'accent chair', company: 'caressa' },
  { title: 'wooden table', company: 'ikea' },
];

const companies = products.map((item) => item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

// converting into an array

const finalCompanies = [...uniqueCompanies];
console.log(finalCompanies);

// adding one more value
const addValue = ['all', ...uniqueCompanies];
console.log(addValue);

// adding value with set
const addValueSet = ['all', ...new Set(uniqueCompanies)];
console.log(addValueSet);

console.log('abc values are');
const a = new Set(products.map((item) => item.company));
const b = [...new Set(products.map((item) => item.company))];
const c = ['all', ...new Set(products.map((item) => item.company))];

console.log(a, b, c);

console.log('abfndk');
// it does not give you the expected result but explore
const companies1 = products.map((item) => {
  return new Set(item.company);
});
console.log(companies1);
