"use strict";

// calculate average
const calcAverage = (a, b, c) => (a + b + c) / 3

const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins Win (${avgDolhins} vs. ${avgKoalas})`)
    }
    else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas Win (${avgKoalas} vs. ${avgDolhins})`)
    }
    else {
        console.log(`No team wins....`)
    }
}

const scoreDolhins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

console.log(scoreDolhins, scoreKoalas)
checkWinner(scoreDolhins, scoreKoalas)
