function fizzbuzz(num) {
  let result = num;
  if (num % 3 === 0 && num % 5 === 0) {
    return ("FizzBuzz");
  }
  if (num % 3 === 0) {
    result = "Fizz";
  }
  if (num % 5 === 0) {
    result = "Buzz";
  }
  return (result);
};

function generateFizzbuzzSequence(value) {
  for (let count = 0; count < value; count++) {
    console.log(fizzbuzz(count));
  }
};

module.exports = {
  fizzbuzz, generateFizzbuzzSequence
};