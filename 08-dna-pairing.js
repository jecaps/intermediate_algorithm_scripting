/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let newStr = [];
  for (let char of str) {
    switch (char) {
      case "A":
        newStr.push(["A", "T"]);
        continue;
      case "T":
        newStr.push(["T", "A"]);
        continue;
      case "C":
        newStr.push(["C", "G"]);
        continue;
      case "G":
        newStr.push(["G", "C"]);
        continue;
    }
  }
  return newStr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
