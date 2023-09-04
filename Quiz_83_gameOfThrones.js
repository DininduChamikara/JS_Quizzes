function gameOfThrones(s) {
  let arr = s.split("");

  const charCount = {};
  let oddCharCount = 0;

  // Loop through the array of characters
  for (const char of arr) {
    // If the character is not in the charCount object, initialize it to 1
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      // If the character is already in the charCount object, increment its count
      charCount[char]++;
    }
  }

  // Loop through the keys in the charCount object
  for (const char in charCount) {
    if (charCount[char] % 2 === 1) {
      oddCharCount++;
    }
  }

  // Decision logic 
  if (oddCharCount > 1) {
    return "NO";
  } else {
    return "YES";
  }
}

let result = gameOfThrones("aaabbbbccc");
console.log(result);

