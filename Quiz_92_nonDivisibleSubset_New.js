function nonDivisibleSubset(k, s) {
  let values = new Array(k).fill(0);
  let result = 0;

  s.reduce((target, item, index) => {
    values[item % k]++;
    return target;
  }, []);

  for (let i of Array.from(
    { length: (k + 1) / 2 - 1 },
    (value, index) => index + 1
  )) {
    result += Math.max(values[i], values[k - i]);
    // console.log(result);
  }

  if (k % 2 === 0 && values[k / 2] > 0) {
    result++;
  }

  if (values[0] > 0) {
    result++;
  }

  return result;
}

let result = nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]);
console.log(result);




