// Using an external file so nvim knows it's javascript. 

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key   = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; //Stop execution unless keypress has an associated audio file
  audio.currentTime = 0; // Resets sound if it's already playing.
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  // transitionend event fires off for every single CSS property that changes. 
  // We need to pick one and ignore the rest. 
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing'); // Turn it back off. 
}
