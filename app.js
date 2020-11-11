// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(max, min),
  guessLeft = 3;

// UI Elements
const game = document.querySelector('.game'),
  guessInput = document.querySelector('#guess-input'),
  guessBtn = document.querySelector('#guess-btn'),
  message = document.querySelector('.message'),
  maxNum = document.querySelector('.max-num'),
  minNum = document.querySelector('.min-num');

// Assign UI min and max
maxNum.textContent = max;
minNum.textContent = min;

// Play again event listner
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// listner for Guess 
guessBtn.addEventListener('click', function () {

  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter A Number Between ${min} And ${max} !`, 'red');
  } else {

    // Check If Won
    if (guess === winningNum) {
      // Gameover -won
      gameOver(true, `${guess} is Correct, YOU WIN!`);

    } else {
      // Wrong Number
      guessLeft -= 1;

      if (guessLeft === 0) {
        // Gameover -Lost
        gameOver(false, `YOU LOST. The Correct Number Was ${winningNum}`)
      } else {
        // Game continues - answer wrong

        guessInput.style.borderColor = 'red';

        setMessage(`${guess} Is Not Correct, ${guessLeft} Guesses Left...`, 'red');

        // Clear input
        guessInput.value = '';
      }
    }
  }
});

// Set Message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  message.style.background = '#ffffff';
}

// Get random number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Game over
function gameOver(won, msg) {
  let color;
  won == true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessInput.style.color = '#ffffff';

  // Play Agin
  guessBtn.value = 'Play Again';
  guessBtn.className = 'play-again';

}

