const _ = require('lodash');

const filterArr = _.filter([1, 2, 3, 4, 5], num => num < 3);
console.log(filterArr);

const users = [
  {
    id: 1,
    name: 'Jack',
  },
  {
    id: 2,
    name: 'Jill',
  },
];

// const nameFilter = _.filter(users, user => user.name === 'Jill');
// same as above
const nameFilter = _.filter(users, { name: 'Jill' });
console.log(nameFilter);
