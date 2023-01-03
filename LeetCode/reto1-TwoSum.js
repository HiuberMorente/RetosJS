/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [3, 2, 4];
const target = 6;

var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let suma = nums[i] + nums[j];
      console.log(suma);
      if (suma === target) {
        result.push(i, j);
      }
    }
  }

  return result;
};

var sumTwo = (nums, target) => {
  
};

console.log(twoSum(nums, target));

console.log(sumTwo(nums, target));
