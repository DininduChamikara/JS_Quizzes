function fairRations(b) {
  let loaves = 0;
  let i = 0;
  let end = b.length - 1;

  while (i < end) {
    if (b[i] % 2 !== 0) {
      b[i]++;
      b[i + 1]++;
      loaves += 2;
    }
    i++;
  }
  if (b[end] % 2) {
    return "NO";
  }else{
    return loaves;
  }
}

let result = fairRations([2, 3, 4, 5, 6]);
console.log(result);
