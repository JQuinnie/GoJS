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
