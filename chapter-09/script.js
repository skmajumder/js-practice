'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ** ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/**
 * @description Strings
 */

const capitalizationName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const word of names) {
    // nameUpper.push(word[0].toUpperCase() + word.slice(1));
    nameUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

// capitalizationName('jessica ann smith davis');
// capitalizationName('shuvo majumder');

// ** Padding a string

// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));
// console.log('JavaScript'.padStart(15, '+'));

const maskCreditCard = function (cardNumber) {
  const str = cardNumber + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// console.log(maskCreditCard('5039416734830229'));
// console.log(maskCreditCard(38428802958024));
// console.log(maskCreditCard('3659953406906931'));

// ** Repeat a string

const weatherMessage = 'Bad weather... All Departures Delayed... ';
// console.log(weatherMessage.repeat(5));

const planesInLine = planeNumber => {
  console.log(
    `There are ${planeNumber} planes in line ${'✈ '.repeat(planeNumber)}`
  );
};

// planesInLine(20);

// ** String split

// console.log('what+a+beautiful+day+it+is'.split('+'));
// console.log('what+a+beautiful+day+it+is'.split(' '));
// console.log('what a beautiful day it is'.split(' '));

// const [firstName, lastName] = 'John Deo'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName].join(' ');
// console.log(newName);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// ** Replacing (NOTE: You can replace the whole word)

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// ** Replace all

// const myString = 'I like dogs because dogs are adorable!';
// const updateMyString = myString.replaceAll('dogs', 'cats');
// console.log(updateMyString);
// console.log(myString.replace(/dogs/g, 'cats'));

// const userName = '  jonas ';
// console.log(userName.trim());

// const passenger = 'jOnAs'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// console.log(airline);
// console.log(airline.length);
// console.log(airline[8]);
// console.log(plane[2]);

// ** Check email address

// const email = 'hello@jonas.io';
// const loginEmail = '  hEllo@jonas.io \n ';

// const trimEmail = loginEmail.trim();
// const lowerEmail = trimEmail.toLowerCase();
// console.log(lowerEmail);

// const normalizedEmail = loginEmail.trim().toLowerCase();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// console.log('B737'.length);
// console.log('B737'[1]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   // NOTE: 'B' and 'E' are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got he middle seat 😁');
//   } else {
//     console.log('You got lucky 😎');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('20C');
// checkMiddleSeat('10E');

// console.log(new String('jonas'));

// NOTE: JS convert the 'string' into object at the beginning
// console.log(typeof new String('jonas'));

// NOTE: JS return the string object again to the 'string'
// console.log(typeof new String('jonas').slice(0));

/**
 * @description Maps Iteration
 */

// const question = new Map([
//   ['question', "What's the best programming language in the world?"],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [4, 'Python'],
//   ['correct', 3],
//   [true, 'Correct Answer 🍕🍗'],
//   [false, 'Try again 🙂'],
// ]);

// console.log(question);

// ** Convert object into maps

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// ** Iterate a Map

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const quizAnswer = Number(prompt('Answer: '));
// const quizAnswer = 3;
// console.log(question.get(quizAnswer === question.get('correct')));

// // ** Convert maps into array

// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/**
 * @description Map
 */

// const restaurantMap = new Map();
// restaurantMap.set('name', 'Classico Italino');
// restaurantMap.set(1, 'Via Angelo Tavanti 23, Firenze, Italy');
// restaurantMap.set(2, 'Lisbon, Portugal');
// restaurantMap
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('starterMenu', [
//     'Focaccia',
//     'Bruschetta',
//     'Garlic Bread',
//     'Caprese Salad',
//   ])
//   .set('mainMenu', ['Pizza', 'Pasta', 'Risotto'])
//   .set(true, 'We are open 😃')
//   .set(false, 'We are closed 🙂');

// console.log(restaurantMap);

// console.log(restaurantMap.get('name'));
// console.log(restaurantMap.get(true));
// console.log(restaurantMap.get('categories'));

// for (const [key, value] of restaurantMap) {
//   console.log(value);
// }

/**
 * @description set
 */

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Butter chicken',
//   'Pizza',
//   'Pasta',
// ]);
// console.log(orderSet);
// console.log(orderSet.size);

// // console.log(new Set('set'));

// const staff = [
//   'waiter',
//   'chef',
//   'chef',
//   'waiter',
//   'manager',
//   'cleaner',
//   'parcel',
// ];

// console.log(staff);
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

/**
 * @description Looping Objects_ Object Keys, Values, and Entries
 */

// ** property name

// const objProperties = Object.keys(openingHours);
// let openStr = `We are open on ${objProperties.length} days: `;

// for (const day of objProperties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// ** property value

// const objValues = Object.values(openingHours);
// console.log(objValues);

// for (const { open, close } of objValues) {
//   console.log(open, close);
// }

// ** Entries object

// const objEntries = Object.entries(openingHours);
// // console.log(objEntries);

// for (const [day, { open, close }] of objEntries) {
//   console.log(`On ${day}, We are open at ${open} and close at ${close}`);
// }

/**
 * @description Optional Chaining (?.)
 */

// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, We Open at: ${open}`);
// }

// ** Optional Chaining for method

// console.log(restaurant.order?.(0, 1) ?? 'Method Not Exist');
// console.log(restaurant.orderRisotto?.() ?? 'Method Not Exist');

// ** Optional Chaining for Array

// const users = [

// ];
// console.log(users[0]?.name ?? 'User array empty');

/**
 * @description Enhanced Object Literals
 */

/**
 * @description Looping Arrays The for-of Loop
 */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i]);
// }

// console.log('-- with for-of loop --');

// for (const menuItem of menu) console.log(menuItem);

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`);
// }

// console.log([...menu.entries()]);

/**
 * @description Logical Assignment Operators
 */

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// ** With new 'OR' logical assignment operator

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// ** With new 'Nullish Coalescing' logical assignment operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

/**
 * @description Nullish Coalescing Operator (??)
 * Nullish: null and undefined, NOT include 0 or ' ' string
 */

// restaurant.numGuest = 0;

// const guestNumber2 = restaurant.numGuest || 10;
// console.log(guestNumber2);

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

/**
 * @description Short Circuiting (&& and ||)
 */

// ** We can use 'OR' operator without Boolean
// 3 properties of 'Logical operators'
// 1. Use any data type, 2. Return any data type, 3. Short Circuiting

// ** Short Circuiting with 'OR' operator

// console.log(3 || 'JavaScript');
// console.log('' || 'JavaScript');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(0 || 2);
// console.log(undefined || 0 || '' || 'JavaScript' || 23 || null);

// ** Set default value in 'OR' by Short Circuiting

// const guestNumber = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guestNumber);

// restaurant.numGuest = 0;

// const guestNumber = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guestNumber);

// const guestNumber2 = restaurant.numGuest || 10;
// console.log(guestNumber2);

// ** Short Circuiting by 'AND'

// console.log(0 && 'JavaScript');
// console.log(7 && 'JavaScript');
// console.log('Hello' && 20 && undefined && '' && null && true);

// ** Practical example short circuiting with 'AND'

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Chess');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Chess');

/**
 * @description Rest Pattern and Parameters
 */

// ** 'SPREAD', because on RIGHT side of =

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// ** 'REST', because on LEFT side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// ** 'REST' & SPREAD' can use both side of the ' = '

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// ** 'REST' in object

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);

// ** 'REST' in function as Parameters

// const addNumbers = function (...numbers) {
//   let sum = 0;
//   for (const i of numbers) {
//     sum += i;
//   }
//   console.log(`Sum of ${numbers} is: ${sum}`);
// };

// addNumbers(1, 9, 5);
// addNumbers(6, 4, 9, 1, 8);
// addNumbers(1, 6, 8, 2, 4, 16, 10, 8);

// const numberSet = [23, 22, 27, 26, 30, 24, 21, 28];
// addNumbers(...numberSet);

// ** 'REST' in function as Parameters

// restaurant.orderPizza('Cheese', 'Mushroom', 'Olives', 'Onion');
// restaurant.orderPizza('Cheese');

/**
 * @description Spread Operator (...)
 */

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// ** Copy array (Shallow copy)

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// ** Copy 2 or more array

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// ** Spread string

// const str = 'JavaScript';
// console.log(...str);
// const letters = [...str];
// console.log(letters);

// ** Spread function parameters

// const pastaIngredients = ['Eggs', 'Olive oil', 'Mushroom'];
// restaurant.orderPasta(...pastaIngredients);

// ** Spread object

// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// ** Shallow copy of object by Spread

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/**
 * @description Destructuring Object
 */

// ** Destructuring object by function

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   time: '22:30',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// ** Variable name different from the property name

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// ** Set default values

// const {
//   menu = [],
//   starterMenu: starter = [],
//   mainMenu: mainCourse = [],
//   categories: tags = [],
// } = restaurant;
// console.log(menu, starter, mainCourse, tags);

// ** Mutating variable while destructuring object

// let a = 111;
// let b = 888;
// const obj = { a: 23, b: 25, c: 27 };
// ({ a, b } = obj);
// console.log(a, b);

// ** Destructuring nested object

// const { name, categories, openingHours } = restaurant;
// const {
//   fri: { open: openTime, close: closeTime },
// } = openingHours;
// console.log(openTime, closeTime);

/**
 * @description Destructuring Arrays
 */

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// ** Destructuring assignment

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// ** Destructuring value from 'categories' array' in 'restaurant' obj

// const [first, second, third, fourth] = restaurant.categories;
// console.log(first, second, third, fourth);
// const [first, second, , fourth] = restaurant.categories;
// console.log(first, second, fourth);

// ** Switching value

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// ** Destructuring from function

// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// ** Destructuring Nested array

// const nestedArray = [2, 5, [8, 10]];

// const [i, , j] = nestedArray;
// console.log(i, j);

// const [i, , [j, k]] = nestedArray;
// console.log(i, j, k);

// ** Default value for Destructuring array

// const [p = 0, q = 0, r = 0] = [8, 9];
// console.log(p, q, r);
