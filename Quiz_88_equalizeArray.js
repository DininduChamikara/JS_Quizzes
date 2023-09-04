function equalizeArray(arr) {
  const elementsCount = {};

  for (const element of arr) {
    if (!elementsCount[element]) {
      elementsCount[element] = 1;
    } else {
      elementsCount[element]++;
    }
  }

  let maxCountsOfAnElement = 0;

  for (const element in elementsCount) {
    if (elementsCount[element] > maxCountsOfAnElement) {
      maxCountsOfAnElement = elementsCount[element];
    }
  }

  let elementsToRemove = arr.length - maxCountsOfAnElement;

  return elementsToRemove;
}

let result = equalizeArray([3, 3, 2, 1, 3]);
console.log(result);
