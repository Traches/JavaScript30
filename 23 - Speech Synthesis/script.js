/* eslint no-unused-vars: off */
/* eslint no-console: off */
const voicesDropdown = document.querySelector('[name = "voice"]');
const options = document.querySelectorAll('[type = "range"], [name  = "text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name = "text"]').value;

let voices = [];

speechSynthesis.addEventListener('voiceschanged', populateVoices);
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map( voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>` )
    .join('');
}

voicesDropdown.addEventListener('change', setVoice);
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

options.forEach(option => option.addEventListener('change', setOption));
function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if(startOver) { speechSynthesis.speak(msg); }
}
