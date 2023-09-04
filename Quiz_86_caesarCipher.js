function caesarCipher(s, k) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let capitalAlphabet = alphabet.toUpperCase();
  let alphabetArr = alphabet.split("");
  let capitalAlphabetArr = capitalAlphabet.split("");

  let sArr = s.split("");
  let replaced = "";

  for (const char in sArr) {
    if (alphabetArr.includes(sArr[char])) {
      let charIndex = alphabetArr.indexOf(sArr[char]);
      let newIndex = charIndex + k;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      sArr[char] = alphabetArr[newIndex];
    } else if (capitalAlphabetArr.includes(sArr[char])) {
      let charIndex = capitalAlphabetArr.indexOf(sArr[char]);
      let newIndex = charIndex + k;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      sArr[char] = capitalAlphabetArr[newIndex];
    }
  }

  replaced = sArr.join("");

  return replaced;
}

let result = caesarCipher("There is s-a-starman-waiting-in-the-sky", 3);
console.log(result);
