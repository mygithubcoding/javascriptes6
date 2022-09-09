const arr = [1, 1, 2, 2, 3, 4, 5, 6, 6];
console.log(arr);
console.log(new Set(arr));
console.log([...new Set(arr)]);
console.log([99, 100, 99, ...new Set(arr)]);
console.log(99, 100, new Set(arr));
const arr1 = [1, 1, 2, 2, 3, 3, 4, 4];
console.log([...new Set(arr1)]);
