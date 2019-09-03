/* eslint-disable func-names, no-console */
// THIS is the object that the function is a property of
// 1. gives methods access to their object
// 2. execute same code for multiple objecgts

function importantPerson() {
  console.log(`${this.name}!`);
}

const name = 'Jane';

const obj1 = {
  name: 'Cassy',
  importantPerson,
};

const obj2 = {
  name: 'Jessica',
  importantPerson,
};

// lexical scope doesn't matter
importantPerson();
obj1.importantPerson();
obj2.importantPerson();

const a = function () {
  console.log('a', this); // global
  const b = function () {
    console.log('b', this); // global
    const c = {
      hi() {
        console.log('c', this); // c object
      },
    };
    c.hi();
  };
  b();
};
a();

// Function called the function
const newObj1 = {
  name: 'Bill',
  sing() {
    console.log('a', this); // called by newObj.sing(), newObj
    const anotherFunc = function () {
      console.log('b', this); // called by another function, global
    };
    anotherFunc();
  },
};

newObj1.sing();

// bind it with an arrow function
const newObj2 = {
  name: 'Bill',
  sing() {
    console.log('a', this); // called by newObj.sing(), newObj
    const anotherFunc = () => {
      console.log('b', this); // lexically bind by arrow function, newObj
    };
    anotherFunc();
  },
};

newObj2.sing();

// how it was done before arrow functions
const newObj3 = {
  name: 'Bill',
  sing() {
    console.log('a', this); // called by newObj.sing(), newObj
    const anotherFunc = function () {
      console.log('b', this);
    };
    return anotherFunc.bind(this); // use the bind to reference newObj
  },
};

newObj3.sing()();

// make a reference to the newObj when running
const newObj4 = {
  name: 'Bill',
  sing() {
    console.log('a', this); // called by newObj.sing(), newObj
    const self = this; // makes a reference to newObj
    const anotherFunc = function () {
      console.log('b', self);
    };
    return anotherFunc; // use the bind to reference newObj
  },
};

newObj4.sing()();
