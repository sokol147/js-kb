let num = 10;
let numberNaN = NaN;
Number.isNaN(NaN); // true
console.log(typeof NaN); // 'number'
console.log(typeof num); // 'number'

let string = "hello world";
console.log(typeof string); // 'string'

let und = undefined;
console.log(typeof und); // 'undefined'

let boolean = true;
console.log(typeof boolean); // 'boolean'

let falsy = null;
console.log(typeof falsy); // 'null'

const symbol42 = Symbol(42);
console.log(typeof symbol42); // 'symbol'

const obj = {
  name: "string",
  age: 42,
};

console.log(typeof obj); // 'object'

const arr = [1, 2, 3, "hell", null, true];
console.log(typeof arr); // 'object'

console.log(Array.isArray(arr)); // true
