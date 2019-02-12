var assert = require('assert');
var fizzBuzzFunctions = require("../fizzbuzz.js")

describe('Fizzbuzz Function Tests', function () {
    it('Should return FizzBuzz when the input is "0" ', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(0), "FizzBuzz");
    });
});