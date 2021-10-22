/*
SORT
-------------------------------------------------------------
- lets you rearrange elements of an Array from lowest to highest or vice versa based on any desired criteria.
- sort takes one argument: a comparison function as an argument
- comparison function takes 2 arguments:
- a and b define the sort order for the final array by returning a specific value
- sort uses the return value of compareScores to put each pair of elements in order.
  - If callback returns a negative number then a comes before b in final array
  - if callback returns a positive number then b comes before a in final array
  - if callback returns 0, then a and b stay as they are
- sort only cares about the sign of the callback value. Any value is appropriate if the sign is correct. 0 , 1 and -1 are just convinient values
- if you don't pass a callback as an argument, sort will default to sorting according to string Unicode points
- performs an in-place sort of the Array - mutating the array.
- returns a reference to the mutated sorted Array. You can use sort for its return value or its side effect
*/

function compareScores(score1, score2) {
  if (score1 < score2) return -1;     // if score 1 is smaller than score 2
  else if (score1 > score2) return 1; // if score 2 is bigger than score 2
  else return 0;                      // if scores are equal
}

let scores = [5, 88, 50, 9, 60, 99, 12, 23];
scores.sort(compareScores);
console.log(scores);
scores.sort();    // returns [ 12, 23, 5, 50, 60, 88, 9, 99 ]

// a program that sorts an array of student objects based on their final grades from highest to lowest:

let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2 ){
  if (student1.grade < student2.grade) return 1;
  else if (student1.grade > student2.grade) return -1;
  else return 0;
}

console.log(studentGrades.sort(compareGrades));


//inline style
studentGrades.sort((student1, student2) => {
  if (student1.grade < student2.grade) return 1;
  else if (student1.grade > student2.grade) return -1;
  else return 0;
})