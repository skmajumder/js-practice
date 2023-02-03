const dolphinsAverageScore = (88 + 109 + 110) / 3
const koalasAverageScore = (88 + 109 + 110) / 3

console.log(`Dolphins Average score: ${dolphinsAverageScore}`);
console.log(`Koalas Average score: ${koalasAverageScore}`);

if (dolphinsAverageScore >= 100 || koalasAverageScore >= 100) {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log(`The winner is team Dolphins with average Score: ${dolphinsAverageScore}`)
    } else if (dolphinsAverageScore < koalasAverageScore) {
        console.log(`The winner is team Koalas with average Score: ${koalasAverageScore}`)
    } else {
        console.log(`Both teams win the Trophy with Average Score: ${dolphinsAverageScore}`);
    }
} else {
    console.log(`No one wins the Trophy`);
}

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log(`The winner is team Dolphins with average Score: ${dolphinsAverageScore}`)
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
//     console.log(`The winner is team Koalas with average Score: ${koalasAverageScore}`)
// } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
//     console.log(`Both Win the Trophy`);
// } else {
//     console.log(`No one wins the Trophy`);
// }

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log(`The winner is team Dolphins with average Score: ${dolphinsAverageScore}`)
// } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log(`The winner is team Koalas with average Score: ${koalasAverageScore}`)
// } else {
//     console.log(`It is Draw`);
// }