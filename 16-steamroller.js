/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(a) {
  return Array.isArray(a) ? [].concat(...a.map(steamrollArray)) : a;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
