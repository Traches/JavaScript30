/* eslint no-console: off, no-unused-vars: off  */

const nav = document.querySelector('#main');

window.addEventListener('scroll', fixNav);
const topOfNav = nav.offsetTop;
function fixNav() {
  if(topOfNav <= window.scrollY) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

