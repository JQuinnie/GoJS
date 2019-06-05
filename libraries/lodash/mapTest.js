const _ = require('lodash');

const users = [
  {
    id: 1,
    first_name: 'John',
    status: 'active',
  },
  {
    id: 2,
    first_name: 'Jane',
    status: 'inactive',
  },
];

const normalizeUsers = (users) => {
  _.map(users, (user) => {
    user.firstName = user.first_name;
    delete user.first_name;

    if (user.status === 'active') {
      user.isActive = true;
    }
    if (user.status === 'inactive') {
      user.isActive = false;
    }
    delete user.status;
  });
  return users;
};

console.log(`1: ${JSON.stringify(normalizeUsers(users))}`);

// 2nd solution, does not mutate users because it return new object
const users2 = [
  {
    id: 1,
    first_name: 'Jack',
    status: 'inactive',
  },
  {
    id: 2,
    first_name: 'Jill',
    status: 'active',
  },
];

const normalizeUsers2 = users => _.map(users, user => ({
  id: user.id,
  firstName: user.first_name,
  isActive: user.status === 'active',
}));

console.log(`2: ${JSON.stringify(normalizeUsers2(users2))}`);
console.log(users2);
