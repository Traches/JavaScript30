// Grab all the checkboxes 
const checkboxes = document.querySelectorAll('input[type=checkbox]');

// Attach event listeners 
document.addEventListener('keydown', shiftCheck);
document.addEventListener('keyup', shiftCheck);

// Event function:
// Check if there is another active checkbox
// Set all appropriate ones to active

let shiftPressed = false;

function shiftCheck(e) {
  // Return if it's not a shift key:
  if (e.key != 'Shift') return;
  
  if ( e.type === 'keydown' ) {
    shiftPressed = true;
  } else if (e.type === 'keyup') {
    shiftPressed = false;
  }
}
