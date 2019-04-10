// determine how many little programs are here: 2, one for the whole thing, one for the function testDelay

let repetitions = 0;
const totalRepetitions = 1000;
const requestedDelay = 0;

let totalActualDelay = 0;

testDelay();

function testDelay() {
  if (repetitions++ > totalRepetitions) {
    const actualDelay = totalActualDelay / totalRepetitions;
    alert(
      `Requested Delay: ${requestedDelay}, Actual Average Delay: ${actualDelay}`
    );
    return;
  }

  const start = new Date();
  setTimeout(() => {
    const actualDelay = new Date() - start;
    totalActualDelay += actualDelay;
    testDelay();
  }, requestedDelay);
}
