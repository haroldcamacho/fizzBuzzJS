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
    it('Should return FizzBuzz when the input is " 15" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(15), "FizzBuzz");
    });
    it('Should return "1" when the input is " 1" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(1), 1);
    });
    it('Should return "2" when the input is " 2" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(2), 2);
    });
    it('Should return the number when the input is not a multiple of 5 or 3 like "17" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(17), 17);
    });
});