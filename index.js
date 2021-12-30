let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');

function showDisplayButton() {
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
}

rollBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = 'Player 2 Turn';
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Score += randomNumber;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
    message.textContent = 'Player 1 Turn';
    player2Scoreboard.textContent = player2Score;
  }
  if (player1Score >= 20) {
    message.textContent = 'Player 1 has won!';
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'block';
  } else if (player2Score >= 20) {
    message.textContent = 'Player 2 has won!';
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'block';
  }
  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function() {
  reset();
})

  function reset() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    let player1Score = 0;
    let player2Score = 0;
    let player1Turn = true;
    resetBtn.style.display = 'none';
    rollBtn.style.display = 'block';
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');
}
