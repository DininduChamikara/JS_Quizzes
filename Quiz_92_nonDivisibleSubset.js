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
  }

  !(k % 2) && !!values[k / 2] && (result += 1);

  values[0] && (result += 1);

  return result;
}

let result = nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]);
console.log(result);
