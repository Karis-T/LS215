/*
TRANSFORMATION
--------------------------------------------------------------
- creates a new Array that contains values calculated from the values in the original Array
- JavaScript supplies the map method for transformation
- map takes a single argument: a callback Function
- callback is called once for each element in the Array, passing 3 arguments to the callback function per invocation:
  - The value of the current element in the Array
  - The index of the current element
  - The Array being processed
- values returned by the callback Function become the elements in the new Array
- map returns a new Array which contains one element for each element in the calling Array. Each element in the returned Array is based on the callback functions return value
*/

// my implementation of map
function myMap(array, func) {
  let newArr = [];
  array.forEach(value => newArr.push(func(value)));
  return newArr;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// named function implementation of map
// a function that takes an array of book objects as an argument and returns an array of book titles
// for transformation, we only need a callback function that returns the title property of a book object
function getBooksTitle(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]

// anonymous function inline style
function getBooksTitle(books) {
  return myMap(books, book => book['title']);
}
