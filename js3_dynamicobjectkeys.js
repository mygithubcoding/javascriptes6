// dynamic object keys

// dot notation

const person = { name: 'dave', age: 30 };
console.log(person.name);
person.name = 'smith';
console.log(person.name);

// square bracket notation

console.log(person['name']);

const items = { 'featured-items': ['item1', 'item2'] };
// dot notation can't be used with this kind of scenarios
console.log(items['featured-items']);

// dynamic object keys

let appState = 'loading';
appState = 'error';
const app = {
  [appState]: true,
};
console.log(app);
// value for dynamic object key
const keyName = 'computer';
app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'john');
console.log(state);
