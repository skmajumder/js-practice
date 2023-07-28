'use strict';

/**
 * @description Default Parameters
 */

// const bookings = [];
//
// const createBooking = function (
//     flightNumber,
//     numPassengers = 1,
//     ticketPrice = 1000 * numPassengers
// ) {
//     const booking = {
//         flightNumber,
//         numPassengers,
//         ticketPrice,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// // createBooking('LH123')
// // createBooking('LH123', 2)
// // createBooking('LH123', 2, 1900)

/**
 * @description How Passing Arguments Works Value vs. Reference
 */

// const flight = 'LM234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284,
//     DOB: '3/25/90',
//     city: 'Lisbon',
// };
//
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LM999';
//     passenger.name = 'Mr. ' + jonas.name;
//
//     if (jonas.passport === 24739479284) {
//         console.log('Checked In');
//     } else {
//         console.log('Wrong Passport');
//     }
//
//     console.log(flightNum);
//     console.log(passenger.name);
// };
//
// // checkIn(flight, jonas)
// // console.log(flight)
// // console.log(jonas)
//
// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000);
// };
//
// // newPassport(jonas);
// // checkIn(flight, jonas);

/**
 * @description First-Class and Higher-Order Functions
 */

// const oneWord = (str) => {
//     return str.replace(/ /g, '').toLowerCase()
// }
//
// const upperFirstWord = (str) => {
//     const [first, ...rest] = str.split(' ')
//     return [first.toUpperCase(), ...rest].join(' ')
// }
//
// // Higher order function
// const transformWord = (string, fn) => {
//     console.log('Original Word:', string)
//     console.log(`Transform Word: ${fn(string)}`)
//     console.log(`Word Transform By: ${fn.name}`)
// }
//
// transformWord('JavaScript is the best programming language', upperFirstWord)
// transformWord('JavaScript is the best programming language', oneWord)

/**
 * @description Functions Returning Functions
 */

// const greet = (greeting) => {
//     return function (name) {
//         console.log(`${greeting}, ${name}`)
//     }
// }
//
// greet('Howdy')('Shuvo')

// const greetArr = greeting => name => console.log(`${greeting}, ${name}`)
// greetArr('Hello')('Mr. Jonas')

/**
 * @description Call and Apply method
 */

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name}, booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Shuvo')
// console.log(lufthansa)

const book = lufthansa.book;

// // call method
// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }
//
// // book.call(eurowings, 23, 'Elizabeth Olsen')
// // console.log(eurowings)
//
// const swiss = {
//     airline: 'Swiss Air Line',
//     iataCode: 'LX',
//     bookings: [],
// }
// book.call(swiss, 23, 'Mary Cooper')
//
// // apply method
// const flightData = [24, 'Elizabeth Winstead']
//
// book.apply(swiss, flightData)
// book.call(swiss, ...flightData)
// console.log(swiss)
//
// //Bind method
// const bookEW = book.bind(eurowings)
// bookEW(23, 'Hailee Steinfeld')
//
// const bookEW23 = book.bind(eurowings, 23)
//
// bookEW23('Jonas')
// bookEW23('Martha')
// console.log(eurowings)

// Event listener

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// const buyPlane = document.querySelector('[data-buy-plane]');
// buyPlane.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
// const addTax = (rate, value) => {
//   return (value = value + value * (rate / 100));
// };
// console.log(addTax(10, 200));
// const addVAT = addTax.bind(null, 23);
// console.log(addVAT(1000));

const addTaxRate = rate => value => {
  return value + value * (rate / 100);
};

const addVAT2 = addTaxRate(23);

console.log(addVAT2(1000));

console.log(addVAT2(100));
console.log(addVAT2(200));
