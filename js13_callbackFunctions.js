// callback functions
// callback function is a function which can be send as an
//argument

function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

//makeUpperCase('callback');
// common convention name is cb
function handleName(name, callback) {
  const fullName = `${name} Smith`;
  callback(fullName);
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

// function should not be invoked as an argument as makeUpperCase()
// it should be passed as an arg as makeUpperCase
handleName('John', makeUpperCase);
handleName('John', reverseString);
// another way of sending function
handleName('Siva', function (value) {
  console.log(value);
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('Button clicked');
});

// the function is invoked when the button is clicked
handleName('Siva', (value) => console.log(value));
// array methods, setTimeout, eventLiteners etc are callback functions
