const canvas     = document.querySelector('#draw');
canvas.width     = window.innerWidth;
canvas.height    = window.innerHeight;

const context    = canvas.getContext('2d');
context.lineJoin = 'round';
context.lineCap  = 'round';

let isDrawing    = false;
let hue          = 0;
let widthChange    = 1;
let lastX;
let lastY;

canvas.addEventListener('mousemove' , draw);
canvas.addEventListener('mousedown' , startDraw );
canvas.addEventListener('mouseup'   , stopDraw);
canvas.addEventListener('mouseout'  , stopDraw);

function draw(e) {

  if(!isDrawing) return; // Don't do anything if the mouse isn't down

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  // Set up for the next segment:
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue ++;
  context.lineWidth += widthChange;

  // This is pretty optional:
  if (hue >= 360) { hue = 0 };

  // Flip widthChange at a certain point:
  if (context.lineWidth >= 100 || context.lineWidth <= 1) { 
    widthChange = ( -widthChange );
  };

}

function startDraw(e) {
  // Set line origin to current position:
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // Turn it on:
  isDrawing = true;
}

function stopDraw(e) {
  // Turn it back off: 
  isDrawing = false;
}
