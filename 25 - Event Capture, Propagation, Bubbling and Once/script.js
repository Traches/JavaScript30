/* eslint no-console: off, no-unused-vars: off */

const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

button.addEventListener('click', buttonClick, {
  capture: false,
  once: true
});

function buttonClick(e) {
  console.log('button!');
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation();
}
