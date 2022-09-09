// Javascript Nuggets - callback hell

// after 1s first red
// after 3s second blue
// after 2s thrid green
// In sequence

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn1 = document.querySelector('.btn1');
const btn = document.querySelector('.btn');

// basic example
btn.addEventListener('click', function () {
  console.log('hellow world');
});

// callback hell example

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red';
  }, 1000);
  setTimeout(() => {
    second.style.color = 'blue';
  }, 3000);
  setTimeout(() => {
    first.style.color = 'green';
  }, 2000);
});

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red';
    setTimeout(() => {
      second.style.color = 'blue';
      setTimeout(() => {
        first.style.color = 'green';
      }, 2000);
    }, 3000);
  }, 1000);
});
