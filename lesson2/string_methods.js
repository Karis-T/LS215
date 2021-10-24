/*
STRING METHODS
----------------------------------------------------------------
basic string methods used to process text
*/

/*
INDEXOF
- return the numeric index of a character / substring of chracters in a string
- if the search chracter doesn't exist it returns -1
*/

let language = 'JavaScript';

language.indexOf('S');    // 4
language.indexOf('s');    // -1
language.indexOf('ipt');  // 7

/*
LASTINDEXOF
- returns the numeric index of the last occurence of a character / substring.
- if the search chracter doesn't exist it returns -1
*/

let state = 'Mississippi';

state.lastIndexOf('i');    // 10
state.lastIndexOf('s');    // 6
state.lastIndexOf('sp');   // -1

/*
REPLACE
- perfoms substitution operation on the original string, returns a new string
- by default replace substitues the first occurence of a substring / regex pattern using the first argument and replaces it with the second argument
- replace is non-mutating
*/

state = 'Mississippi';
state.replace('s', 'q');   // "Miqsissippi"
// only replaces the first s
// to replace every instance you must use Regex
// appending a g to a regex will replace every matching substring with replacement value

state = 'Mississippi';
state.replace(/s/g, 'q');  // "Miqqiqqippi"

/*
SPLIT
- splits a string into an array of strings based on a separator
- passing a string split parses the string and breaks it at each occurence.
- if separator string is an empty string, its split into an array of character strings.
- you can use regex to identify the separator
- return array doesn't include instances of the separator string / regex
*/
state = 'Mississippi';

state.split('');   // ["M", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"]
state.split('s');  // ["Mi", "", "i", "", "ippi"]
'1, 2, 3, 4, 5, 6'.split(', ');  // ["1", "2", "3", "4", "5", "6"]

/*
SUBSTRING
- returns a portion of the original string between the range of the 2 arguments
- arguments provided are starting (inclusive) and ending (exclusive) indexes from which to begin extraction
- will always use the smaller value as the starting index, and the bigger value as the ending index
string.substring(a, b) === string.substring(b, a);
*/

state = 'Mississippi';

state.substring(6, 3);  // "sis", starting at index 3 and ending at the one before index 6

/*
TOUPPERCASE & TOLOWERCASE
- lets you change the letters in a string to uppercase or lowercase.
- non mutating
*/

let exclamation = "Go team! We're number 1!";

exclamation.toUpperCase();  // "GO TEAM! WE'RE NUMBER 1!"
exclamation.toLowerCase();  // "go team! we're number 1!"