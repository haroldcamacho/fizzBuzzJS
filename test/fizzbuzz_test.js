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
    it('Should return "Fizz" when the input is a multiple of 3 like 9', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(9), "Fizz");
    });
    it('Should return "Buzz" when the input is a multiple of 5 like 10', function () {
        assert.equal(fizzBuzzFunctions.fizzbuzz(10), "Buzz");
    });
    describe('Fizzbuzz Sequence Generator Function Tests', function () { 
        it('Should return an empty Sequence when the input is 0" ', function () {
            assert.equal(fizzBuzzFunctions.generateFizzbuzzSequence(0).length, 0);
        });
        it('Should return a Sequence of size 1 and the word "FizzBuzz" when the input is 1" ', function () {
            let resultSequence=fizzBuzzFunctions.generateFizzbuzzSequence(1)
            assert.equal(resultSequence.length, 1);
            assert.equal(resultSequence[0], "FizzBuzz");
        });
        it('Should return a Sequence of size 2, when the input is 2" ', function () {
            let resultSequence=fizzBuzzFunctions.generateFizzbuzzSequence(2)
            assert.equal(resultSequence.length, 2);
        });
        it('Should contain the word FizzBuzz and the value "1" , when the input is "2" in the positions "0" and "1" respectively', function () {
            let resultSequence=fizzBuzzFunctions.generateFizzbuzzSequence(2)
            assert.equal(resultSequence[0], "FizzBuzz");
            assert.equal(resultSequence[1], 1);
        });
    });
});