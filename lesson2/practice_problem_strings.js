let firstName = 'Karis';
let lastName = 'Tobias';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

let language = 'JavaScript';

let idx = language.indexOf('S');
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let [a, b] = ['a', 'b'];
console.log(a > b);
b = 'B';
console.log(a > b);

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

let [fact1, fact2] = ['JavaScript is fun', 'Kids like it too'];
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0], fact2[0]);

let pi = 22 / 7
console.log(pi.toString().lastIndexOf('14'));

let boxNumber = (356).toString();
console.log(boxNumber);
// You should receive an error. If you can call toString on a variable that contains a number, why can't you call it directly on a number? JavaScript interprets the period immediately after a number as a decimal point, not a method separator.
// use 2 periods instead of one
// linters reject double periods and suggest parentheses

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

let name = prompt('What is your name?');
if (name.endsWith('!')) {
  name = name.slice(0, -1)
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}