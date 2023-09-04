function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let second = arr[j];
      if (first + second === m) {
        return [i + 1, j + 1];
      }
    }
  }
}

let result = icecreamParlor(4, [6, 3, 5, 1, 2]);
console.log(result);
