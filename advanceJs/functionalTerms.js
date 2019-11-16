// Imperative (jQuery, React)
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

// Declarative
[1, 2, 3].forEach(item => console.log(item));


// immutability
const obj = { name: 'Jim' };

function clone(obj) {
  return { ...obj };
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Sally';
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj); // creating a clone, returning a copy
obj.name = 'Rex'; // mutation of original object

// higher order function, a function that does two things
// HOF takes one or more functions as arguments or returns a function as a result (often called a cb)
const hof = () => () => 5;
hof();
const hofhof = fn => fn(5);
hofhof(x => x);

// closure, mechanism for containing state, define a function inside another function and expose the inner function
// either by returning it or passing it to another function so that we can use that variable
// specific use case - private variable creation and access by others but dont modify
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFn = closure();
incrementFn();

// currying - techniqe of translating the evaluation of a function that takes multi args into evaluating a sequence of functions
// each with a single arg, func that takes multi params modify it to a func that takes one param at a time
const multiply = (a, b) => a * b;
multiply(3, 4);
const curriedMultiply = a => b => a * b;
curriedMultiply(5)(3);
// here is the usefulness
const curriedMultiplyBy5 = curriedMultiply(5); // this is only run once
curriedMultiplyBy5(4);

// partial application, similar to currying, partially apply a function
// process of producing a function with a smaller number of parameters
const multiply1 = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply1.bind(null, 5);
partialMultiplyBy5(4, 10);

// Compose and pipe, compose different functions together
// a system design principle that deals with the relationship between components, they can be selected and assembled in various combinations
const compose = (f, g) => data => f(g(data)); // write our own compose function
const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);
const multipleBy3AndAbsolute = compose(multiplyBy3, makePositive); // compose different functions together
multipleBy3AndAbsolute(-50);

// pipe, same as compose, instead of going from right to left it goes from left to right
const pipe = (f, g) => data => g(f(data));

// arity - the number of args a function takes
