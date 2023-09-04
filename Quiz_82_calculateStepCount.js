function calculateStepCount(inputMatrix, outputMatrix) {
  // Flatten the matrix into a single array for easier processing
  const inputFlat = inputMatrix.flat();
  const outputFlat = outputMatrix.flat();

  let iterationCount = 0;

  for (let i = 0; i < inputFlat.length; i++) {
    if (inputFlat[i] === outputFlat[i]) {
      continue;
    } else {
      // Find the index of the element in the input matrix
      const inputIndex = inputFlat.indexOf(outputFlat[i]);
      // Swap the elements
      const temp = inputFlat[i];
      inputFlat[i] = inputFlat[inputIndex];
      inputFlat[inputIndex] = temp;
      iterationCount++;
    }
  }
  return iterationCount;
}

let result1 =  calculateStepCount(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
let result2 = calculateStepCount(
  [
    [1, 2, 3],
    [5, 4, 6],
    [7, 8, 9],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
let result3 = calculateStepCount(
  [
    [1, 2, 3],
    [5, 6, 4],
    [7, 8, 9],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);

console.log(result1);
console.log(result2);
console.log(result3);
