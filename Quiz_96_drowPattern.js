function drowPattern(x) {
  let resultArr = [];
  let lineArr = new Array(x).fill("O");

  for (let i = 0; i < x; i++) {
    if (i < x / 2) {
      for (let j = 0; j < x; j++) {
        if (j === Math.floor(x / 2) - i) {
          lineArr[j] = "X";
          lineArr[x - j - 1] = "X";
        }
      }
      resultArr[i] = [...lineArr];
    } else {
      for (let j = 0; j < x; j++) {
        if (j === i - Math.floor(x / 2) - 1) {
          lineArr[j] = "O";
          lineArr[x - j - 1] = "O";
        }
      }
      resultArr[i] = [...lineArr];
    }
  }

  return resultArr;
}

let result = drowPattern(5);
console.log(result);
