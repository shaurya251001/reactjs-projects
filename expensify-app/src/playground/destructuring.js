// // console.log("Destructuring in action!");

// const person = {
//   name: "Shaurya",
//   age: 18,
//   location: {
//     city: "Jbp",
//     temp: 44,
//   },
// };
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age} years old`);

// const { city, temp: temperature } = person.location;
// if (typeof temperature !== "undefined" && typeof city !== "undefined")
//   console.log(`Its ${temperature} in ${city}`);
// //just in case you did'nt want to use the names of the objects methods'.

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//Array destructuring

const address = [
  "1200 S Juniper Street",
  "Philadelphia",
  "pennyslyvania",
  "20000",
];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}`);

const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.75"];

const [ind_item, , med_price] = item;
console.log(`A medium ${ind_item} costs ${med_price}`);
