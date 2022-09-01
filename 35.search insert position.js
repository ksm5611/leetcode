// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
var searchInsert = function (nums, target) {
  let numOflength = nums.length;
  for (let i = 0; i < numOflength; i++) {
    let result = target - nums[i];
    if (result === 0) return i;
    if (result < 0) return i;
  }
  return numOflength;
};

console.log(searchInsert([1, 3, 5, 6], 5) === 2);
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
