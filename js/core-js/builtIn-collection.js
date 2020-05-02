const newSet = new Set(); // let you store uniq values of any type (object or primitives)
const newMap = new Map(); //

newSet.add(1);
newSet.add("some text");
newSet.size; // 2
newSet.add({ a: 2, b: 3 });
newSet.delete(1); // remove 1 from Set
console.log(newSet);

newMap.set("string", "String");
newMap.set(1, 147);
newMap.set({ a: "test" }, {});
newMap.size;
newMap.get("string");

const wm1 = new WeakMap(); // keys can be only object
wm1.set({}, "test");

const ws1 = new WeakSet(); // values can be only object
ws1.set({});
