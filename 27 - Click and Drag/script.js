/* eslint no-unused-vars: off, no-console: off  */
const slider = document.querySelector('.items');
let startX;
let scrollLeft;

slider.addEventListener('mousedown', startScroll);

['mouseleave', 'mouseup'].forEach( (event) =>{
  slider.addEventListener(event, stopScroll);
});

function startScroll(e) {
  e.preventDefault();

  startX      =  e.pageX;
  scrollLeft  =  slider.scrollLeft;

  slider.addEventListener('mousemove', scrolling);
  slider.classList.add('active');
}

function scrolling(e) {
  const x            =  e.pageX;
  const walk         =  (x - startX) * 3;
  slider.scrollLeft  =  scrollLeft - walk;
}

function stopScroll() {
  slider.removeEventListener('mousemove', scrolling);
  slider.classList.remove('active');
}
