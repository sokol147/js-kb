// Immediately Invoked Function Expression
(function () {
  var aName = "Sam"; // Create it's own independent scope
})();
// console.log(aName);

// callback
function aCb(string) {
  return string;
}

function withCallback(string, cb) {
  cb(string);
}

withCallback("lol", aCb);

// memoization
const memoizedAdd = () => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log("return n from cache");
      return cache[n];
    } else {
      console.log("calculating n");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};

const newAdd = memoizedAdd();
console.log(newAdd(9));
console.log(newAdd(9));

// Chaining
const chainingObj = {
  x: 1,
  addNumber: function (num) {
    this.x + num;
    return this;
  },
  multiplyBy: function (num) {
    this.x * num;
    return this;
  },
};

let chainingResult = chainingObj.addNumber(10).multiplyBy(2);
console.log(chainingResult);

// Currying
function curryingTwo(a) {
  return (b) => {
    return a + b;
  };
}
console.log(curryingTwo(2)(4));

function curryingMany(a) {
  let currentSum = a;

  const f = (b) => {
    currentSum += b;
    return f;
  };

  f.toString = function () {
    return currentSum;
  };

  return f;
}
console.log(curryingMany(2)(3)(4)(5));

function curryingWrapper(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sumCurrying(x) {
  return function (y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return arguments.callee;
    } else {
      return x;
    }
  };
}

console.log(sumCurrying(1)(20)(3)());
