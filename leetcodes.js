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

/*
https://leetcode.com/problems/minimum-common-value/submissions/1198965520/?envType=daily-question&envId=2024-03-09
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. 
If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer. 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.
Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 

Constraints:

1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[j] <= 109
Both nums1 and nums2 are sorted in non-decreasing order.

loop through array 1 
if the value is included in array 2, return it 
both arrays are sorted in ascending order  

loop through nums1 and collect the values 
loop through nums2, if the value already exists in the object, return it 
else -1 
*/

var getCommon = function (nums1, nums2) {
  let counterObj = {};
  for (let num of nums1) {
    if (!(num in counterObj)) {
      counterObj[num] = true;
    }
  }
  for (let num of nums2) {
    if (counterObj[num]) {
      return num;
    }
  }
  return -1;
};
