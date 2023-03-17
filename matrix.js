// how many holes, or contiguous regions of 0's, exist in the matrix.

// Input:["
// "01111",
//  "01101,
//  "00011",
//  "11110"]
// Output: 3

// Input: ["1011",
// "0010"]
// Output: 2

function SearchingChallenge(strArr) {
  // / code goes here
  // / replace check hole to
  const checkHole = (matrix, row, col) => {
    matrix[row][col] = 2;
    if (matrix[row][col - 1] === "0") {
      matrix[row][col - 1] = 2;
      checkHole(matrix, row, col - 1);
    }
    if (matrix[row][col + 1] === "0") {
      matrix[row][col + 1] = 2;
      checkHole(matrix, row, col + 1);
    }
    if (matrix[row - 1] && matrix[row - 1][col] === "0") {
      matrix[row - 1][col] = 2;
      checkHole(matrix, row - 1, col);
    }
    if (matrix[row + 1] && matrix[row + 1][col] === "0") {
      matrix[row + 1][col] = 2;
      checkHole(matrix, row + 1, col);
    }
  };

  const matrix = strArr.map((char) => char.split(""));
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "0") {
        checkHole(matrix, i, j);
        count++;
      }
    }
  }
  return count;
}

console.log(SearchingChallenge(["01111", "01101", "00011", "11110"]));
console.log(SearchingChallenge(["1011", "0010"]));
console.log(SearchingChallenge(["0001", "0001", "0001", "0001"]));
