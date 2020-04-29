setTimeout(() => {
  console.log("2");
});
console.log("1");
setTimeout(() => {
  console.log("3");
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setTimeout(() => console.log(1), 1); // second
setTimeout(() => console.log(2), 1000); // fourth
setTimeout(() => console.log(3), 0); // third
console.log(4); // first

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setTimeout(() => {
  console.log(1); // first
  setTimeout(() => console.log(2), 0); // second
}, 500);

setTimeout(() => {
  setTimeout(() => console.log(3), 500); // third
}, 250);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setTimeout(() => {
  console.log(1); // third
}, 300);
Promise.resolve().then(() => console.log(2)); // second
console.log(3); // first

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

new Promise((resolve, reject) => {
  console.log(1); // first
  resolve();
}).then(() => {
  console.log(2); // third
});
console.log(3); // second

// Promises = micro-tasks has more priority then macro-tasks
// setTimeout/setInterval = macro-tasks
