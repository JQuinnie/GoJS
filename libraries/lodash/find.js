const _ = require('lodash');

const users = [
  {
    id: 1,
    name: 'Jack',
  },
  {
    id: 2,
    name: 'Jill',
  },
  {
    id: 3,
    name: 'Jack',
  },
];

// find will return the first object that satisfy the condition
const jack = _.find(users, user => user.name === 'Jack');
console.log(jack);

// even simplier way
const jill = _.find(users, { name: 'Jill' });
console.log(jill);
