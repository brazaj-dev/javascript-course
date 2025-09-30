'use strict';
const init = function () {
  // Reset game state
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset all displays
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Hide dice
  diceEl.classList.add('hidden');

  // Reset player styling
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const btnNew = document.querySelector('.btn--new');

// New game functionality
btnNew.addEventListener('click', init);

// Test complete game reset
console.log('Game reset - scores:', scores);
console.log('Game reset - playing:', playing);
console.log('Game reset - active player:', activePlayer);

console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 winner:', player0El.classList.contains('player--winner'));
console.log('Player 1 winner:', player1El.classList.contains('player--winner'));
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
