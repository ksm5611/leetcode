// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}

var twoSum = function (nums, target) {
  let empty = [];
  const maps = new Map();
  for (let i = 0; i < nums.length; i++) {
    maps.set(nums[i], i);
    // console.log(maps.set(nums[i], i));
  }
  for (let i = 0; i < nums.length; i++) {
    // console.log("has", maps.has(target - nums[i]));
    // console.log("get", maps.get(target - nums[i]));
    // console.log("push", empty.push(i, maps.get(target - nums[i])));
    if (maps.has(target - nums[i]) && maps.get(target - nums[i]) !== i) {
      empty.push(i, maps.get(target - nums[i]));
      return empty;
    }
  }
  return empty;
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
