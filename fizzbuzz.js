/* eslint-disable no-plusplus */

/**
 * Divisibility Test
 * @param {number} n - The number
 * @param {number} d - Divisor
 * @return {boolean} Whether n is divisible by d.
 */
const divisibleBy = (n, d) => n % d === 0;

/**
 * FizzBuzz Generator
 * @param {number} n - The number of times to 'print' Fizz, Buzz or FizzBuzz
 * @return {Array.<string>} Fizz, Buzz or FizzBuzz.
 */
const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let str = '';

    switch (true) {
      case divisibleBy(i, 15):
        str += 'FizzBuzz';
        break;
      case divisibleBy(i, 3):
        str += 'Fizz';
        break;
      case divisibleBy(i, 5):
        str += 'Buzz';
        break;
      default:
        str += i;
    }
    result.push(str);
  }

  return result;
};


console.log(fizzBuzz(20));

module.exports = fizzBuzz;
