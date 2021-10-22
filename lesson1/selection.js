/*
FILTERING / SELECTION
--------------------------------------------------------------
- creates a new Array that contains a subset of an existing Array
- In javaScript we use the filter method to handle this
- filter takes a single argument - a function object
  - the function object will be invoked once for each element in the Array and is called with 3 arguments:
    - the current element in the Array
    - the index of the current element
    - The Array being iterated over
  - if the callback returns true, the element will be included in the final Array.
  - if the callback returns false, element will be excluded.
- filter returns a new Array containing the elements for which the callback returned true
*/

// self implemented filter
function myFilter(array, func) {
  let newArr = [];
  array.forEach(value => {
    if (func(value)) newArr.push(value);
  });
  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{ a: 3, b: 4,  c: 5 },{ a: 5, b: 12, c: 13 },{ a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]


// filter function with named callback
// program that removes all the numbers that aren't multiples of neither 3 nor 5
// using isMultiplesOfThreeOrFive as a callback.
// It returns true everytime we find a number that meets the criteria.
function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultiplesOfThreeOrFive);
}

function isMultiplesOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]); // [3,5,18,15]