function marsExploration(s) {
  const substrings = [];
  let changedCount = 0;

  for (let i = 0; i < s.length; i += 3) {
    substrings.push(s.slice(i, i + 3));
  }
  for (const substring of substrings) {
    let substringCharArr = substring.split("");
    if(substringCharArr[0] !== "S") {
        changedCount++;
    }
    if(substringCharArr.length > 1 && substringCharArr[1] !== "O") {
        changedCount++;
    }
    if(substringCharArr.length > 2 && substringCharArr[2] !== "S") {
        changedCount++;
    }
  }
  return changedCount;
}

let result = marsExploration("SSOSSPSSQSSOR");
console.log(result);
