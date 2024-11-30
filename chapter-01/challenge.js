/**
 * * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 * */

// const markHeight = 1.69;
// const markMass = 78;

// const johnHeight = 1.95;
// const johnMass = 92;

// // Calculate BMI for Mark
// const BMIMark = markMass / (markHeight * markHeight);

// // Calculate BMI for John
// const BMIJohn = johnMass / johnHeight ** 2;

// console.log({ BMIMark });
// console.log({ BMIJohn });

/**
 * * There are two gymnastics teams, Dolphins and Koalas. They compete against each
 * * other 3 times. The winner with the highest average score wins a trophy!
 *
 * * tasks:
 * * 1. Calculate the average score for each team, using the test data below
 *
 * * 2. Compare the team's average scores to determine the winner of the competition,
 * * and print it to the console. Don't forget that there can be a draw, so test for that
 * * as well (draw means they have the same average score).
 *
 * * 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
 * * team only wins if it has a higher score than the other team, and the same time a
 * * score of at least 100 points. Hint: Use a logical operator to test for minimum
 * * score, as well as multiple else-if blocks
 *
 * * 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
 * * both teams have the same score and both have a score greater or equal 100
 * * points. Otherwise, no team wins the trophy
 *
 * * Test Data:
 *  * Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 */

// const MIN_WINNING_SCORE = 100;

// /**
//  * Calculates the winner of the gymnastics competition based on team scores
//  * @param {number[]} dolphinsScores - Array of Dolphins team scores
//  * @param {number[]} koalasScores - Array of Koalas team scores
//  * @returns {void}
//  */
// const determineWinner = (dolphinsScores, koalasScores) => {
//   const calculateAverage = (scores) =>
//     scores.reduce((sum, score) => sum + score, 0) / scores.length;

//   const dolphinsAverage = calculateAverage(dolphinsScores);
//   const koalasAverage = calculateAverage(koalasScores);

//   console.log(`Dolphins average score: ${dolphinsAverage}`);
//   console.log(`Koalas average score: ${koalasAverage}`);

//   if (dolphinsAverage > koalasAverage && dolphinsAverage >= MIN_WINNING_SCORE) {
//     console.log("The Dolphins are the winners! 🏆");
//   } else if (
//     koalasAverage > dolphinsAverage &&
//     koalasAverage >= MIN_WINNING_SCORE
//   ) {
//     console.log("The Koalas are the winners! 🏆");
//   } else if (
//     koalasAverage === dolphinsAverage &&
//     dolphinsAverage >= MIN_WINNING_SCORE
//   ) {
//     console.log("It's a draw! Both teams win the trophy! 🏆🏆");
//   } else {
//     console.log(
//       "No team wins the trophy. Minimum score requirement not met. 😢"
//     );
//   }
// };

// // Test data
// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];

// determineWinner(dolphinsScores, koalasScores);

/**
 * * Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
 * * In his country, it's usual to tip 15% if, the bill value is between 50 and 300. If the value is different, the tip is 20%.
 *
 * * Task:
 *
 * * 1) Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
 * * It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement,
 * * and then try to convert it to a ternary operator!).
 *
 * * 2) Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
 * * Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
 *
 * * Test Data:
 * * Data 1: Test for bill values 275, 40 and 430.
 */

// Constants for tip percentages
const TIP_PERCENTAGE_LOW = 0.15;
const TIP_PERCENTAGE_HIGH = 0.2;

/**
 * * Calculates the tip based on the bill amount.
 * @param {number} bill - The total bill amount.
 * @returns {number} The calculated tip.
 */
const getTip = (bill) =>
  bill >= 50 && bill <= 300
    ? bill * TIP_PERCENTAGE_LOW
    : bill * TIP_PERCENTAGE_HIGH;

/**
 * * Calculates the total bill with tip and logs the result.
 * @param {number} bill - The total bill amount.
 */
const calculateTotalBill = (bill) => {
  const tip = getTip(bill);
  const billValue = bill + tip;

  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${billValue}`
  );
};

calculateTotalBill(275);
calculateTotalBill(40);
calculateTotalBill(430);
