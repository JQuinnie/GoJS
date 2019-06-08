const _ = require('lodash');

const users = [
  {
    name: 'John',
    age: 30,
    isActive: false,
  },
  {
    name: 'Jane',
    age: 25,
    isActive: true,
  },
  {
    name: 'Jim',
    age: 28,
    isActive: true,
  },
];

// return youngest user that is active
const getYoungestUserMessage = (users) => {
  const activeUser = _.filter(users, 'isActive');
  const sortedActiveUsers = _.orderBy(activeUser, ['age']);
  const firstUser = sortedActiveUsers[0];

  return `${firstUser.name} is ${firstUser.age}`;
};

console.log(getYoungestUserMessage(users));

// same result using lodash chain
const chainUsers = _.chain(users)
  .filter('isActive')
  .orderBy(['age'])
  .map(user => `${user.name} is ${user.age}`)
  .head()
  .value();

console.log(chainUsers);
