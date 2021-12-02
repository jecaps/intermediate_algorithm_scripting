/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
*/

function addTogether(...x) {
  if (x.length > 1) {
    if (x.every((X) => typeof X === "number")) {
      return x.reduce((a, b) => a + b);
    }
  } else if (x.length == 1 && typeof x[0] === "number") {
    return function (y) {
      if (typeof y === "number") {
        return Number(x) + Number(y);
      }
    };
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
