// Activating Strict Mode
"use strict";

// let hasDriversLicence = false
// let passTest = true

// if (passTest) hasDriversLicence = true
// if (hasDriversLicence) console.log('Now I can Drive')

// function logger() {
//     console.log('I am a Function')
// }
// logger()
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     const juice = `Fruit juice by ${apples} Apples and ${oranges} Oranges`
//     return juice
// }
// console.log(fruitProcessor(3, 5))

// const calAge = birthYear => 2022 - birthYear
// let age = calAge(1994)
// console.log(age)

// const yearUntillRetirement = birthYear => {
//     const age = 2030 - birthYear
//     const retirement = 65 - age
//     return retirement
// }

// const yearUntillRetirement = (birthYear, firstName) => {
//     const age = 2030 - birthYear
//     const retirement = 65 - age
//     return `${firstName} Age is ${age}. Retirement in ${retirement} Years.`
// }

// console.log(yearUntillRetirement(1990, 'Jack'))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Fruit juice by ${applePieces} Piece of Apples and ${orangePieces} Piece of Oranges`
//     return juice
// }
// console.log(fruitProcessor(3, 5))

/*
 Array
*/

// const friends = ['Mark', 'Johathon', 'Stive', 'Pater']
// console.table(friends)

// let newLength = friends.push('Jay')
// friends.unshift("Mike")

// friends.pop()

// console.table(friends)

// let employe = {
//     firstName: "Jons",
//     lastName: "Peter",
//     age: 30,
//     job: "Teacher",
//     friends: ['Michael', 'Johathon', 'Stive']
// }

// employe.location = "Japan"
// employe['twitter'] = '@jonspeterman'

// console.log(`${employe.firstName} has ${employe.friends.length} friends and his best friend is called ${employe.friends[0]}`)

// let nameKey = "Name"

// console.log(employe.firstName)
// console.log(employe['first' + nameKey])
// console.log(employe['last' + nameKey])

// let interestIn = prompt("Choose between firstName, lastName, age, job, friends")

// if (employe[interestIn]) {
//     console.log(employe[interestIn])
// } else {
//     console.log("Wrong Request! Choose between firstName, lastName, age, job, friends")
// }

// const jonas = {
//     firstName: "Jons",
//     lastName: "Peter",
//     birthyear: 1991,
//     job: "Teacher",
//     friends: ['Michael', 'Johathon', 'Stive'],
//     hasDrivingLicense: true,
//     calcAge: function () {
//         this.age = 2022 - this.birthyear
//         return this.age
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license`
//     }
// }


// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas.getSummary())

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---- Starting Exercise ${exercise} ----`)
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting Weight Repetition ${rep}`)
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//     console.log(`You Rolled a Dice ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
// }