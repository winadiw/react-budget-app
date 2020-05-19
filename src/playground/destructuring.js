// Object Destructuring

// const person = {
//   name: "Winadi",
//   age: 24,
//   location: {
//     city: 'Jakarta',
//     temp: 93
//   }
// };

// const {name: firstName = "Anonymous", age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature}C in ${city}.`);

// const book = {
//   title: "book title",
//   author: "123321 author",
//   publisher: {
//     name: "Win"
//   }
// }

// const {name: publisherName = "dkwoakdowa"} = book.publisher;

// console.log(publisherName);

// Array Destructuring

const address = ['ASdjlkwadwa', "321321321", "dwkaldwkal"];

const [street, city, state, zip] = address;

console.log(street, city, state, zip);