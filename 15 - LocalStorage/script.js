// Grab html elements:
const form = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkAll = document.querySelector('[value="Check All"]')
const unCheckAll = document.querySelector('[value="Uncheck All"]')
const clear = document.querySelector('[value="Clear"]')

// Load stored data:
const items = JSON.parse(localStorage.getItem('items')) || [];

// Add event listeners:
form.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleChecked);
checkAll.addEventListener('click', setAll);
unCheckAll.addEventListener('click', setAll);
clear.addEventListener('click', clearAll);

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

  update();

  // Reset the form
  this.reset();
}

function toggleChecked(e) {
  // Clicking the parent list element generates a few different click events,
  // we only care about the inputs (checkboxes). Return unless the event target
  // is an input:
  if(!e.target.matches('input')) return

  const element = e.target;
  const elementIndex = element.dataset.index;
  
  items[elementIndex].checked = element.checked;

  update();
}

function setAll(e) {
  const value = e.target.dataset.value ? true : false;
  items.forEach(item => {item.checked = value})
  update();
}

function clearAll() {
  items.length = 0;
  update();
}

function update() {
  buildList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
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

