// faster/easier way to access/unpack variables from arrays,objects

// This is for objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'Chicago',
  siblings: {
    sister: 'jane',
  },
};

// traditional way of accessing
console.log(bob.first);
console.log(bob.last);
console.log(bob.city);
console.log(bob.siblings);

// Object destructuring
// object keys are different , in this case a,b,c,d
// In array order matters but not in object
const { first: a, last: b, city: c, siblings: d } = bob;
console.log(a, b, c, d);
console.log(d.sister);

// object keys are same , in this case first,last,city
// siblings is different - cousins
const { first, last, city, siblings: cousins } = bob;
console.log(first, last, city, cousins.sister);

// limited keys
const { first: f, last: l } = bob;
console.log(f, l);
