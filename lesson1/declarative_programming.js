/*
DECLARATIVE PROGRAMMING WITH ABSTRACTIONS
-----------------------------------------------------------
IMPERATIVE STYLE PROGRAMMING
-----------------------------------------------------------
- focuses on the STEPS / MECHANICS of solving the problem
- each line of code has a purpose
- purpose comes from understanding the developers implementation
- imperative programming means you must imagine yourself like a computer:
  - "I am going to do this first, then if this condition is true I do x, otherwise I do y.", "I need to use this variable to hold this value, then increment it as I go through this array".
*/

// imperative style code
let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

for (let i = 0; i < array.length; i += 1) {
  if (array[i] % 2 === 1) {   // if ele is odd in array
    newArray.push(array[i]);  // append to new array
  }
}

console.log(newArray);
// this code shows us that it produces a new array with the odd numbers from the original array.


// imperative style with function abstraction
array = [1,2,3,4,5,6,7,8,9,10];
newArray = [];

for (let i = 0; i < array.length; i += 1) {
  if (isOddNumber(array[i])) {
    newArray.push(array[i]);
  }
}

function isOddNumber(number) {
  return number % 2 === 1;
}

console.log(newArray);
// isOddNumber is defined which moves the details of detecting the odd number to the body of a function.
// When we read the if statement, the functions name tells us what the conditional does.
// By moving the "how to do something" we can now focus on "what we need to do"
// the level of abstraction is increased


// Iteration focused abstraction
array = [1,2,3,4,5,6,7,8,9,10];
newArray = [];

array.forEach(element => {
  if (isOddNumber(element)) {
    newArray.push(element);
  }
});

console.log(newArray);

function isOddNumber(number) {
  return number % 2 === 1
}

// The level of abstraction is raised again
// We rely on the Array.prototype.forEach() method instead of writing a new function
// this lets us focus on "what to do as we iterate through the array" instead of dealing with the mechanics of looping through an array with a for loop

// Filter abstraction that truly reflects the purpose
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter(element => isOddNumber(element));
console.log(oddNumbers);

function isOddNumber(number) {
  return number % 2 === 1;
}

// being a first-class function we can refactor the code and pass the whole function to filter as a callback
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
oddNumbers = array.filter(isOddNumber);

function isOddNumber(number) {
  return number % 2 === 1;
}

console.log(oddNumbers);

// The above scenario is most applicable when function expression is used just to call another function eg return isOddNumber(element)

/*
- level of abstraction is raised again
- instead of expressing the solution on the level of:
  - "create a new empty array iterate through the original array and push the odd numbers onto the new array and log the new array to the console" to...
  - filter the original array to get odd numbers and log them on the console
- This is the same abstraction as the requirements and what humans usually operate on.
- The code shows our purpose:
  - far more readable: fits the mental model of the problem
  - way more concise: code is shorter
  - more robust: using a built-in abstraction filter instead of writing our own function

DECLARATIVE PROGRAMMING
--------------------------------------------------------------
- CSS is a declarative language with browsers work on a high level of abstraction
  - p { color: red } tells the browser's render engine that paragraphs should be red
  - you don't have to worry HOW to achieve that

- the higher the level of abstraction, the more declarative your code is
- declarative programming allows us to think on a higher level more natural for humans
- we focus on writing a good description of the problem to solve
- the computer takes care of the rest
- JS provides us with built-in list processing abstractions that let you program declaratively.
- You can also build your own abstractions to:
  - "push down" the implementation details
  - elevate your thinking
  - let your code communicate your true intent
*/