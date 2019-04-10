// how many little programs are here: 1, this example is synchronous even though it looks async

const numbers = [1, 2, 3];

console.log('start');

forEach(numbers, function(number) {
  console.log(number * 2);
});

console.log('end');

function forEach(items, callback) {
  // below is sync
  for (const item of items) {
    callback(item);
  }
  // below is async
  // for (const item of items) {
  //   setTimeout(function(){
  //     callback(item);
  //   })
  // }
}
