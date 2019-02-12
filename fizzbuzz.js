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
  let sequence=[];
  for (let count = 0; count < value; count++) {
    sequence.push(fizzbuzz(count));
    console.log(sequence[count]);
  }
  return sequence;
};
module.exports = {
  fizzbuzz, generateFizzbuzzSequence
};