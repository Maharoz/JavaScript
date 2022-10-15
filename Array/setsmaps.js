// const ids = new Set([1, 2, 3]);
// ids.add(2);
// console.log(ids.has(1));

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
// console.log(personData);
// console.log(personData.get(person1));

// for (const entry of personData.entries()) {
//   console.log(entry);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);

console.log(persons);

const personData = new WeakMap();
personData.set(person, "extra info");
person = null;
