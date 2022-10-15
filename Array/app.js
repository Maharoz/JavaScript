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

//console.log(testResults.includes(10.99));

// const personData = [{ name: "Max" }, { name: "Manuel" }];

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// });

// manuel.name = "Anna";

// console.log(manuel, personData);

// const maxIndex = personData.findindex((person, idx, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex);
//console.log(personData.indexOf({ name: "Max" }));

// const prices = [10.99, 5.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 6.59];
const tax = 0.19;

const taxAdjustedprices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
});

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices.reverse());

const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

// const sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);
const sum = prices.reduce((prevValue, curValue) => {
  return prevValue + curValue;
}, 0);

console.log(sum);
