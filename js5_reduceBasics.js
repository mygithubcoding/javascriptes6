// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// - 1st parameter ('acc') - total of all calculations
// - 2nd parameter ('curr') - current iteration/value

// total = accumulator
// curr = current value

// always return value
const arr = [10, 2, 3, 4, 5, 6];
const reducedValue = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
// initial value can be any value
// if initial values is not given , the first value of the array  is taken

console.log(reducedValue);

const total = arr.reduce((total, value) => {
  total += value;
  return total;
}, 0);

console.log(total);
