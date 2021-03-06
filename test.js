/* eslint-disable no-undef */
const assert = require('assert');
const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  // describe('#indexOf()', function() {
  const num = 100;
  const result = fizzBuzz(num); // fizzbuzz returns a list

  it('should return a list of the same length as input', () => {
    assert.equal(result.length, num);
  });

  it('should return Fizz for numbers only divisible by 3', () => {
    assert.equal(result[2], 'Fizz');
  });

  it('should return Buzz for numbers only divisible by 5', () => {
    assert.equal(result[4], 'Buzz');
  });

  it('should return FizzBuzz for numbers divisible by 5 and 3', () => {
    assert.equal(result[14], 'FizzBuzz');
  });

  it('should return the number if not divisible by both 3 and 5', () => {
    assert.equal(result[15], '16');
  });
  // });
});
