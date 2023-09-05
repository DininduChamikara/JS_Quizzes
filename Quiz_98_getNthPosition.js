function getNthPosition(a, b, n) {
  let combinedStr = b;

  let firstStr = a;
  let secondStr = b;

  while (combinedStr.length < n) {
    combinedStr = firstStr + combinedStr;
    firstStr = secondStr;
    secondStr = combinedStr;
  }

  let result = combinedStr.slice(n - 1, n);

  return result;
}

let result = getNthPosition("1415", "8979", 10);
console.log(result);
