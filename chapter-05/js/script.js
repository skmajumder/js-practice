// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1
// Calculate the temperature amplitude. Remember sometime sensor give an error.
const temperatures = [3, -2, -6, -1, 'error', 9, 3, 17, 15, 14, 9, 5];

// 1) Understand the problem
// 1.1) What is temperature amplitude? Ans: Difference between Max and Min Temp
// 1.2) How to calculate Max and Min Temp?
// 1.3) What's a sensor error? What to do with it?

// 2) Breaking up into sub-problem
// 2.1) How to ignore error?
// 2.2) Find max value in temp array
// 2.3) Find min value in temp array
// 2.4) Subtract min value from max (amplitude) in temp array, and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     let currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(`Height Temp: ${max}, Lowest Temp: ${min}`);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(`Temperature Amplitude: ${amplitude}`);

// PROBLEM 2
// Function should now receive 2 arrays 0f temps.

// const calcTempAmplitude = function (arr1, arr2) {
//   const temps = Array.from(new Set(arr1.concat(arr2)));

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     let currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(`Height Temp: ${max}, Lowest Temp: ${min}`);
//   return max - min;
// };

// const array1 = [3, -2, -6, -1, 'error', 9, 3, 17, 15, 14, 9, 5];
// const array2 = [20, 22, -10, -14, 15, 5];

// const amplitude = calcTempAmplitude(array1, array2);

// console.log(`Temperature Amplitude: ${amplitude}`);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsious',
    // value: Number(prompt('Input a Number')),
    value: 10,
  };

  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


const calcTempAmplitudeBug = function (arr1, arr2) {
  const temps = Array.from(new Set(arr1.concat(arr2)));

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(`Height Temp: ${max}, Lowest Temp: ${min}`);
  return max - min;
};

const array1 = [3, -2, -6, -1, 'error', 9, 3, 17, 15, 14, 9, 5];
const array2 = [20, 22, -10, -14, 15, 5];

const amplitudeBug = calcTempAmplitudeBug(array1, array2);

console.log(`Temperature Amplitude: ${amplitudeBug}`);
