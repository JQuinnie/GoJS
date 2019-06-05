const _ = require('lodash');

// without does not mutate the original array
const initialArr = [1, 2, 3];
const removeArr = _.without(initialArr, 2, 1);
console.log(initialArr);
console.log(removeArr);

const users = [
  {
    id: 1,
    name: 'John',
    isActive: false,
  },
  {
    id: 2,
    name: 'Jane',
    isActive: true,
  },
  {
    id: 3,
    name: 'Jim',
    isActive: true,
  },
];

// removes out from collection, but it mutates the original array
const inactiveUsers = _.remove(users, user => !user.isActive);
console.log(users);
console.log(inactiveUsers);

// reject will not mutate the original array
const idUsers = _.reject(users, user => user.id === 3);
console.log(users);
console.log(idUsers);
