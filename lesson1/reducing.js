/*
REDUCING / FOLDING
-------------------------------------------------------------
- reduce is more complicates than other list processing methods
  - this is because each invocation of the callback affects later invocations
- the reduce method takes 1 required argument: A Function.
  - reduce invokes this callback once for each element in the Array.
  - it passes 4 arguments per each call:
    - accumulator: the return value of the previous callback invocation (initial value of 1st iteration)
    - currentValue: The value of the current element in the Array
    - currentIndex: The index of the current element
    - array: The array being processed
- reduce passes the accumulator to the next callback invocation and uses the return value of the final callback invocation as the overall return value of reduce
- reduce accepts an optional second argument, the initialValue.
  - It provides the value to use as the first argument in the first call to the callback
  - if the caller doesn't provide initialValue, reduce uses the first element of the array, and when this happens reduce will process with the 2nd element in the Array
*/

function add(previousValue, element) {
  let sum = previousValue + element;
  console.log(previousValue, element, sum);
  return sum;
}

let count = [1,2,3,4,5];
console.log(count.reduce(add));

/*
1 2 3     // the return value...
3 3 6     // becomes the first argument to the next callback invocation
6 4 10
10 5 15   // the last return value...
15        // becomes the value logged to console.log
*/

function myReduce(arr, func, initial) {
  let acc;
  let idx;

  if (initial !== undefined) {
    acc = initial;
    idx = 0;
  } else {
    acc = arr[0];
    idx = 1;
  }

  for (idx; idx < arr.length; idx += 1) {
    acc = func(acc, arr[idx], idx, arr);
  }

  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

//function that takes a list of words as an argument and returns the word with the most characters

function longestWord(words) {
  return words.reduce(longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));

// inline style
function longestWord(words) {
  return words.reduce((result, currentWord) => {
    return currentWord.length >= result.length ? currentWord : result;
  });
}