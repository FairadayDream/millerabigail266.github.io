/***********************************************************************
***PROBLEM 1: Passes wordEncoder spec (4 points)***
First, write a function `wordEncoder` that accepts a word (string), and an
offsetIndex (integer). The function should return a new string that replaces
each original character in the word with the character at the index of original
character in the lowercased letters of the alphabet plus the offsetIndex.

You are provided with the alphabet below to use in your solution.

For example:

const ALPHABET = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                   "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        	   			 "w", "x", "y", "z" ];

wordEncoder("a", 5);
	// returns "f" because it replaces each character in the original input
	word with the character that is 5 indexes beyond it in the ALPHABET

wordEncoder("word", 2);
	// returns "yqtf" because it replaces each character in the original input
	word with the character that is 2 indexes beyond it in the ALPHABET

***PROBLEM 2: Passes sentenceEncoder spec (1 point)***
Next, Write a function `sentenceEncoder` that accepts a sentence (string). The
function should return a new sentence string that replaces each original word
in the sentence with an encoded word. To get each encoded word, use the
`wordEncoder` helper function, passing in an offsetIndex equal to the length
of the word itself.

For example:

sentenceEncoder("the input string")
	// returns "wkh nsuzy yzxotm" because each original word is replaced by
	calling the helper function with an offsetIndex equal to the length of
	the word.

***PROBLEM 3: Passes edge cases spec (1 point)***
Refactor one or both of your functions to address the edge cases in these
examples.

sentenceEncoder("end of the alphabet");
	// returns "hqg qh wkh itxpijmb"

sentenceEncoder("CaSing IssUeS");
	// returns "IgYotm OyyAkY"

sentenceEncoder("WhatIfTheStringIsLongerThanTheAlphabet");
	// returns "ItmfUrFtqEfduzsUeXazsqdFtmzFtqMxbtmnqf"

***********************************************************************/

// DO NOT MODIFY provided ALPHABET array
// You may use this ALPHABET variable in your solution to help identify the
// index of each letter in the ALPHABET. For example, "b" is at index 1, and the
// letter 2 indexes beyond "b" is "d" (index 3).
const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
/* 1. wordEncoder - 1 point */

function wordEncoder(word, offsetIndex) {
  const lwc = word.toLowerCase();
  let encord = "";

  for (let i = 0; i < lwc.length; i++) {
    const currentCharacter = lwc[i];
    const currentIndex = ALPHABET.indexOf(currentCharacter);
    let encodedIndex = currentIndex + offsetIndex;

    if (encodedIndex >= ALPHABET.length) {
      encodedIndex -= ALPHABET.length; // Corrected calculation for wrapping around the alphabet
    }

    // Get the character at the encodedIndex in the ALPHABET array and add it to the encodedWord string
    encord += ALPHABET[encodedIndex];
  }

  // Return the encodedWord
  return encord;
}

/* 2. sentenceEncoder - 1 point */

function sentenceEncoder(sentence) {
  if (typeof sentence !== "string" || sentence.trim() === "") {
    return ""; // Return an empty string for invalid input or empty sentences
  }

  const words = sentence.split(" ");
  const encodedWords = [];

  for (const word of words) {
    const offsetIndex = word.length;
    const encodedWord = wordEncoder(word, offsetIndex);
    encodedWords.push(encodedWord);
  }

  return encodedWords.join(" ");
}

// Edge cases testing

console.log(sentenceEncoder("")); // Output: ""
console.log(sentenceEncoder([])); // Output: ""
console.log(sentenceEncoder(null)); // Output: ""
console.log(sentenceEncoder(123)); // Output: ""
console.log(sentenceEncoder("   ")); // Output: ""
console.log(sentenceEncoder("short")); // Output: "vtoxt"
console.log(sentenceEncoder("")); // Output: ""
/*
LOCAL TESTS: Run `node problems/encoder.js` to run this node file, and debug
your code using console.logs.
Un-comment ONLY ONE test case at a time before running the file.

MOCHA TESTS: Run `mocha` to run the mocha tests.
*/

// console.log(wordEncoder("a", 5)); // "f"
// console.log(wordEncoder("word", 2)); // "yqtf"

// console.log(sentenceEncoder("the input string")); // "wkh nsuzy yzxotm"
// console.log(sentenceEncoder("one more")); // "rqh qsvi"
// console.log(sentenceEncoder("how about a longer one")); // "krz fgtzy b rutmkx rqh"

// console.log(sentenceEncoder("end of the alphabet")); // "hqg qh wkh itxpijmb"
// console.log(sentenceEncoder("CaSing IssUeS")); // "IgYotm OyyAkY"
// console.log(sentenceEncoder("WhatIfTheStringIsLongerThanTheAlphabet"));
// 	// "ItmfUrFtqEfduzsUeXazsqdFtmzFtqMxbtmnqf"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = { wordEncoder, sentenceEncoder };
