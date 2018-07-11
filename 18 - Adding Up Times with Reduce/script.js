const timeNodes = Array.from(
  document.querySelectorAll('[data-time]')
);

const totalTimeInSeconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeString => {
    const [minutes, seconds] = timeString.split(':').map(parseFloat)
    return ( minutes * 60 ) + seconds})
  .reduce((total, current) => total + current);

const totalHours        = Math.floor(totalTimeInSeconds / 3600);
const secondsMinusHours = totalTimeInSeconds % totalHours;
const totalMinutes      = Math.floor(secondsMinusHours / 60);
const totalSeconds      = secondsMinusHours % totalMinutes;

console.log(totalHours, totalMinutes, totalSeconds);
