// ArrayChallenge (arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and beain increasina. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the arrav where the numbers were increasing and the next number begins a decreasing-secuence. The arrav will contain at least 3 numbers and it mav contains onlv a sinale sequence, Increasing or decreasina. If meres only a single sequence In ine array, then vour program should return -1 Indexina should begin with 0

//Input: [1, 2, 4, 6, 4, 3, 1]
//Output: 3

// Input: [-4, -2, 9, 10]
// Output: -1

// Inout:[ 5, 4, 3, 2, 10, 11, 7]
// Output: 3

function ArrayChellenge(arr) {
  let sequence = arr[0] > arr[1];
  console.log("se", sequence);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && sequence) {
      continue;
    } else if (arr[i] < arr[i + 1] && !sequence) {
      continue;
    } else {
      return i;
    }
  }
  return -1;
}

console.log(ArrayChellenge([1, 2, 4, 6, 4, 3, 1]));
console.log(ArrayChellenge([-4, -2, 9, 10]));
console.log(ArrayChellenge([5, 4, 3, 2, 10, 11, 7]));
console.log(ArrayChellenge([1, 2, 9, 10]));
