/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, 
and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
  let regex = /[^aeiou]/;
  if (!str[0].match(regex)) {
    str += "way";
  } else {
    if ([...str].every((c) => regex.test(c))) {
      str += "ay";
    } else {
      while (str[0].match(regex)) {
        str = str.slice(1) + str.slice(0, 1);
      }
      str += "ay";
    }
  }
  return str;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
