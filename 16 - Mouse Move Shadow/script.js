const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

hero.addEventListener('mousemove', setShadow);

function setShadow(e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  const {pageX: x, pageY: y} = e;
  const walk = 100;

  const xShadow = Math.round( ((x/width) - 0.5) * walk )
  const yShadow = Math.round( ((y/height) - 0.5) * walk )

  text.style.textShadow = `${xShadow}px ${yShadow}px 0 red`;

}
