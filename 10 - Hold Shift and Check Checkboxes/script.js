// Checkbox multiselect challenge:

// Click one box, hold shift, click another, and both boxes plus all in between
// should be checked. Challenge doesn't seem to include consideration for
// unchecking, or situations when more than one box is checked. Must work in
// both directions; bottom to top and top to bottom.  


// Grab all the checkboxes:
const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach(c => {
  c.addEventListener('click', multiSelect)
});

function multiSelect(e) {

  // don't do anything if shift isn't pressed:
  if (!e.shiftKey) return;

  // convert the node module to an array:
  const cbArray = [...checkboxes];

  // Find the first one, which is pretty easy: 
  const startChecks = cbArray.findIndex(c => c.checked);
  
  // Finding the last one is harder though. This would be so much easier in
  // ruby...  We slice() to make a new array, because reverse() mutates whatever
  // it operates on. Then find the index of the last checked box, and flip it
  // negative to count from the end:
  const stopChecks  = -cbArray.slice().reverse().findIndex(c => c.checked) ;

  // Create an array of the boxes to be changed:
  const toChange = cbArray.slice(startChecks, stopChecks);

  // Set each one to checked:
  toChange.forEach(c => c.checked = true);

}
