// Github gist, huge json array of cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities      = [];
const searchBox   = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchBox.addEventListener('change', displayMatches);
searchBox.addEventListener('keyup', displayMatches);

// fetch returns a promise, .then acts once it's resolved. 
// JSON returns another promise, which we then use to store
// that data in the cities variable.
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// This is where we filter for matching cities
function filterMatches(sample, cities) {

  // We need to build a regex to pass into filter method:
  const regex = new RegExp(sample, 'gi');

  return cities.filter(
    match => {
      const city = match.city.match(regex);
      const state = match.state.match(regex);
      return city || state;
    }
  )
}

function formattedNumber(input) {
  // Round to nearest thousand
  const rounded = Math.round( input / 1000) * 1000; 
  // Comma separate
  return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 
function displayMatches() {

  // Call the filter function
  const matches = filterMatches(this.value, cities);
  const regex = new RegExp(this.value, 'gi');

  // Convert matches into html
  const html = matches.map( match => {

    // Highlight matching text:
    const cityName = match.city.replace(
      regex, `<span class="hl">${this.value}</span>`
    )
    const stateName = match.state.replace(
      regex, `<span class="hl">${this.value}</span>`
    )
    // Format population:
    const population = formattedNumber(match.population);
    
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>
    `
  } ).join('');

  // Spit it back out to the page
  suggestions.innerHTML = html;

}
