// odd numbers

function sum(num) {
  return String(num)
        .split('')
        .reduce((acc, ele) => acc + Number(ele), 0);
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45



// alphabetical numbers
function alphabeticNumberSort(numArr) {
  return [...numArr].sort(sortByWord);
}

function sortByWord(num1, num2) {
  const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (numWords[num1] < numWords[num2]) return -1;
  else if (numWords[num1] > numWords[num2]) return 1;
  else return 0;
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]



// multiply all pairs
function multiplyAllPairs(arr1, arr2) {
  let arr = [];

  arr1.forEach(ele1 => {
    arr2.forEach(ele2 => arr.push(ele1 * ele2));
  });

  return arr.sort((n1, n2) => n1 - n2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]



//Sum of Sums
function sumOfSums(arr) {
  return arr.reduce((acc, num, idx) => {
    return acc + arr.slice(0, idx + 1)
          .reduce((acc, ele) => acc + ele);
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35



// leading substrings
function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]



// All substrings
function substrings(str) {
  return [...str].map((_, idx) => {
    return leadingSubstrings(str.slice(idx));
  }).flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]



// palindrome substrings
function palindromes(str) {
  return substrings(str).filter(ele => {
    return ele === [...ele].reverse().join('')
        && ele.length > 1;
  });

}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]



// Grocery List
function buyFruit(groceryList) {
 return groceryList.reduce((arr, subArr) => {
   for (let count = subArr[1]; count > 0; count -= 1) {
     arr[arr.length] = subArr[0];
   }
   return arr;
 },[])
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


// Inventory Item Transactions
function transactionsFor(itemID, list) {
  return list.filter(obj => findID(obj, itemID));
}

function findID(obj, itemID) {
  return Object.keys(obj).some(key => obj[key] === itemID);
}


const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// item availability
/*

Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/

function transactionsFor(id, list) {
  return list.filter(transaction => id === transaction.id);
}

function isItemAvailable(id, list) {
  return transactionsFor(id, list).reduce((total, item) => {
    return item.movement === 'in' ? total + item.quantity : total - item.quantity;
  }, 0) >= 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];



console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]