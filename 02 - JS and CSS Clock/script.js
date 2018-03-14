let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand   = document.querySelector('.hour-hand');

function setDate() {
  const now     = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours   = now.getHours();

  // Calculates degree position of each hand.
  // Add 90 degrees because our HTML starts the div out
  // at the 9:00 position: 
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = ( (seconds / 60) + minutes ) / 60 * 360 + 90;
  const hoursDegrees = ( ( (minutes/60) + hours ) / 12) * 360 + 90;

  // Apply styles
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform   = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
