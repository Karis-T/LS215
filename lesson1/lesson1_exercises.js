/*
Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.
*/

function totalArea(recArr) {
  return recArr.reduce((acc, curr) => acc + (curr[0] * curr[1]), 0);
}

function totalArea(recArr) {
  let areaArr = recArr.map(arr => arr[0] * arr[1]);
  return areaArr.reduce((acc, curr) => acc + curr);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalSquareArea(recArr) {
  recArr = recArr.filter( arr => arr[0] === arr[1]);
  return totalArea(recArr);
}

console.log(totalSquareArea(rectangles));    // 121

// processing releases
/*
Write a Function named processReleaseData that processes the following movie release data:

The Function should generate an Array of Objects that contain only the id and title key/value pairs. You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:

Keep only releases that have both id and title property present.
Keep only the id and title data for each release
*/

function processReleaseData(data) {
  let availableMovies = data.filter(movie => {
    return movie.hasOwnProperty('id') && movie.hasOwnProperty('title');
  });

  return availableMovies.map(movie => {
    return {'id': movie.id, 'title': movie.title}
  });
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];


// octal
/*
Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.
*/

function octalToDecimal(numStr) {
  const OCTAL = 8;
  return [...numStr].reverse().reduce((total, num, idx) => {
    return total + Number(num*OCTAL**idx);
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

//anagrams
/*
Write a Function named anagram that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".
*/

function anagram(word, list) {
  word = [...word].sort().join('')
  return list.filter(anagram => word === [...anagram].sort().join(''));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// band formatting
/*
The band countries are wrong: all the bands should have 'Canada' as the country.
The band name should have all words capitalized.
Remove all dots from the band names.
*/


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  cloneData = data.map(band => Object.assign({}, band));
  cloneData.forEach(band => {
    updateCountry(band);
    capitalizeName(band);
    removePeriod(band);
  });
  return cloneData;
}

function updateCountry(band) {
  band.name = band.name.split(' ').map(word => {
                return word[0].toUpperCase() + word.slice(1)
              }).join(' ');
}

function capitalizeName(band) {
  band.country = 'Canada';
}

function removePeriod(band) {
  band.name = band.name.replace('.', '');
}

console.log(processBands(bands));
console.log(bands);
/*
should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/