/*
prepare a class record summary for students based on the weighted scores of exams and exercises.

Grading areas include exams and exercises, with the following weights:

Grading Area	Weight
Exam	65%
Exercises	35%

Requirements:
- Each term has four exams, and several exercises.
- Every exam has a fixed maximum score of 100,
- exercises have varied maximum score values and counts
- The total maximum point value for all exercises in any term is always 100 regardless how many exercises student has to complete
- determine the students grade by:
  - finding the average score from 4 exams
  - sum up all the exercises
  - apply weighting to compute final % grade
  - determine the letter equivalent based on %

Percent Grade	Letter Equivalent
93 - 100 A
85 - 92	B
77 - 84	C
69 - 76	D
60 - 68	E
0 - 59	F

Example:
1 term may have 5 exercises with possible score maximums of [30, 20, 10, 20, 20]
1 term may have 3 exercises with possible score maximums of [20, 30, 50]

- Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
  - Round the exam averages to 1 decimal point
- Compute the student's total exercise score: 20 + 15 + 40 = 75
- Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
- Round the percent grade to the nearest integer: 81
- Lookup the letter grade in the table above: C
- Combine the percent grade and letter grade: "81 (C)"

nested object
{ 1 object
  student1: { 2 nested object
    id: <idNumber>,
    scores: { 3 nested object
      exams: [], nested arr
      exercises: [], nest arr
    },
  },
}
*/


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

  /*
    Problem 1: collect each student exam and exercise
      - multiarray [[exams], [exercises]]
      - collect into two variables exams and exercises
    Problem 2: compute the average exam for each student
    Problem 3: compute the total exercises (must equal 100)
    Problem 4: apply weighting to final percent grade
      - round percent to highest integer
    Problem 5: determine their letter grade equivalent
    problem 6: return the final class record summary object
  */

function generateClassRecordSummary(scores) {
  let [exams, exercises] = collectStudentScores(scores);
  let studentExamAverages = calculate(exams, average);
  let totalExerciseScore = calculate(exercises, total);
  let finalPercentGrade = applyWeighting(studentExamAverages, totalExerciseScore);
  let finalLetterGrade = calculate(finalPercentGrade, determineLetterGrade);
  let studentGrades = formatGrades(finalPercentGrade, finalLetterGrade); // array of string grades
  let examRecords = compileExamScores(exams) // array of objects
  return {studentGrades, exams: examRecords};
}

function collectStudentScores(scores) {
  let exams = [];
  let exercises = [];
  Object.keys(scores).forEach(student =>{
    let studentScore = scores[student]['scores'];
    exams.push(studentScore.exams);
    exercises.push(studentScore.exercises);
  });
  return [exams, exercises]
}

function calculate(assessment, func) {
  return assessment.map(func);
}

function average(studentExam) {
  return totalScore(studentExam) / 4
}

function total(studentExercise) {
  return totalScore(studentExercise);
}

function totalScore(assessment) {
  return assessment.reduce((total, score) => total + score)
}

function applyWeighting(exams, exercises) {
  return exams.map((exam, idx) => Math.round((exam * .65) + (exercises[idx] * .35)));
}

function determineLetterGrade(percentGrade) {
    if (percentGrade >= 93) return 'A';
    else if (percentGrade >= 85 && percentGrade <= 92) return 'B';
    else if (percentGrade >= 77 && percentGrade <= 84) return	'C';
    else if (percentGrade >= 69 && percentGrade <= 76) return 'D';
    else if (percentGrade >= 60 && percentGrade <= 68) return 'E';
    else return 'F';
}

function formatGrades(finalPercentGrade, finalLetterGrade) {
  return finalPercentGrade.map((percent, idx) => `${percent} (${finalLetterGrade[idx]})`);
}

function compileExamScores(exams) {
  let examScores = [];
  for (let idx = 0; idx < 4; idx += 1) {
    let examNo = [];
    exams.forEach( exam => examNo.push(exam[idx]));
    let average = examNo.reduce((total, score) => total + score) / exams.length;
    let minimum = examNo.reduce((prevScore, currScore) => prevScore <= currScore ? prevScore : currScore )
    let maximum = examNo.reduce((prevScore, currScore) => prevScore >= currScore ? prevScore : currScore )
    examScores.push({average, minimum, maximum,});
  }
  return examScores;
}

console.log(generateClassRecordSummary(studentScores));

/*
returns:

{ object 1
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ], nested arr
  exams: [ nested arr
    { average: 75.6, minimum: 50, maximum: 100 }, nested object min exam max exam
    { average: 86.4, minimum: 70, maximum: 100 }, nested object min exam max exam
    { average: 87.6, minimum: 60, maximum: 100 }, nested object min exam max exam
    { average: 91.8, minimum: 80, maximum: 100 }, nested object min exam max exam
  ],
}

*/

