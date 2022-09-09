// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

// it can be applicable to array or array of objects

const arr = [1, 2, 3, 4, 3, 2, 6, 7, 9, 2];

const uniqueValues = new Set(arr);
console.log(uniqueValues);

const uniqueValuesInArray = [...new Set(arr)];
console.log(uniqueValuesInArray);

const uniqueValuesInArrayWithValue = [99, ...new Set(arr)];
console.log(uniqueValuesInArrayWithValue);

const result = document.querySelector('.result');
result.innerHTML = result
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');

// try this one without ...
const uniqueValuesInArray1 = [new Set(arr)];
console.log(uniqueValuesInArray1);
