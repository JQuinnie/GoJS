const _ = require('lodash');

const users = [
  {
    name: 'Jack',
    likes: 15,
  },
  {
    name: 'Jill',
    likes: 20,
  },
  {
    name: 'John',
    likes: 10,
  },
  {
    name: 'Jane',
    likes: 18,
  },
];

// sort the native way by comparison, desc
const sortedUsers = users.sort((user1, user2) => (user1.likes > user2.likes ? -1 : 1));
console.log(sortedUsers);

// using lodash in ascended sort
const sortedUsersAsc = _.orderBy(users, ['likes']);
console.log(sortedUsersAsc);

// using lodash in likes desc and name asc
const sortedUsersDesc = _.orderBy(users, ['likes', 'name'], ['desc', 'asc']);
console.log(sortedUsersDesc);
