const _ = require('lodash');

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jill',
    isActive: false,
  },
];

// every returns a boolean depending on if condition is true or false
const check = _.every(users, user => user.isActive);
// const check = _.every(users, {isActive: true}); // shorthand

// see that all users are active so _.every returns false
console.log(check);

// some will see if any element, at least one, fulfills condition
const checkAgain = _.some(users, { isActive: true });
console.log(checkAgain);
