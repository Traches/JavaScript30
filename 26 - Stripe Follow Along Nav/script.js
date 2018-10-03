/* eslint no-unused-vars: off, no-console: off  */
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

triggers.forEach( trigger => trigger.addEventListener('mouseenter', handleEnter) );
function handleEnter() {
  // console.log('enter');
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if(this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('left', `${coords.left}px`);
  background.style.setProperty('top', `${coords.top}px`);
}

triggers.forEach( trigger => trigger.addEventListener('mouseleave', handleLeave) );
function handleLeave() {
  this.classList.remove('trigger-enter');
  setTimeout(() => {
    this.classList.remove('trigger-enter-active');
  }, 150);

  background.classList.remove('open');
}

