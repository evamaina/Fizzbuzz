/* eslint-disable no-plusplus */
/**
 * FizzBuzz Generator
 * @param {number} n - The number of times to 'print' Fizz, Buzz or FizzBuzz
 * @return {Array.<string>} Fizz, Buzz or FizzBuzz.
 */
const fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let str = '';

    if (i % 3 === 0) {
      str += 'Fizz';
    }

    if (i % 5 === 0) {
      str += 'Buzz';
    }

    if (!str) {
      str += i;
    }

    result.push(str);
  }

  return result;
};

// console.log(fizzBuzz(50));

module.exports = fizzBuzz;
