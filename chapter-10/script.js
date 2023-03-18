'use strict';

/**
 * @description Default Parameters
 */

const bookings = [];

const createBooking = function (
    flightNumber,
    numPassengers = 1,
    ticketPrice = 1000 * numPassengers
) {
    const booking = {
        flightNumber,
        numPassengers,
        ticketPrice,
    };
    console.log(booking);
    bookings.push(booking);
};
// createBooking('LH123')
// createBooking('LH123', 2)
// createBooking('LH123', 2, 1900)

/**
 * @description How Passing Arguments Works Value vs. Reference
 */

const flight = 'LM234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
    DOB: '3/25/90',
    city: 'Lisbon',
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LM999';
    passenger.name = 'Mr. ' + jonas.name;

    if (jonas.passport === 24739479284) {
        console.log('Checked In');
    } else {
        console.log('Wrong Passport');
    }

    console.log(flightNum);
    console.log(passenger.name);
};

// checkIn(flight, jonas)
// console.log(flight)
// console.log(jonas)

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);

/**
 * @description First-Class and Higher-Order Functions
 */

const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = (str) => {
    const [first, ...rest] = str.split(' ')
    return [first.toUpperCase(), ...rest].join(' ')
}

// Higher order function
const transformWord = (string, fn) => {
    console.log('Original Word:', string)
    console.log(`Transform Word: ${fn(string)}`)
    console.log(`Word Transform By: ${fn.name}`)
}

transformWord('JavaScript is the best programming language', upperFirstWord)
