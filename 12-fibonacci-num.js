/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let arr = [1, 1];
  let sumLastTwo = 2;

  while (sumLastTwo <= num) {
    arr.push(sumLastTwo);
    sumLastTwo = parseInt(arr.slice(-2, -1)) + parseInt(arr.slice(-1));
  }
  return arr.filter((n) => n % 2 != 0).reduce((a, b) => a + b);
}

console.log(sumFibs(4));