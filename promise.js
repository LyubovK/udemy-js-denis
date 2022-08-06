const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 10);
});
console.log(promise);
promise
  .then((x) => {
    console.log(x);
    return x;
  })
  .then((y) => console.log(y * 2));
