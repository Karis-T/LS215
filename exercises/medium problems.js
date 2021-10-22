/*
understand the problem:
- inputs: array with any type of element
- outputs: array with first element moved to the back of the array and all other elements brought forward by 1

Requirements:
- rotate an array anti-clock wise
- move the first element to the end of the array
- bring all elements forward by 1
- if the input isn't an array return undefined
- if the input is empty return undefined
- do not modify the original array

*/

function maxRotation(num) {
  for (let i = String(num).length; i > 1; i -= 1) {
     num = rotateRightmostDigits(num, i);
  }
  return num;
}

function rotateRightmostDigits(num, rot) {
  let numArr = String(num).split('');
  let subArr = rotateArray(numArr.splice(-rot));
  return Number(numArr.concat(subArr).join(''));
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  return arr.slice(1).concat(arr[0]);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

//word to digit
function wordToDigit(str) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  numbers.forEach((word, idx) => str = str.replace(new RegExp(word,'g'), idx));
  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

