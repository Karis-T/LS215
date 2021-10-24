/*
STRING PROCESSING PATTERNS
----------------------------------------------------------------
string processing usually follows this pattern:
1. Declare a new string / array to be used as the results container
2. break down or parse the original string by line, sentence, word, character or some other delimiter
  - remove unnecssary characters from text
3. apply list processing strategy based on the problem
4. combine results into a string (if required)

- not every step of the above pattern is present in a given problem
- you will usually use a list processing strategy to loop over the text

- we can also use regular expressions to process strings or text
- regex use a sequence of "patterns" that creates a search crietia to match a pattern in a string.
- you can use regex to perform search and replace, list building or text validation etc.

- JS has 2 built in objects for regex:
  - String, using the following methods:
    - String.prototype.search
    - String.prototype.match
    - String.prototype.replace
  - RegExp, using the following methods:
    - RegExp.prototype.exec
    - RegExp.prototype.test
*/

// Scenario: We need to capitalize the first letter of every word in some text.
// Shape of the problem: we must transform each word by capitalizing each letter

let text = 'The quick brown fox jumps over the lazy dog.';

function capitalize(text) {
  // break original string into words
  let textArray = text.split(' ');
  // declare result array and perform list processing - transformation
  let newTextArray = textArray.map(capitalizeWord);
  // join together and return string
  return newTextArray.join(' ');
}

// callback helper function to be used with transformation
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalize(text));

// Scenario: Count how often a specific word occurs in some text.
// Shape of the Problem: Given some words locate the words that match the word we want to count

// regex version
function countWordInText(word, text) {
  // create a new regex object with case insensitive and global flags
  let regex = new RegExp(`${word}`, 'ig');
  // locate the number of times the given word matches
  return text.match(regex).length;
}

// non regex version
function countWordInText(word, text) {
  // filter select only the word we want
  return text.split(/ |\./).filter(wordInText => {
   return wordInText.toLowerCase() === word
  }).length;
}

console.log(countWordInText('the', text));
console.log(countWordInText('dog', text));