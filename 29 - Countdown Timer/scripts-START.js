/* eslint no-console: off, no-unused-vars: off  */
// Length is time in seconds
let timerInterval;
let then;

const buttons          =  document.querySelectorAll('.timer__button');
const minuteForm       =  document.customForm;
const timeLeftDisplay  =  document.querySelector('.display__time-left');
const endTimeDisplay   =  document.querySelector('.display__end-time');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    setTimer(button.dataset.time);
  });
});

minuteForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  this.reset();
  setTimer(minutes * 60);
});

function setTimer(length) {
  stopTimer();
  timeLeftDisplay.style.color = 'white';

  const now = Date.now();
  then = now + length * 1000;

  timerInterval = setInterval( updateTimer, 1000 );

  displayEndTime(then);
  displayTimeLeft(length);
}

function displayEndTime(time) {
  const endTime = new Date(time);
  const hours = endTime.getHours();
  const minutes = endTime.getMinutes();
  endTimeDisplay.innerHTML = 
    `Butts in Seats by ${formatHours(hours)}:${leadingZero(minutes)}`;
}


function updateTimer() {
  const timeLeft = Math.round( (then - Date.now()) / 1000 );

  displayTimeLeft(timeLeft);

  if (timeLeft <= 0) {
    stopTimer();
    timeLeftDisplay.style.color = 'red';
  }
}

function displayTimeLeft(timeLeft) {
  const minutes = Math.floor(timeLeft / 60).toString();  
  const seconds = (timeLeft - minutes * 60).toString();
  const display = minutes.toString() + ':' + leadingZero(seconds);
  timeLeftDisplay.innerHTML = display;
  document.title = display;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function leadingZero(minutes) {
  return minutes < 10 ? 
    '0' + minutes.toString() : minutes.toString();
}

function formatHours(hours) {
  return hours.toString();
  // What, you don't speak military time?
}
