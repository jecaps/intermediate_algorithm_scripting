/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

// Create a funtion that creates a range of two numbers

function numRanges(arr) {
  for (let i = Math.min(...arr) + 1; i < Math.max(...arr); i++) {
    arr.push(i);
    arr.sort((a, b) => a - b);
  }
  return arr;
}

// Create function that finds the least common multiples of a range of numbers

function smallestCommons(arr) {
  let initialArray = numRanges(arr);
  let newArray = [...initialArray];

  while (newArray.every((n) => n == newArray[0]) == false) {
    // to check if all numbers in the array are equal
    let min = newArray.indexOf(Math.min(...newArray)); // create variable that finds the index of the smallest number of the array
    newArray[min] += initialArray[min]; // add numbers from the initial and new array at the same index
  }

  return newArray[0];
}

console.log(smallestCommons([1, 3]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
