function Person(name) {
  if (name) {
    this.options.name = name;
  }
}

Person.prototype.options = {
  name: "default",
};

let foo = new Person("foo");
let bar = new Person("bar");

console.log(foo);
// console.log(bar);
console.log(bar.options.name);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const animal = {
  run: () => {
    console.log("can run");
    return "can run";
  },
};

const rabbit = {
  jump: () => {
    console.log("can jump");
    return "can jump";
  },
};

rabbit.__proto__ = animal;
rabbit.run();

// ES6 prototype inheritance

class Human {
  canWalk() {
    console.log("can walk");
    return true;
  }
}

class Man extends Human {
  constructor(name) {
    super();
    this.name = name;
  }
}

const man = new Man("Vlad");
console.log(man);
