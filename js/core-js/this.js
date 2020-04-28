var f = function () {
  this.x = 5; // window.x = 5
  (function () {
    // in IIFE this link to global this
    this.x = 3; // window.x = 3
  })();
  console.log(this.x);
};

var obj = {
  x: 4,
  m: function () {
    console.log(this.x);
  },
  a: () => {
    console.log(this.x);
  },
};

f(); // 3 simple call take this from global scope
new f(); // 5 При вызове функции с использованием ключевого слова new функция выступает в роли конструктора, и в данном случе this указывает на создаваемый объект.
obj.m(); // 4 when function call as object filed this equal to object
obj.a(); // 3 arrow function take this from environment
new obj.m(); // undefined new создает новый объект в котором нет ссылки на this.x
f.call(f); // 5
obj.m.call(f); // 5
obj.a.call(f); // 3 you can't bind this to arrow function

var f2 = function () {
  this.x = 7;
  this.y = {
    f: function () {
      console.log(this.x);
    },
  };
  console.log(this.x);
};

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
f2();

function f3() {
  return this.a;
}

var g = f3.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind only works once!
console.log(h()); // azerty

var o = { a: 37, f: f3, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function arrowTest() {
  this.arrow = "====>";
  return () => {
    console.log(this.arrow);
  };
}

const a = arrowTest();
a();

var arrowVar = "test";

const arrowObj = {
  arrowVar: "===>",
  b: () => {
    console.log(this.arrowVar);
  },
};

arrowObj.b();

const myObject = {
  foo: "Bar",
  func: function () {
    const self = this;
    console.log(this.foo); // Bar
    console.log(self.foo); // Bar
    (function () {
      console.log(this.foo); // undefined
      console.log(self.foo); // Bar
    })();
  },
};

myObject.func();
