// Get elements
const player           = document.querySelector('.player');
const video            = player.querySelector('.viewer');
const progress         = player.querySelector('.progress');
const progressBar      = player.querySelector('.progress__filled');
const toggle           = player.querySelector('.toggle');
const skipButtons      = player.querySelectorAll('[data-skip]');
const fullScreenButton = player.querySelector('.fullscreen')
const ranges           = player.querySelectorAll('.player__slider');

// Write functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  // Don't judge me
  const icon = video.paused ? '>' : 'II' ;
  toggle.textContent = icon;
}

function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

function rangeUpdate() {
  // neat!
  video[this.name] = this.value;
}

function progressUpdate() {
  const positionPercent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${positionPercent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullscreen() {
  if(document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else {
    player.webkitRequestFullscreen();
  }
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', progressUpdate);
toggle.addEventListener('click', togglePlay);
fullScreenButton.addEventListener('click', toggleFullscreen);
skipButtons.forEach(b => b.addEventListener('click', skip));
ranges.forEach(r => r.addEventListener('change', rangeUpdate));

// Progress bar:
let clicking = false;
progress.addEventListener('mousedown', () => clicking = true);
progress.addEventListener('mouseup', () => clicking = false);

progress.addEventListener('mousemove', (e) => clicking && scrub(e));
progress.addEventListener('click', scrub);
