/* eslint-disable func-names, no-console */
// function currying - only partially giving a function a parameters
function multiply(a, b) {
  return a * b;
}

// bind will return a function
const multiplyByTwo = multiply.bind(this, 2); // this keyword references global

console.log(multiplyByTwo(4)); // 8
