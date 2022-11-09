// write a function that will find all the vowels [a,e,i,o,u] inside a string and then flip the order of only the vowels. if there is an odd number of vowels then the one in the middle stays in the same position.
// complete this task with the fewest number of loops and iterations as possible.
// cottage => cettago
// hello => holle
// sauce => seuca
// javascript => jivascrapt

// solution 1
const process = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let matches = Array.from(word).reduce((acc, curr, index) => {
    if (vowels.includes(curr)) {
      acc.push(index);
    }
    return acc;
  }, []);
  console.log("index position:", matches);

  const wordCopy = Array.from(word);
  for (let i = 1; i <= matches.length / 2; i++) {
    let ltr = word.substring(
      matches[matches.length - i],
      matches[matches.length - i] + 1
    );

    let removed = wordCopy.splice(matches[i - 1], 1, ltr);
    wordCopy.splice(matches[matches.length - 1], 1, removed[0]);

    word = wordCopy.join("");
  }

  return word;
};

console.log(process("javascript"));
console.log(process("cottage"));
console.log(process("hello"));


// solution 2
function flip(str) {
  let vowels = ["a", "e", "i", "o", "u"];

  let arrVowels = str.split("").filter((letter) => vowels.indexOf(letter) > -1);
  console.log("an array of vowels:",arrVowels)

  let result = str
    .split("")
    .map((letter) => (vowels.indexOf(letter) > -1 ? arrVowels.pop() : letter));

  return [str, result.join("")];
}
console.log(flip("javascuooript"));
console.log(flip("cottage"));
console.log(flip("hello"));