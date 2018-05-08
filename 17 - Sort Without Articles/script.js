const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a,b) => {
  return strip(a) > strip(b) ? 1 : -1;
});

function strip(name) {
  return name.replace(/^a |^an |^the/i, '' ).trim();
}

document.querySelector("#bands").innerHTML = bands.map(
  band => `<li>${band}</li>`
).join('');
