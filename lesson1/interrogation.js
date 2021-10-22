/*
INTERROGATION
-------------------------------------------------------------
-  lets you determine how many elements satisfy some condition.
  - Either any with Array.prototype.some()
  - or all with Array.prototype.every()

- some and every take a single argument: a callback Function.
- both methods invoke the callback once for every element in the Array. passing 3 arguments to the function per call:
  - The value of the current index
  - the index of the current element
  - the Array being processed

- every method iterates over all elements UNTIL the callback function returns a falsy value. when falsy, every immediately returns false. If no elements produce a falsy value every returns true
- every returns true if the callback evaluates to true for all the elements in the original Array.

- some method iterates over all elements UNTIL the callback function returns a truthy value. when truthy, some immediately returns true. If no elements produce a truthy value some returns false
- some returns true if the callback evaluates to true for at least one of the elements in the original array

*/

function odd(number) {
  return number % 2 === 1;
}

let count = [1,2,3,4,5];
console.log(count.some(odd));   // true some numbers are odd
console.log(count.every(odd));  // false not every number is odd

function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!func(array[idx], idx, array)) return false;
  }
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

// writing a program that check if all elements in an array are Numbers
function areAllNumbers(array) {
  return myOwnEvery(array, isANumber)
}

  function isANumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
  }

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false