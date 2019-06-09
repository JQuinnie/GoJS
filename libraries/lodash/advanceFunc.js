const _ = require('lodash');

// random
// native basic
console.log(Math.random());

// native advance
function random(from, to) {
  return Math.floor(Math.random() * to) + from;
}
console.log(`Random: ${random(1, 100)}`);

// lodash
console.log(`Lodash: ${_.random(1, 100)}`); // first arg can be omitted if starting from 0
console.log(`Lodash w float point: ${_.random(1, 100, true)}`);


// unique id
// can have a prefix
console.log(`ID: ${_.uniqueId('id-')}`);


// flatten
const numbers = [[1, 2], [3, 4]];

const concat = [].concat.apply([], numbers);
console.log(`Concat: ${concat}`);

const flatten = _.flatten(numbers);
console.log(`Flatten: ${flatten}`);
console.log(typeof (flatten));
