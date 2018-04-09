// start with strings, numbers and booleans
let age = 100;
let age2 = age;

age = 200;

console.log(age, age2);
// 100 200
// Copies, doesn't reference. 

let name = 'bobert'
let name2 = name

name = 'bob';
console.log(name, name2);
// bob bobert

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
team[3] = 'Robert';

console.log("const team = players:")
console.log(players, team);
// 'Ryan' has changed to 'Robert' in both arrays. The second const statement
// simply created a reference to the original array, not a copy. 

// So, how do we fix this? We take a copy instead!
// slice() with no arguments returns a copy of the array
const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team2 = players2.slice() 
team2[3] = 'Robert';

console.log("const team2 = players2.splice()")
console.log(players2, team2);

// or create a new array and concat the old one in
const players3 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team3 = [].concat(players3);

// or use the new ES6 Spread
const players4 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team4 = [...players4];

// Array.from() works too
const players5 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team5 = Array.from(players5);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const personCopy = person
personCopy.age = 100;

console.log('const personCopy = person');
console.log(person.age, personCopy.age);
// 100 100

// how do we take a copy instead?

const person2 = {
  name: 'Wes Bos',
  age: 80
};

const personCopy2 = Object.assign({}, person2, {foo: 'bar', age: 100});
console.log('Object.assign()');
console.log(person2.age, personCopy2.age);
// 80 100

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

object1 = {
  name: 'Bob',
  numbers: [1,2,3,4]
}

object2 = Object.assign({}, object1);
object2.numbers.splice(2,1);

console.log('Nested array in an object duplicated with Object.assign()')
console.log(object1.numbers, object2.numbers);
// [1,2,4] [1,2,4]

// You rarely actually need to do this. But if you do, the thing to google is
// "deep clone"

// Poor man's deep clone: 
object3 = {
  name: 'Bob',
  numbers: [1,2,3,4]
}

object4 = JSON.parse(JSON.stringify(object3));

object4.numbers.splice(2,1)
console.log('b = JSON.parse(JSON.stringify(a))')
console.log('I need a shower...');
console.log(object3.numbers, object4.numbers);
// [1,2,3,4] [1,2,4]
