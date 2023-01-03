const numbers = [1, 2, 2];

function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b * b, 0);
}

console.log(squareSum(numbers));
