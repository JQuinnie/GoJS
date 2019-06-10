/* eslint no-console: 'off' */

console.log('Hello, world!');

// Challenge 1: Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2: Create a function addS that accepts one input and adds an 's' to it.
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

/* Challenge 3: Create a function called map that takes two inputs: an array of numbers (a list of numbers) a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = callback(array[i]);
  }
  return newArr;
  // return array.map(e => callback(e));
  // array.forEach((e) => {
  //   console.log(callback(e));
  // });
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4: The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

// Extension 1
function mapWith(array, callback) {}

// Extension 2
function reduce(array, callback, initialValue) {}

// Extension 3
function intersection(arrays) {}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

// Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
