// numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array("HI", "Welcome");
// console.log(moreNumbers);

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetMoreNumber = Array.of(1, 2, 3);
// console.log(yetMoreNumber);

// const moreNumbers = Array.from([1, 2, 3]);
// console.log(moreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const moreNumbers = Array.from("HI");
// console.log(moreNumbers);

// const hobbies = ["Cookings", "Sports"];
// const personalData = [30, "Max", { moreDetail: [] }];

// const analyticData = [
//   [1, 1.16],
//   [-5.4, 2.1],
// ];

// for (const data of analyticData) {
//   for (const datapoints of data) {
//     console.log(datapoints);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// hobbies[5] = "Reading";
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, "Good food");
// console.log(hobbies);

// const removedElements = hobbies.splice(0, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// //const storedResults = testResults.slice(0, 2);

// const storedResults = testResults.concat([3.99, 2]);
// testResults.push(5.91);

// console.log(storedResults, testResults);
// concat.log(testResults.indexOf(1.5));
const personData = [{ name: "Max" }, { name: "Manuel" }];

const manuel = personData.find((person, idx, persons) => {
  return person.name === "Manuel";
});

manuel.name = "Anna";

console.log(manuel, personData);

const maxIndex = personData.findindex((person, idx, persons) => {
  return person.name === "Max";
});

console.log(maxIndex);
//console.log(personData.indexOf({ name: "Max" }));
