/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  if (str == letters) {
    return undefined;
  } else {
    let newStr = letters
      .split("")
      .splice(letters.indexOf(str[0]), str.length)
      .filter((c) => !str.includes(c))
      .join("");
    return newStr;
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
