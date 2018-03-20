// Checkbox multiselect challenge:

// Click one box, hold shift, click another, and both boxes plus all in between
// should be checked. Challenge doesn't seem to include consideration for
// unchecking, or situations when more than one box is checked. Must work in
// both directions; bottom to top and top to bottom.  

// Prepare variables:
let shiftPressed = false;

// Grab all the checkboxes:
const checkboxes = document.querySelectorAll('input[type=checkbox]');

// Attach event listeners:
document.addEventListener('keydown', shiftCheck);
document.addEventListener('keyup', shiftCheck);

checkboxes.forEach( c => {
  c.addEventListener('change', multiSelect)
} )

function shiftCheck(e) {
  // Return if it's not a shift key:
  if (e.key != 'Shift') return;
  
  if ( e.type === 'keydown' ) {
    shiftPressed = true;
  } else if (e.type === 'keyup') {
    shiftPressed = false;
  }
}

function multiSelect(e) {

  // don't do anything if shift isn't pressed
  if (!shiftPressed) return;

  // Make an array from checkboxes:
  const cbArray = [...checkboxes];

  // Return if there are less than 2 boxes checked 
  if  ( cbArray.filter( c => c.checked ).length < 2 ) return;

  // Find the first and last items checked: 
  const startChecks = cbArray.findIndex( c => c.checked );
  
  // This would be so much easier in ruby... slice() to make a new array,
  // because reverse() mutates whatever it operates on. Then search to find the
  // last checked box, and subtract it from the length to finally get the index
  // we want: 
  const stopChecks  = 
    cbArray.length - cbArray.slice().reverse().findIndex( c => c.checked ) ;

  console.log(`first: ${startChecks}, last: ${stopChecks}`);

  // Create an array of the boxes to be changed:
  console.log(cbArray);
  const toChange = cbArray.slice( startChecks, stopChecks);
  console.log( toChange );

  // Iterate over them
  toChange.forEach( c => c.checked = true );

}
