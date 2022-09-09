// Javascript Nuggets - Promises

// async await
// consume/use promises

// pending , fulfilled , rejected

// passing a callback function which has two args
// resolve and reject as args which are functions

// basic promise example
const promise1 = new Promise((resolve, reject) => {
  // resolve and reject are fucntions themselves
  // promise can be either of resolve or reject
  //resolve('Hello world');
  //reject();
});

//console.log(promise1);

const promise = new Promise((resolve, reject) => {
  //resolve('hello world');
  reject('error occured');
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));

const value = 2;
const promise2 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log('random value is ' + random);
  if (random === value) {
    resolve('you guessed correctly');
  } else {
    reject('wrong number');
  }
});

promise2.then((data) => console.log(data)).catch((err) => console.log(err));
