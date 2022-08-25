// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// @param {string} s
// @return {boolean}

var isValid = function (s) {
  let stack = [];
  let map = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    // If character is an opening brace add it to a stack
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      console.log(s[i], stack);
    }
    //  If that character is a closing brace, pop from the stack,
    // which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();
      console.log("pop", last, stack);
      //If the popped element from the stack, which is the last opening brace
      // doesn’t match the corresponding closing brace in the map, then return false
      if (s[i] !== map[last]) {
        console.log("whar", s[i]);
        console.log(map[last]);
        return false;
      }
    }
  }
  // By the completion of the for loop after checking all the brackets of
  // the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {
    console.log("length", stack.length);
    return false;
  }
  return true;
};
