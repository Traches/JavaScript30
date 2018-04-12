const form = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

form.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleChecked);

// Fill up the list from local storage on page load:
buildList(items, itemsList);

function addItem(e) {
  e.preventDefault();

  // Grab input box
  textBox = this.querySelector('[name="item"]');

  // Grab text from input box, store it as an item property 
  item = {
    name: textBox.value,
    checked: false
  }

  items.push(item);

  buildList(items, itemsList);

  saveLocal();

  // Reset the form
  this.reset();
}


function buildList(content = [], element) {
  const listHTML = content.map( (listItem, i) => {
    return `
      <li>
        <input 
          type="checkbox" 
          data-index=${i} 
          id="item${i}" 
          ${listItem.checked ? 'checked' : ''}
        >
        <label for="item${i}">${listItem.name}</label>
      </li>
    `;
  } );
    
  element.innerHTML = listHTML.join('');
}

function toggleChecked(e) {
  // Clicking the list generates a few different click events, we only care
  // about the inputs (checkboxes).
  if(!e.target.matches('input')) return
  const element = e.target;
  const elementIndex = element.dataset.index;
  
  items[elementIndex].checked = element.checked;

  saveLocal();
}

function setAll(e) {
  items.forEach( item => item.checked = value )
}

function clearAll() {
  items = [];
}

function saveLocal() {
  localStorage.setItem('items', JSON.stringify(items));
}
