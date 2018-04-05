const pressed = [];
const secretCode = 'bobert';
window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(0, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join('').includes(secretCode)) {
    console.log('Secret code entered');
    cornify_add();
  }
})
