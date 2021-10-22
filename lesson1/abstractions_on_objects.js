/* ABSTRACTIONS ON OBJECTS
-------------------------------------------------------
- JavaScript doesn't have a set of built-in higher order functions for Objects like with Arrays
- use Object.keys to work with higher level abstractions

Iteration:
- use Object keys to get an array of keys and then use the forEach method to iterate over those keys
- if you iterate over object keys or values you must rely on side effects to built up a new data structure
*/

let myObject = { a: 1, b: 2, c: 3 };

Object.keys(myObject).forEach(key => {
  console.log('key: ' + key + ', value: ' + String(myObject[key]));
});

/*
logs
key: a, value: 1
key: b, value: 2
key: c, value: 3
*/

let myObject = { a: 1, b: 2, c: 3 };
let keys = Object.keys(myObject);         // ["a", "b", "c"]
let values = Object.values(myObject);     // [1, 2, 3]

// map to a new object with values doubled from myObject
function doubleObjectValues(object) {
  let newObject = {};
  Object.keys(object).forEach(key => newObject[key] = object[key] * 2); // side effect
  return newObject;
}

doubleObjectValues({ a: 1, b: 2, c: 3 });        // { a: 2, b: 4, c: 6 }

// filter an object to select only values with even numbers
function keepEvenValues(object) {
  let newObject = {};
  Object.keys(object).forEach(key => {
    if (object[key] % 2 === 0) {
      newObject[key] = object[key];              // side effect
    }
  });

  return newObject;
}

keepEvenValues({ a: 1, b: 2, c: 3 });            // { b: 2 }

// reduce an invoice object
function getTotalFromInvoice(invoice) {
  let total = { total: 0 };
  Object.keys(invoice).forEach(key => total.total += invoice[key]); // side effect
  return total;
}

getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 });
// returns { total: 21000 }