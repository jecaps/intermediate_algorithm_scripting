/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 
4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number == 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      // not a prime
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  let i = 0;

  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumPrimes(100000));
