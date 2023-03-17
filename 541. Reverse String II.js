// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Input: s = "abcd", k = 2
// Output: "bacd"

//  * @param {string} s
//  * @param {number} k
//  * @return {string}

var reverseStr = function (s, k) {
  const stringArr = s.split("");
  //every 2k +
  for (let i = 0; i < stringArr.length; i += 2 * k) {
    const reverse = stringArr.splice(i, k).reverse();
    stringArr.splice(i, 0, ...reverse);
  }
  return stringArr.join();
};

var reverse = function (s) {
  return s.split("").reduce((reversed, char) => {
    reversed = char + reversed;
    return reversed;
  }, "");
};

var reverse = function (s) {
  const stringArray = s.split("");
  let reversed = "";
  for (let i = 0; i < stringArray.length; i++) {
    reversed = stringArray[i] + reversed;
  }
  return reversed;
};
//reverse integer
var reverse = function (x) {
  const reversedNo = parseFloat(String(x).split("").reverse().join(""));

  if (reversedNo > Math.pow(2, 31)) {
    return 0;
  }
  if (x > 0 && reversedNo > Math.pow(2, 31) - 1) {
    return 0;
  }

  return x < 0 ? -reversedNo : reversedNo;
};

console.log(reverse("abcd"));

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
