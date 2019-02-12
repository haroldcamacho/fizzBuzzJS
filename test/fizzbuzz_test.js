var assert = require('assert');
var fizzBuzzFunctions = require("../fizzbuzz.js")

describe('Fizzbuzz Function Tests', function () {
    it('Should return FizzBuzz when the input is "0" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(0), "FizzBuzz");
    });
    it('Should return Fizz when the input is "3" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(3), "Fizz");
    });
    it('Should return Buzz when the input is "5" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(5), "Buzz");
    });
});