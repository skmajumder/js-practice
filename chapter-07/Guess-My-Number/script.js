'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 24;

// console.log(document.querySelector('.guess').value);

/* Event Listener */

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = secrectNumber;

const guessNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    if (score > 1) {
      displayMessage('⛔ No Number');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the Game! 😬');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secrectNumber) {
    if (score > 1) {
      displayMessage('🎉 Correct Number! 🤗');
      document.querySelector('.final-headline').textContent =
        '🥳 Winner Winner Chicken Dinner 🍗🍗🍗';
      document.querySelector('.number').textContent = secrectNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > heighscore) {
        heighscore = score;
        document.querySelector('.highscore').textContent = heighscore;
      }
    } else {
      displayMessage('💥 You Lost the Game! 😬');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(
        guess > secrectNumber ? '📈 Too High! 😵' : '📉 Too Low! 🥴'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the Game! 😬');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', guessNumber);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('💭 Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.final-headline').textContent =
    'Guess My Number!! 🤔';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
