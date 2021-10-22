/*
FUNCTIONS AS FIRST CLASS OBJECTS
----------------------------------------------------------
- Functions are a list of statements that can have paramters containing values that dictate as aspect of their behaviour
- Functions are first class objects in JavaScript
  - you can store them in variables
  - pass them as arguments to other functions
- parameters determine the value the function returns
- the arguments passed to a function determine an aspect of its behaviour

- When writing a Function, the arguments define the data that the Function needs
- the Function body contains all the logic / behaviour that operates on the data in order to produce the result:
  - the return value
  - and/or side-effects

- if we pass a function as an argument we can regain control over inherent behaviours again (things we weren't able to control before)
- we can leverage the fact that Functions are first-class objects by storing functions in a varaible and passing them as an argument

- If a Function uses a function expression as an argument, it can supplement some of its behaviour to that function. The behaviour will come from outside the Function and gives you the ability to:
  - write a function that solves a specific problem (eg iterate through an array and log the elements) vs
  - write an abstraction such as iterate through an array and "do something" the caller defines
- Arrays and Objects have several methods that take functions as arguments

*/

// parameter number determines the number this function returns
function addOne(number) { // provides the number you want to add 1 to
  return number + 1;
}


// defining an iterate Function using a for loop to iterate through elements of an array
let count = [1,2,3,4,5];

function iterate(array) {
  for (let i = 0; i < array.length; i += 1) { // for each ele in array
    array[i];                                 // log ele to console
  }
}

iterate(count); // logs: 1 2 3 4 5
// The above 2 aspects of iterate are hardcoded and cannot be changed.
// You can only control the array you pass to the Function

// inherent behaviour you dont control:
// - how to iterate through an array
// - what to do with each element

// determined by parameters we can control
// - Which array to iterate through



function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) { // contains only a for loop
    callback(array[i]);
  }
}

iterate(count, number => console.log(number));
// logs: 1,2,3,4,5
// passing a function to iterate gives us the same functionality as before

// declaring and storing a function in the logger variable
function logger(number) {
  console.log(number);
}

iterate(count, logger);
// callback function as an argument allows us to control 2 aspects of iterates operation. The function only now iterates through the array

// inherent behaviour you dont control:
// - how to iterate through an array

// determined by parameters we can control
// - Which array to iterate through
// - what to do with each element


// a progam that needs to iterate through an array while logging each element is either even / odd

function oddOrEven(array) {
  for (let i = 0; i < array.length; i += 1) {
    let number = array[i];
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}

// oddOrEven can be rewritten to utilize iterate which lets us avoid boilerplate code ( sections of code that are repeated in multiple places with little to no variation.) needed to loop through the array:
// oddOrEven now focuses on what to do with each element in the array and is no longer concerned with how to iterate through an Array

function oddOrEven(array) {
  iterate(array, function (currentEle) { // if current iterated element
    if (currentEle % 2 === 0) {          // is even
      console.log('even');               // log even
    } else {                             // otherwise
      console.log('odd');                // log odd
    }
  });                                    // close function expression
}

// Instead of using iterate we can use one of the built-in methods such as forEach

function oddOrEven(array) {
  array.forEach(number => {
    if (nunmber % 2 === 0) console.log('even');
    else console.log('odd');
  });
}

/*
ABSTRACTING FUNCTIONS FOR SPECIALISATION
----------------------------------------------------------
- functions are used to extract common functionality from a single location into multiple locations
- this is done so that responsibilities for each function are much clearer
- and that code is reorganized by functions and responsilbity
*/

function prasadOrder() {
  console.log('I am very hungry and would like a salad.');
}

function sueOrder() {
  console.log('I am sort of hungry and would like a sandwich.');
}

function jaiOrder() {
  console.log('I am not hungry and would like a smoothie.');
}

// The above functions build a string based on 2 values:
// - how hungry a person is
// - what they want to order




function buildOrder(hunger, item) {
  return `I am ${hunger} hungry and would like a ${item}.`;
}

buildOrder('very', 'salad');
buildOrder('sort of', 'sandwich');
buildOrder('not', 'smoothie');

// this refactoring separates code from:
// - how to build each line of text
// - from the values provided by each person
// responsibilities for each function are much clearer
// buildOrder() creates a completel message using the values passed to it
// each invocation logs a single persons order
// code is reorganized by purpose and responsiblity