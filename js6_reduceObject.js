// Reduce objects

// cart example

const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel',
    price: 499.99,
    amount: 2,
  },
  { title: 'Xiomi Redmi Note 2', price: 699.99, amount: 4 },
  {
    title: 'Xiomi Redmi Note 2',
    price: 399.99,
    amount: 3,
  },
];

// total is represented by the initial value
// In this case it is {totalItems:0,cartTotal:0} object
// total can be anything number,object, array
// always return total or anything
let total = cart.reduce(
  (total, item) => {
    const { price, amount } = item;
    total.totalItems += amount;
    total.cartTotal += amount * price;
    return total;
  },
  { totalItems: 0, cartTotal: 0 }
);

// use toFixed(2) method to deal with float values
// observe the diff
console.log(total);
console.log(total.cartTotal);
console.log(total.cartTotal.toFixed(2));

// github repo example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () => {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    if (total[language]) {
      total[language] = total[language] + 1;
    } else total[language] = 1;
    return total;
  }, {});
  console.log(newData);
};

//console.log(newData);
fetchRepos();

// avoiding the null values
const fetchRepos1 = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    if (language) {
      if (total[language]) {
        total[language] = total[language] + 1;
      } else total[language] = 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos1();

const fetchRepos2 = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos2();
