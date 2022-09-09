// Javascript Nuggets
// async/await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling try/catch block

// async/await replaces promise.then().catch()

// async always returns a promise
const example = async () => {
  return 2;
};
//console.log(example()); // It return a promise

async function someFun() {
  //await waits till promise is settled
  const result = await example();
  console.log(result);
}

const users = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Smith',
  },
  {
    id: 3,
    name: 'Anna',
  },
];

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  {
    userId: 2,
    articles: ['four', 'five'],
  },
  {
    userId: 3,
    articles: ['six', 'seven', 'eight', 'nine'],
  },
];

// async-await approach
console.log('async await approach');
const getData = async () => {
  try {
    const user = await getName('John');
    //const userArticles = await getArticles(user.userId);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
getData();

// Promise approach

getName('John')
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
getName('John')
  .then((user) => getArticles(user.id))
  .then((articles) => console.log(articles))
  .catch((err) => console.log(err));

function getName(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);
    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong ID`);
    }
  });
}
