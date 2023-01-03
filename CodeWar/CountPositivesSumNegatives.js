//* Given an array of integers.

//* Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//* If the input is an empty array or is null, return an empty array.

//* Example
//? For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const positivesNegative = [-36,-3,-65];

// function countPositivesSumNegatives(input) {
//   // your code here
//   let result = [];

//   const positiveNumbers = input ? input.filter((num) => num > 0) : [];
//   const negativeNumbers = input ? input.filter((num) => num < 0) : [];
//   const sumNegativeNumbers = negativeNumbers.reduce((a, b) => a + b, 0);

//   if (negativeNumbers !== 0 || positiveNumbers.length !== 0)
//     result.push(positiveNumbers.length, sumNegativeNumbers);

//   return result;
// }

function countPositivesSumNegatives(input) {
  return !input || !input.length ? [] : [
    input.filter(num => num > 0).length,
    input.filter(num => num < 0).reduce((a, b) => a + b)
  ]
}


console.log(countPositivesSumNegatives(positivesNegative));
