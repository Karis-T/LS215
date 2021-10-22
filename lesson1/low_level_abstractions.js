function isAllUnique(string) {
  return [...string].every(char => string.lastIndexOf(char) === string.indexOf(char));
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true

// LS version
function isAllUnique(string) {
  let seen = {};
  let lowerCasedString = string.toLowerCase();

  for (let i = 0; i < lowerCasedString.length; i += 1) {
    if (lowerCasedString[i] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true;
    }
  }

  return true;
}

/*
Whenever your code needs an early return while processing a list, you should consider using a simple loop. With few exceptions, most JavaScript list processing abstractions traverse the entire list. Sometimes, find, some, or every will prove useful in such cases, but many problems are not amenable to an approach that uses these methods.
*/