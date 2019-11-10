// How to reuse code with OOP

// Solution 1. Generate objects using functions
// but each time we create a new user we make space in our computer's memory for all our data and functions, but our functions are just copies
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator('Will', 5);
user1.increment();
console.log(user1.score);

// Solution 2. Using the prototypal nature of javascript
// stores our increment function in just one object and have interpreter, if it doesn't find the function on user1, look up to that object to check if its there
function userCreatorProto(name, score) {
  const newUser = Object.create(userFunctionStore); // creates a special bond to userFunctionStore, the prototype chain bond
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

let userFunctionStore = {
  increment() { this.score++; },
};

const user2 = userCreatorProto('Bill', 2);
user2.increment();
console.log(user2.score);

// Solution 3. when you call the constructor function with new in front, 2 things get automated
// 1. create a new object
// 2. return the new object
function UserCreatorNew(name, score) {
  this.name = name;
  this.score = score;
}

UserCreatorNew.prototype; // {}
UserCreatorNew.prototype.increment = function () {
  this.score++;
};

// new keyword will create an empty object and assign that empty object of lable 'this'
// and also creates a bond, prototype function with new object
// and also automatically returns out that new object
// this = Object.create(userCreator.prototype) => return this
const user3 = new UserCreatorNew('Jill', 6);
user3.increment();
console.log(user3.score);


// Solution 4. class 'syntactic sugar'
class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

const user4 = new User('Gill', 2);
user4.increment();
console.log(user4.score);

// codesmith.io/hardparts
