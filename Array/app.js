numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array("HI", "Welcome");
// console.log(moreNumbers);

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetMoreNumber = Array.of(1, 2, 3);
// console.log(yetMoreNumber);

// const moreNumbers = Array.from([1, 2, 3]);
// console.log(moreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const moreNumbers = Array.from("HI");
console.log(moreNumbers);

const hobbies = ["Cookings", "Sports"];
const personalData = [30, "Max", { moreDetail: [] }];

const analyticData = [
  [1, 1.16],
  [-5.4, 2.1],
];

for (const data of analyticData) {
  for (const datapoints of data) {
    console.log(datapoints);
  }
}

console.log(personalData[1]);
