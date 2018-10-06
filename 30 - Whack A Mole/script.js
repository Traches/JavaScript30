/* eslint no-console: off, no-unused-vars: off */

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let gameRunning = false;
let score = 0;
let lastHole;

function randomTime(min, max) {
  return Math.round(
    Math.random() * (max - min) + min
  );
}

function randomHole(holements) {
  const whichHole = Math.floor(Math.random() * holements.length);

  if (whichHole === lastHole) {
    return randomHole(holes);
  }

  lastHole = whichHole;

  return holes[whichHole];
}

function startGame() {
  score = 0;
  updateScore(score);
  gameRunning = true;
  prarieDog();
  setTimeout( () => gameRunning = false, 10000);
}

function prarieDog() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (gameRunning) prarieDog();
  }, time);
}

moles.forEach(mole => mole.addEventListener('click', bonk));

function bonk(e) {
  if(!e.isTrusted) return; //cheater!
  score ++;
  updateScore(score);
  this.classList.remove('up');
}

function updateScore(score) {
  scoreBoard.textContent = score;
}
