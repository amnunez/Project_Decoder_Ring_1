// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    //  reverses shift if encode = false
    if (encode === false) {
      shift = -shift;
    }
    //get charcode for each char in string and add the shift
    //amount if character is a letter

    const getChar = input
      .toLowerCase()
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        let newCharCode = charCode + shift;

        //  if not a letter, pass to result as is
        if (charCode < 97 || charCode > 122) {
          newCharCode = charCode;
        } else {
          //  create wrap-around if shift creates lower
          //  char code than 97 (a)
          if (newCharCode < 97) {
            newCharCode += 26;
          }
          //create wrap-around if shift creates higher
          //char code than z (122)
          if (newCharCode > 122) {
            newCharCode -= 26;
          }
        }
        return String.fromCharCode(newCharCode);
      });
    return getChar.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
