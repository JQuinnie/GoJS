// example of closure
// Closure are nested function which has access to the outer scope
// After the outer function is returned, by keeping a reference to the inner function (the closures) we prevent the outer scope to be destroyed.

function buildName(name) {
  const greeting = `Hello, ${name}!`;
  const sayName = function () {
    const welcome = `${greeting} Welcome!`;
    console.log(greeting);
  };
  return sayName;
}

const sayMyName = buildName('John');
sayMyName(); // Hello, John. Welcome!
sayMyName(); // Hello, John. Welcome!
sayMyName(); // Hello, John. Welcome!

// Another extremely important thing to understand is that a closure is created at every function call. Whenever I’m using the closure, it will reference the same outer scope. If any variable is change in the outer scope, than the change will be visible in the next call as well.
function buildContor(i) {
  let contor = i;
  const displayContor = function () {
    console.log(contor++);
    contor++;
  };
  return displayContor;
}

const myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
const myOtherContor = buildContor(10);
myOtherContor(); // 10
myOtherContor(); // 11

// myContor was not affected
myContor(); // 4

// // Things to remember
// A closure is an inner function which has access to the outer function scope
// Every call of the outer function creates a new closure
// Every call of the closure interacts with the same outer scope – which is persistent
