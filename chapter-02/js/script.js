// const inputYear = '1991'

// console.log(inputYear + 18)
// console.log(typeof(Number(inputYear) + 18))
// console.log(typeof(inputYear))
// console.log(typeof NaN)
// console.log('23' - '10' - 3)

// let day
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         console.log(day)
//         break;
//     case 1:
//         day = "Monday";
//         console.log(day)
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log(day)
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log(day)
//         break;
//     case 4:
//         day = "Thursday";
//         console.log(day)
//         break;
//     case 5:
//         day = "Friday";
//         console.log(day)
//         break;
//     case 6:
//         day = "Saturday";
//         console.log(day)
//     default:
//         console.log("Not a Valid Day!")
// }

// const age = 25

// age >= 18 ? console.log('Ready for driving license') : console.log('Wait some year')

// "use strict";

// let x = 3.14;
// y = 3.14;

// function testFn() {
//   const x = 10;
//   console.log(x);
// }

// const test = testFn()

// * Function as First-Class Citizens
// function greet(name) {
//   return `Hello ${name}`;
// }

// function processUserInput(callback) {
//   const name = "Shuvo";
//   console.log(callback(name));
// }
// processUserInput(greet);

// * Higher-Order Functions
// function greeting(greet) {
//   return function (name) {
//     console.log(`${greet}, ${name}`);
//   };
// }

// const helloShuvo = greeting("Hello");
// helloShuvo("Shuvo");

// greeting("Hello")("Shuvo");

// * Closures
// function outerFunction(outerVariable) {
//   return function (innerVariable) {
//     console.log(
//       `Outer Variable: ${outerVariable}, Inner Variable: ${innerVariable}`
//     );
//   };
// }

// outerFunction("Hello")("Shuvo");

// * Higher-Order Functions Use Cases

// const numbers = [1, 2, 3, 4];
// const double = numbers.map((n) => n * 2);

// console.log(double);

// const withLogging =
//   (fn) =>
//   (...args) => {
//     console.log(`Arguments: ${args}`);
//     return fn(...args);
//   };

// const withLogging = function (fn) {
//   return function (...args) {
//     console.log(`Arguments: ${args}`);
//     return fn(...args);
//   };
// };

// const add = (a, b) => a + b;
// const addWithLogging = withLogging(add);

// console.log(addWithLogging(2, 3));

// * Currying Use Cases:

// const add = (a) => (b) => a + b;
// const add = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// const addTwo = add(2);

// console.log(addTwo(3));

// const ERROR = "ERROR";
// const INFO = "INFO";
// const WARN = "WARN";
// const DEBUG = "DEBUG";

// const log = function (level) {
//   // Define an emoji map for log levels
//   const emojiMap = {
//     ERROR: "❌",
//     INFO: "ℹ️",
//     WARN: "⚠️",
//     DEBUG: "🐞",
//   };
//   return function (message) {
//     const emoji = emojiMap[level] || "";
//     return `[${level} ${emoji}]: ${message}`;
//   };
// };

// const logError = log(ERROR);
// const logInfo = log(INFO);
// const logWarn = log(WARN);
// const logDebug = log(DEBUG);

// console.log(logError("This is an Error message"));
// console.log(logInfo("This is an Info message"));
// console.log(logWarn("This is a Warning message"));
// console.log(logDebug("This is a Debug message"));

// const LOG_LEVELS = [
//   { key: "ERROR", emoji: "❌" },
//   { key: "INFO", emoji: "ℹ️" },
//   { key: "WARN", emoji: "⚠️" },
//   { key: "DEBUG", emoji: "🐞" },
// ];

// const emojiMap = new Map(LOG_LEVELS.map(({ key, emoji }) => [key, emoji]));

// const log = function (level) {
//   return function (message) {
//     const emoji = emojiMap.get(level) || "";
//     return `[${level} ${emoji}]: ${message}`;
//   };
// };

// const logger = Object.fromEntries(
//   LOG_LEVELS.map(({ key }) => [key.toLowerCase(), log(key)])
// );

// console.log(logger.error("This is an Error message"));
// console.log(logger.info("This is an Info message"));
// console.log(logger.warn("This is an Warn message"));
// console.log(logger.debug("This is an DEBUG message"));

// * Recursion
// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(1));

// (function () {
//   console.log("IIFE (Immediately Invoked Function Expressions)");
// })();

// const Counter = () => {
//   let count = 0;

//   return {
//     increase: function () {
//       count++;
//       console.log(count);
//     },
//     decrease: function () {
//       count--;
//       console.log(count);
//     },
//     reset: function () {
//       count = 0;
//       console.log(count);
//     },
//   };
// };

// const counter = Counter();

// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();
// counter.decrease();
// counter.reset();

const CounterIIFE = (() => {
  let count = 0;

  return {
    increase: () => {
      count++;
      console.log(count);
    },
    decrease: () => {
      count--;
      console.log(count);
    },
    reset: () => {
      count = 0;
      console.log(count);
    },
  };
})();

CounterIIFE.increase();
CounterIIFE.increase();
CounterIIFE.increase();
CounterIIFE.increase();
