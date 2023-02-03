// Challenge #1

/*
* Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

* Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

// Variable

const massMarks = 95
const heightMarks = 1.88

const massJohn = 85
const heightJohn = 1.76

const BMIMarks = massMarks / heightMarks ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMarks > BMIJohn

console.log('BMI (Body Mass Index) of Marks is: ' + BMIMarks)
console.log('BMI (Body Mass Index) of John is: ' + BMIJohn)
console.log('markHigherBMI: ' + markHigherBMI)