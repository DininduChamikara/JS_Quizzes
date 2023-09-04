function pickingNumbers(a) {
  let sortArr = a.sort((a, b) => a - b);
  let maxTempCount = 0;

  for (let i = 0; i < sortArr.length - 1; i++) {
    let index = i;
    let indexValue = sortArr[i];
    let tempCount = 0;
    while (sortArr[index + 1] - indexValue <= 1) {
      tempCount++;
      index++;
    }
    tempCount++;
    if (tempCount > maxTempCount) {
      maxTempCount = tempCount;
    }
  }

  return maxTempCount;
}

let result = pickingNumbers([1, 2, 2, 3, 1, 2]);
console.log(result);
