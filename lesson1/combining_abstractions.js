/* COMBINING ABSTRACTIONS
-------------------------------------------------------
Problem:
- determine which letter is the most frequent starting letter of the names in this list

inputs and outputs
- for each name in the list, determin its first letter
- output: Array of first letters
- abstraction: Transformation
- method: map

- count the occurences of each letter
- output: Object containing letters as keys and counts as values
- abstraction: Reduction
- method: reduce

- return the first letter that occurs most often
- output: Letter with the largest number of occurrences
- abstraction: Reduction
- method: reduce

*/

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

// map each element to the first letter
let letters = names.map(name => name[0]); // // letters is [ "H", "G", "K", "H", "K", "K", "O" ]

// using {} as the initial value
// if property exists increase its value by 1
// otherwise create a new prperty and assign it 1
// return the object for next iteration
let counts = letters.reduce((obj, letter) => {
  obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
  return obj;
}, {}); // { H: 2, G: 1, K: 3, O: 1 }

// iterate over keys
// if last num is less than current num
// return last letter
// otherwise return current letter
Object.keys(counts).reduce((lastlet, currentlet) => {
  return counts[lastlet] > counts[currentlet] ? lastlet : currentlet;
}); // 'k'