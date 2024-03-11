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

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

check if the value in nums1 exists in nums2
if it does, check if the value already exists in the output 
if it doesnt, add it to the output

do a freq counter on nums1 array 
check it against nums2 
if it exists, put it in the output 

*/

var intersection = function (nums1, nums2) {
  //[1,2,2,1]
  let counterObj = {};
  //1:true, 2: true
  for (let val of nums1) {
    if (!(val in counterObj)) {
      counterObj[val] = true;
    }
  }
  let output = [];

  for (let val of nums2) {
    if (counterObj[val]) {
      output.push(val);
      counterObj[val] = undefined;
    }
  }
  return output;
};

/*
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. 
More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

Example 1:

Input:  order = "cba", s = "abcd" 

Output:  "cbad" 

Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:

Input:  order = "bcafg", s = "abcd" 

Output:  "bcad" 

Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.


ex3: 
order = "kqep"
s = "pekeq"

output: "kqeep"

Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.


given 2 strings, Order and S 

order can contain letters that are not included in s 

if the letter in order is included in s, push that into an output 
else skip the letter 

if there are any remaining letters in s that are not in output, tack it onto the end 

can do a freq counter on s 
run a loop on order string 
if the letter in order is in the freq counter, add it into output and subtract 1 
if there are any values remaining, tack them to the end of output 

*/
var customSortString = function (order, s) {
  /*
order = "kqep"
s = "pekeq"

output: "kqeep"
  */
  const sCharsObj = freqCounter(s);

  let output = ""; //cbad

  for (let char of order) {
    while (sCharsObj[char]) {
      //if this is truthy, add to output
      output += char;
      //subtract 1
      sCharsObj[char]--;
    }
  }

  for (let key in sCharsObj) {
    //looping through the sCharsObj
    while (sCharsObj[key]) {
      //while the key's val is truthy
      output += key;
      //keep on adding the key
      sCharsObj[key]--;
      //subtract the key's value
    }
  }
  return output;
};

function freqCounter(s) {
  let counter = {};
  for (let char of s) {
    if (!(char in counter)) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }
  }
  return counter;
}
