// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//fibonacci **

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//  * @param {number} n
//  * @return {number}

var climbStairs = function (n) {
  let arr = [1, 2];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    console.log("first", arr[i], "second", arr[i - 1], "third", arr[i - 2]);
  }
  console.log("result", arr[n - 1]);
  return arr[n - 1];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
console.log(climbStairs(8));
