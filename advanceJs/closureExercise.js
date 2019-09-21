/* eslint-disable */

// closures allow a function to access variables from an enclosing scope or outer scope env enve after it leaves the scope in which it was decleared because all that matters in JS is where the function was written.

const array = [1, 2, 3, 4];

// let as a block scope
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(`I am at index ${i}`);
  }, 3000);
} // returns 0, 1, 2, 3

// var as a global scope
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(`I am at index ${i}`);
  }, 3000);
} // returns 4, 4, 4, 4

// var used in closure
for (var i = 0; i < array.length; i++) {
  (function (closurei) {
    setTimeout(() => {
      console.log(`I am at index ${closurei}`);
    }, 3000);
  })(i);
} // returns 0, 1, 2, 3


