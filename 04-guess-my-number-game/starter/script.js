'use strict';

//DOM Element Selection

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from Javascript!';

const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
// scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

// Track the current score
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
console.log('Game state initialized!');

//Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button is clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number ';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'You have won!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.score').disabled = true;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too High!!!🔥';
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 1) {
      document.querySelector('.message').textContent =
        'You have lost, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.score').disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'Too Low!!!🥹';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You have lost, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.score').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number is:', secretNumber);
  //restart the message display
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
