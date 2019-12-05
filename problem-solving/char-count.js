// first approach problems, then worry about refactor

// function charCount(str) {
//   const inputStr = str.toLowerCase();
//
//   let result = {}
//
//   for (let i = 0; i < inputStr.length; i++) {
//     let char = inputStr[i];
//
//     if (result[char] > 0) {
//       result[char]++;
//     }
//
//     else {
//       result[char] = 1;
//     }
//   }
//
//   return result;
// }

// refactor
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  
  return !(!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123));
}

function charCount(str) {
  const inputStr = str.toLowerCase();
  const result = {}
  
  for (let char of inputStr) {
    if (isAlphanumeric(char)) {
      result[char] = result[char]++ || 1;
    }
  }
  
  return result;
}

