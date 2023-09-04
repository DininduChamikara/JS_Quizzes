function stones(n, a, b) {
  if (a === b) {
    return [a * (n - 1)];
  }

  // path ==> first a and then b produce same result as first b and then a
  // based on tree diagram 
  const resultArr = [];
  for (let i = 0; i < n; i++) {
    const value = i * a + (n - i - 1) * b;
    resultArr.push(value);
  }

  return resultArr.sort((a, b) => a - b);
}

let result = stones(4, 10, 100);
console.log(result);
