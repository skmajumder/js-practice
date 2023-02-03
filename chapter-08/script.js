'use strict';

// function calcAge(birthYear) {
//     const age = 2022 - birthYear
//     return `${firstName} is ${age} years old`
// }
//
// const firstName = 'Nick'
// console.log(calcAge(1990))

/*  Temporal Dead Zone (TDZ) */

// const myName = 'Jonas'
//
// if (myName === 'Jonas') {
//     console.log(`${myName} is a ${job}`) // ReferenceError: Cannot access 'job' before initialization . We get this error because of TDZ
//     const age = 2022 - 1990
//     console.log(age)
//     const job = 'teacher'
//     console.log(x)
// }

// console.log(this)

// const calcAge = function (birthYear) {
//     console.log(2022 - birthYear)
//     // console.log(this)
// }
// calcAge(1990)
//
// const calcAgeArrow = birthYear => {
//     console.log(2022 - birthYear)
//     // console.log(this)
// }
// calcAgeArrow(1990)

// const jonas = {
//     birthYear: 1991,
//     calAge: function () {
//         console.log(this)
//         console.log(2037 - this.birthYear)
//     },
// }
// jonas.calAge()

// const matilda = {
//     birthYear: 2017
// }
//
// matilda.calAge = jonas.calAge
//
// matilda.calAge()
//
// const f = matilda.calAge

// var firstName = 'Matilda'

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calAge: function () {
//         console.log(2037 - this.year)
//
//         // const self = this
//         // const isMillennial = function () {
//         //     // console.log(self)
//         //     console.log(self.year >= 1981 && self.year <= 1996)
//         //     // console.log(this.year >= 1981 && this.year <= 1996)
//         // }
//
//         const isMillennial = () => {
//             // console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillennial()
//     },
//     greet: () => {
//         console.log(this)
//         console.log(`Hey, ${this.firstName}`)
//     },
// }
// jonas.calAge()

// jonas.greet()

// Argument Keyword

// const addExpr = function (a, b) {
//     console.log(arguments)
//     return a + b
// }
//
// console.log(addExpr(2, 3))
// console.log(addExpr(2, 3, 4, 5))
//
// const addArrow = (a, b) => {
//     console.log(arguments)
//     return a + b
// }
// console.log(addArrow(4, 5))

// const jonas = {
//     name: 'Jonas',
//     age: 30
// }
//
// const friend = jonas
// friend.age = 27
//
// console.log('Jonas: ', jonas)
// console.log('Friend', friend)

// let lastName = 'Williams'
// let oldLastName = lastName
// lastName = 'Davis'

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 25,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Jessica: ', jessica)
console.log('Jessica Copy: ', jessicaCopy)