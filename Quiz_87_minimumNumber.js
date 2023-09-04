function minimumNumber(password) {
  let requiredCharsCount = 0;

  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  const passwordArr = password.split("");

  const numbersArr = numbers.split("");
  const lowerCaseArr = lower_case.split("");
  const upperCaseArr = upper_case.split("");
  const specialCharactersArr = special_characters.split("");

  if (!containsCommonCharacter(passwordArr, numbersArr)) {
    requiredCharsCount++;
  }
  if (!containsCommonCharacter(passwordArr, lowerCaseArr)) {
    requiredCharsCount++;
  }
  if (!containsCommonCharacter(passwordArr, upperCaseArr)) {
    requiredCharsCount++;
  }
  if (!containsCommonCharacter(passwordArr, specialCharactersArr)) {
    requiredCharsCount++;
  }

  if (password.length + requiredCharsCount < 6) {
    requiredCharsCount += 6 - (password.length + requiredCharsCount);
  }

  return requiredCharsCount;
}

function containsCommonCharacter(array1, array2) {
  for (const char1 of array1) {
    for (const char2 of array2) {
      if (char1 === char2) {
        return true; // Found a common character
      }
    }
  }
  return false; // No common character found
}

let result = minimumNumber("Ab1");
console.log(result);
