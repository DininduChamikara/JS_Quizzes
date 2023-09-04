function countingValleys(n, s) {
  let arr = s.split("");

  let seaLevel = 0;
  let seaLevelArr = [0];

  let valleyCount = 0;

  for (const char of arr) {
    if (char === "U") {
      seaLevel++;
    } else {
      seaLevel--;
    }
    seaLevelArr.push(seaLevel);
  }

  for (let i = 1; i < seaLevelArr.length; i++) {
    if (seaLevelArr[i - 1] === 0 && seaLevelArr[i] < 0) {
      valleyCount++;
    }
  }

  return valleyCount;
}

let restult = countingValleys(12, "DDUUDDUDUUUD");
console.log(restult);
