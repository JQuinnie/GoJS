/* eslint-disable func-names, no-console */

function a() {
  console.log('a - hi');
}

a.call(); // shorthand way is a()
a.apply(); // does similar to call()

const wizard = {
  name: 'Merlin',
  health: 100,
  heal() {
    return this.health = 100;
  },
};

const archer = {
  name: 'Robin Hood',
  health: 30,
};

wizard.heal();

// use call and apply to borrow methods, the heal method from the wizard for the archer
console.log('Before ', archer);
wizard.heal.call(archer); // call heal on wizard to bind to archer, archer borrows from wizard, health method
console.log('After', archer);

// call can have arguments passed in, apply uses an array to pass in arguments
const wizard1 = {
  name: 'Merlin',
  health: 100,
  heal(arg1, arg2) {
    return this.health += arg1 + arg2;
  },
};

const archer1 = {
  name: 'Robin Hood',
  health: 30,
};

console.log('Before', archer1);
wizard1.heal.apply(archer1, [100, 30]);
console.log('After', archer1);

// bind allows you to store value of this keyword/function for later use
// bandaid to fix idea of dynamically scoped this keyword that ruin lexical scope
const wizard2 = {
  name: 'Merlin',
  health: 100,
  heal(arg1, arg2) {
    return this.health += arg1 + arg2;
  },
};

const archer2 = {
  name: 'Robin Hood',
  health: 30,
};

console.log('Before', archer2);
const healArcher = wizard1.heal.bind(archer2, 100, 100);
healArcher();
console.log('After', archer2);

// call and apply are useful for borrow methods from an object
// bind useful to call functions later on with a certain context or certain this keyword
