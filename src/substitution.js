// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
-[x]The input could include spaces and letters as well as special characters such as #, $, *, etc.
-[x]Spaces should be maintained throughout.
-[x]Capital letters can be ignored.
-[x]The (sub)alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
-[x]All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.
*/

const standardAlphabet = [
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
const alphabet = "xoyqmcgrukswaflnthdjpzibev";

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //if alphabet param does not contain 26 characters return false
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    //find duplicate characters
    let checkForDuplicates = [];
    for (let i = 0; i < alphabet.length; i++) {
      let char = alphabet[i];
      if (!checkForDuplicates.includes(char)) {
        checkForDuplicates.push(char);
      } else {
        return false;
      }
    }
    //ENCODE
    if (encode) {
      const encodedMessage = input
        .toLowerCase()
        .split("")
        .map((char) => {
          let output = "";
          if (char === " " || !standardAlphabet.includes(char)) {
            output += char;
          } else {
            if (standardAlphabet.includes(char)) {
              const inputIndex = standardAlphabet.indexOf(char);
              output += alphabet[inputIndex];
            }
          }
          return output;
        });
      return encodedMessage.join("");
    } else {
      //DECODE
      const decodedMessage = input.split("").map((char) => {
        let output = "";
        if (char === " ") {
          output += char;
        } else {
          if (alphabet.includes(char)) {
            const inputIndex = alphabet.indexOf(char);
            output += standardAlphabet[inputIndex];
          }
        }
        if (alphabet.includes(char)) {
          output === false;
        }
        return output;
      });
      return decodedMessage.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
