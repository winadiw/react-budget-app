const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject("ERROR WOI");
  }, 2500);
});

console.log("Before");

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.error('error:', error);
})

console.log("After");