/*
ITERATION
-----------------------------------------------------------
- do something once for each element in an Array
- other ways to iterate: for, while, do...while
- the preferred way in JS is using the forEach method
- forEach invokes the callback once for each element in the array.
- It calls the function with 3 arguments:
  - The value of the current element in the Array
  - the index of the current element
  - The array being processed
- forEach does not use the return value of the callback
  - forEach returns undefined
  - in order to be useful forEach must have side effects
- forEach will always iterate to the end no matter what

});

*/

let names = ['Eunice', 'Lucas', 'Mariana'];
names.forEach((name, idx, arr) => console.log(name, idx, arr[idx]));
// logs: Eunice 0 Eunice, Lucas 1 Lucas, Mariana 2 Mariana

// own implementation of forEach
function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    func(array[i], i, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3

// - find both the minimum and maximum values from an array.
// - Since forEach returns undefined, we must find another way to provide the minimum and maximum to the caller.
// - We do this via a sideeffect by modifying the global variables min and max

min = Infinity;                   // The largest number
let max = -Infinity;              // the smallest number

function getMinMax(value) {
  if (value >= max) max = value;  // if value is greater or equal assign it
  if (value <= min) min = value;  // if value is less or equal assign it
}

[4,5,12,23,3].forEach(getMinMax); // pass the function object
console.log(min, max);            // outputs 3, 23


// anonymous function expression version
[4,5,12,23,3].forEach(value => {
  if (value >= max) max = value;
  if (value <= min) min = value;
});

console.log(min, max);
