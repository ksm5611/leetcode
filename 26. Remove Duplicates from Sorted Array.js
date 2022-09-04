// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

//  * @param {number[]} nums
//  * @return {number}

var removeDuplicates = function (nums) {
  //numCount ->   전 숫자와 다를때 ++
  let numCount = 1;
  let numsLength = nums.length;
  for (let i = 1; i < numsLength; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[numCount] = nums[i];
      numCount++;
    }
  }
  // console.log(nums);
  nums = nums.slice(0, numCount);
  // return numCount;
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
