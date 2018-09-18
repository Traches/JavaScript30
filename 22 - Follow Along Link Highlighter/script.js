// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
/* eslint no-console: "off" */
const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

triggers.forEach(
  a => a.addEventListener('mouseenter', highlightLink)
);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const position = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${position.width}px`;
  highlight.style.height = `${position.height}px`;
  highlight.style.transform = `translate(${position.left}px, ${position.top}px)`;
}

