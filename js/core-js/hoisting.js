var var1 = "hello";
// under the hood
// var var1;
// var1 = 'hello';
// console.log(var1);

// console.log(var2); // Error var didn't visible outside scope where was declared
function testVar() {
  console.log(var2); // undefined, var hoisted to top of scope where was declared
  if (true) {
    // if didn't create new scope
    console.log(var2); // undefined
    var var2 = "var2";
    console.log(var2); // 'var2'
  }
}
testVar();

function testLet() {
  // console.log(let1); // Error let visible only inside scope
  if (true) {
    // console.log(let1); // Error let didn't hoist to the top of scope
    let let1 = "let1";
    console.log(let1); // 'let1'
  }
}
testLet();

function testConst() {
  // console.log(const1); // Error const visible only inside scope
  if (true) {
    // console.log(const1); // Error const didn't hoist to the top of scope
    let const1 = "const1";
    console.log(const1); // 'const1'
  }
}
testConst();

// Function expressions in JS are not hoisted. const newFun = () => {console.log('test')} not hoisted
testFunc();
function testFunc() {
  console.log("hoisted");
}

var a = 1;
function b() {
  a = 10;
  return;
  function a() {} // Function declaration create local variable and hoist to the top of scope
}
b();
console.log(a); // 1

// function parent() {
//   var hoisted = "I am a variable"; // while declare variable and function with the same name, variable declaration will be ignored
//   function hoisted() {
//     return "I am a function";
//   }
//   return hoisted();
// }
// parent();

var myVar = "foo";
(function () {
  var myVar;
  console.log(`Original value was: ${myVar}`);
  myVar = "bar";
  console.log(`New value is: ${myVar}`);
})();
