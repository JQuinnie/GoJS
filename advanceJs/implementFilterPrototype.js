// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

// the global Array
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Add your code below this line
  this.forEach((item) => {
    if (callback(item) === true) {
      newArray.push(item);
    }
  });
  // Add your code above this line
  return newArray;
};

const new_s = s.myFilter((item) => item % 2 === 1);
