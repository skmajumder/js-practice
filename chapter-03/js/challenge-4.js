'use strict';

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {

    let tip = calcTip(bills[i])
    tips.push(tip)

    let total = tip + bills[i]
    totals.push(total)

    console.log(`---- Bill Number ${i + 1} ----`)
    console.log(`Bill: ${bills[i]}`)
    console.log(`Tip: ${tips[i]}`)
    console.log(`Total: ${totals[i]}`)
    console.log('---------')
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(numbers))
console.log(calcAverage(totals))
console.log(calcAverage(tips))
