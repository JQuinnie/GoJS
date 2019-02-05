const createNewFunction = () => {
  const add2 = num => num + 2;
  return add2;
};

const newFunction = createNewFunction();
const result = newFunction(3);

const createFunction = (array) => {
  let i = 0;
  const inner = () => {
    const element = array[i];
    i++;
    return element;
  };
  return inner;
};

const returnNextElement = createFunction([4, 5, 6]);
const element1 = returnNextElement();
const element2 = returnNextElement();

console.log(`Result: ${result}, Element 1: ${element1}, Element 2: ${element2}`);
