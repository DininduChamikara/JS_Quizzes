function gradingStudents(grades) {
  let resultArr = [];

  for (const grade of grades) {
    if (grade < 38) {
      resultArr.push(grade);
    } else if (grade % 5 >= 3) {
      resultArr.push(grade + (5 - (grade % 5)));
    } else {
      resultArr.push(grade);
    }
  }

  return resultArr;
}

let result = gradingStudents([73, 67, 38, 37, 33]);
console.log(result);
