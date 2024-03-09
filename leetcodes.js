/*
https://leetcode.com/problems/transpose-matrix/submissions/1198068382/
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, 
switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109

given a matrix, i need to pull out the values from the matching indexes 
from each nested array and put it in an output array so that: 

[[all the index 0's], [all the index 1's], etc]

can loop through the given array, and access each nested array
create an object by index values 
- for each nested array, push in the value by index into the object 

loop over the object 
put all the key values into an output array 

*/
var transpose = function (matrix) {
  let output = [];
  let matrixObj = objOfIndexes(matrix);
  for (let key in matrixObj) {
    output.push(matrixObj[key]);
  }
  return output;
};

function objOfIndexes(matrix) {
  //[[1,2,3],[4,5,6],[7,8,9]]
  let matrixObj = {};
  /*
    matrixObj = {
        0: [1,4,7], 
        1: [2,5,8], 
        2: [3,6,9]
    }
  */
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (j in matrixObj) {
        //0
        matrixObj[j].push(row[j]);
      } else {
        matrixObj[j] = [row[j]];
      }
    }
  }
  return matrixObj;
}
