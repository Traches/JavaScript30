/* eslint no-console: off, no-unused-vars: off  */
const speedControl  =  document.querySelector('.speed');
const settingBar    =  document.querySelector('.speed-bar');
const video         =  document.querySelector('.flex');

speedControl.addEventListener('mousemove', function(e) {
  const mouseY        =  e.pageY - this.offsetTop;
  const setting       =  mouseY / this.offsetHeight;
  const min           =  0.4;
  const max           =  4;
  const playbackRate  =  ((max - min) * setting) + min;

  settingBar.style.height = Math.round(setting * 100) + '%';
  settingBar.innerHTML = playbackRate.toFixed(1) + 'x';

  video.playbackRate = playbackRate;
});
