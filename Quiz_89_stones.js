let stoneValuesArr = [];

function stones(n, a, b) {
  findLastStoneValue(n, a, b, 0);

  let uniqueStoneValuesArr = [...new Set(stoneValuesArr)];
  return uniqueStoneValuesArr.sort((a, b) => a - b);
}

function findLastStoneValue(n, a, b, lastStoneValue) {
  if (n === 1) {
    stoneValuesArr.push(lastStoneValue);
    return;
  } else {
    findLastStoneValue(n - 1, a, b, lastStoneValue + a);
    findLastStoneValue(n - 1, a, b, lastStoneValue + b);
  }
}

let result = stones(3, 1, 2);
console.log(result);
