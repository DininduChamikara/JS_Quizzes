// don't no about the purpose, to pass all the test cases, I have to use the below code
// without the code below, it gives 'i is not defined' error
let i = 0;

function getPermutations(sentence, word) {
  const words = [
    ...new Set(
      (word && (sentence || "").match(new RegExp(`\\w*${word}\\w*`, "g"))) || []
    ),
  ];
  return { words, permutations: permutations(words) };
}

function permutations(words) {
  if (!words || words.length === 0) return [];
  return words.length === 1
    ? words
    : words.reduce((acc, x, index) => {
        const remaining = [...new Set(words)].filter((y, j) => index !== j);
        return [...acc, ...permutations(remaining).map((a) => [x, a].flat())];
      }, []);
}

let result = getPermutations("THIS IS AN ISSUE FROM GIHAN", "IS");
// let result = getPermutations("", "IS");
console.log(result);

