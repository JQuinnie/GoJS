const _ = require('lodash');

const users = [
  {
    id: 1,
    name: 'John',
    isActive: false,
    likes: 101,
  },
  {
    id: 2,
    name: 'Jane',
    isActive: true,
    likes: 125,
  },
  {
    id: 3,
    name: 'Jim',
    isActive: true,
    likes: 75,
  },
];

const getPopularUsers = users => _.reject(users, user => !user.isActive || user.likes < 100);
console.log(getPopularUsers(users));

// easier to read with filter, as it does not contain negatives
const getPopularUsers2 = users => _.filter(users, user => user.isActive && user.likes > 100);
console.log(getPopularUsers2(users));
