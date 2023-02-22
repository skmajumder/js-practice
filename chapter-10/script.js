'use strict';

/**
 * @description Default Parameters
 */

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ** Default Parameters (old ways, before ES6)
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LM123');
// createBooking('LM123', 5);
// createBooking('LM123', 2, 500);
// createBooking('LM123', undefined, 1000);
// createBooking('LM123', null);

/**
 * @description How Passing Arguments Works Value vs. Reference
 */

// function func1(a, b, c) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// }
// func1(1, 2, 3);

// ** Change the object value in function

// const flight = 'LM234';
// const passenger = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
//   DOB: '3/25/90',
//   city: 'Lisbon',
// };

// const checkIN = function (flightNum, passenger) {
//   flightNum = 'LM999';
//   passenger.name = 'Mr. ' + passenger.name;

//   passenger.passport === 24739479284
//     ? alert('Check In')
//     : alert('Wrong Passport');
// };

// checkIN(flight, passenger);
// console.log(flight);
// console.log(passenger);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(passenger);
// checkIN(flight, passenger);

// ** First-Class and Higher-Order Functions

/**
 * @description Functions Accepting Callback Functions
 */

// ** Generic function

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFIrstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // ** Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best programming language', upperFIrstWord);
// transformer('JavaScript is the best programming language', oneWord);

// const high5 = function () {
//   console.log('🖐');
// };

// document.body.addEventListener('click', high5);
// ['Jonas', 'Marta', 'jon'].forEach(high5);
