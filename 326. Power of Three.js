// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Input: n = 27
// Output: true

// Input: n = 0
// Output: false

// Input: n = 9
// Output: true

//  * @param {number} n
//  * @return {boolean}

var isPowerOfThree = function (n) {
  //      if (n === 1) return true
  //       for(let i=3; i<=n; i*=3){
  //           console.log(i)
  //         if (i === n)
  //             return true
  //       }

  //       return false

  return parseInt(3 ** parseInt(Math.log(n) / Math.log(3))) === n;
};
