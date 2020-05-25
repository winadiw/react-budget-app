const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
    // reject("ERROR!");
  }, 1500);
});

console.log("Before");

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
      // reject("ERROR WOI@@@");
    }, 3000);
  });
}).then((data) => {
  console.log('does this run?', data);
}).catch((error) => {
  console.error('error:', error);
})

console.log("After");