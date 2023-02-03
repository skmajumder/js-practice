'use strict';

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const data3 = [3, -2, -6, -1, 'error', 9, 3, 17, 15, 14, 9, 5];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let currentTemp = arr[i];

    if (typeof currentTemp !== 'number') continue;
    str += `${currentTemp}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data1);
printForecast(data2);
printForecast(data3);
