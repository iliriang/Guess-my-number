'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🎉';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value = 12)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
const displayNumber = function (numbeer) {
    document.querySelector('.number').textContent = numbeer
};

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    

    if (!guess) {
        displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = score;
    }
 } else if (guess !== secretNumber) {
    if (score > 1) {
     
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
          } else {
            
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
          }

        }
    
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');


  document.querySelector('.guess').value = '';
});

