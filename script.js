'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const afficherMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const proposition = Number(document.querySelector('.guess').value);

  if (!proposition) {
    afficherMessage('⛔️ Aucun nombre !');
  } else if (proposition === secretNumber) {
    afficherMessage('🎉 Nombre correct !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (proposition !== secretNumber) {
    if (score > 1) {
      afficherMessage(
        proposition > secretNumber ? '📈 Trop élevé !' : '📉 Trop bas !'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      afficherMessage('💥 Vous avez perdu !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  afficherMessage('Commencez à deviner...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
