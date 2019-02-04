function createFlow(array) {
  let i = 0;
  const inner = {
    mext() {
      const element = array[i];
      i++;
      return element;
    },
  };
  return inner;
}

const returnNextElement = createFlow([4, 5, 6]);
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();

// generator function
function* createFlow() {
  yield 4;
  yield 5;
  yield 6;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();

// Dynamically set what data flows to us
function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();

// Async Generator function
function doWhenDataReceived(value) {
  returnNextElement(value);
}

function* createFlow() {
  const data = yield fetch('http://twitter.com/will/tweets/1');
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.then(doWhenDataReceived);
