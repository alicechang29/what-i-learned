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

/*
You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.



Example 1:

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
Example 2:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

count upt all the nums in the array using freq counter
find which key/val is the max frequency

find all the keys that have this max freq
- if there is a match, add 1 to the count
return count
*/

var maxFrequencyElements = function (nums) {
  let counter = {};
  for (let num of nums) {
    if (!(num in counter)) {
      counter[num] = 1;
    } else {
      counter[num]++;
    }
  }

  let maxFreq = -Infinity;

  for (let key in counter) {
    maxFreq = Math.max(maxFreq, counter[key]);
  }

  let countOfMaxes = 0;

  for (let key in counter) {
    if (counter[key] === maxFreq) {
      countOfMaxes += maxFreq;
    }
  }
  return countOfMaxes;
};


/*
You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] denotes the value of tokeni.

Your goal is to maximize the total score by strategically playing these tokens.
In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

Face-up: If your current power is at least tokens[i], you may play tokeni,
losing tokens[i] power and gaining 1 score.

Face-down: If your current score is at least 1, you may play tokeni,
gaining tokens[i] power and losing 1 score.

Return the maximum possible score you can achieve after playing any number of tokens.



Example 1:

Input: tokens = [100], power = 50

Output: 0

Explanation: Since your score is 0 initially, you cannot play the token face-down.
You also cannot play it face-up since your power (50) is less than tokens[0] (100).

Example 2:

Input: tokens = [200,100], power = 150

Output: 1

Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.

There is no need to play token0, since you cannot play it face-up to add to your score.
The maximum score achievable is 1.

Example 3:

Input: tokens = [100,200,300,400], power = 200

Output: 2

Explanation: Play the tokens in this order to get a score of 2:

Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
The maximum score achievable is 2.



Constraints:

0 <= tokens.length <= 1000
0 <= tokens[i], power < 104

i have a group of tokens
each token is a different value

i have a power score

when i have 0 points, i need to find the lowest token that i have
- i will lose power = to token[i]
- i will gain 1 point

when i have more than 0 points, i need to find the highest token that i have
- i will lose 1 point when i play the highest token
- i will gain power = to token[i]

goal is to:
get most points by maximizing the amount of power that i have so i can purchase as
many tokens as possible

sort tokens in ascending order
- check if lowest token is smaller than power
> if no, return 0
> if yes, subtract token from power and score++, leftPointer++

once score is 1, find the highest token value
> score--
> power += token value, rightPointer--

check if left token is smaller than power
> if no, if score is 0, return score,
else, power+= tokenvalu, score--

> if yes, subtract token from power and score++, leftPointer++


*/

var bagOfTokensScore = function (tokens, power) {
  //sort in asc order
  tokens.sort(function (a, b) {
    return a - b;
  });

  //Input: tokens = [100,200,300,400], power = 200

  //power = 100+400 = 500 -200 = 300  = 0

  let score = 0; //2

  let left = 0; //3
  let right = tokens.length - 1; //2

  //fail fast
  if (tokens[left] > power) {
    return 0;
  }

  while (left <= right) { //1 < 2

    if (tokens[left] <= power) {
      power -= tokens[left];
      score++;
      left++;

    } else if (tokens[left] > power && tokens[right] !== undefined && left !== right) {
      power += tokens[right];
      score--;
      right--;
    } else {
      break;
    }
  }
  return score;
};

/*
Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all
elements between x and n inclusively.

Return the pivot integer x. If no such integer exists, return -1.
It is guaranteed that there will be at most one pivot index for the given input.

Example 1:

Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.
Example 3:

Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.


Constraints:

1 <= n <= 1000

given the ending number (n):
find the number where:
sum between 1 and x is equal to sum between x and n

the range of numbers is 1 to n

[1,2,3,4,5,6,7,8]
leftSum = 1+2+3+4 = 10+5 = 21
leftPoint = 5
rightSum = 8+7 = 21
rightPoint = 5

while (leftPoint <= rightPoint)
if leftSum is less than rightSum, increase left pointer until leftSum is greater than or equal to rightSum
else, increase rightPointer until rightSum is >= to leftSum
*/

var pivotInteger = function (n) {
  //create an array from 1 to n
  let rangeNums = [];
  for (let i = 1; i <= n; i++) {
    rangeNums.push(i);
  }
  //[1,2,3,4,5,6,7,8]
  let leftPointer = 0; //5
  let rightPointer = rangeNums.length - 1; //5

  let leftSum = rangeNums[leftPointer]; //1+2+3+4+5+6
  let rightSum = rangeNums[rightPointer];//8+7+6

  while (leftPointer < rightPointer) { //3 <=6
    if (leftSum <= rightSum) { //15 <=15
      leftPointer++;
      leftSum += rangeNums[leftPointer];
    } else { //leftSum > rightSum 21 > 15
      rightPointer--;
      rightSum += rangeNums[rightPointer];
    }
  }

  if (leftSum !== rightSum) {
    return -1;
  }

  return rangeNums[leftPointer];
};



/*
Given a binary array nums, return the maximum length of a contiguous subarray with an
equal number of 0 and 1.

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

given an array of 0 and 1's, find the longest subarray with equal numbers of both

[0,0,0,1,1,1]

count all the numbers. if 0 and 1 have same count, return the input array

else

start at i = 0. if val is 1, nxt has to be 0. else move i
if val is 1 and next is 0, push into array and move i


*/

var findMaxLength = function (nums) {

  let maxLen = 0; // 6
  let balance = 0; //-1

  let balanceMap = { 0: -1 };

  /*

{  0: -1,
  -1: 4,
  -2: 3,
  -3: 2,
   0: 5
};

Iterate through the array and update the balance variable accordingly.
For each balance encountered, store its index in the map if it hasn't been stored before.

[0,0,0,1,1,1]
  */

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 0) {
      balance--;
    } else {
      balance++;
    }
    if (!(balance in balanceMap)) {

      balanceMap[balance] = i;

    } else {
      //calculate the length
      let currLen = i - balanceMap[balance]; // 2 - 0 = 2
      maxLen = Math.max(maxLen, currLen);

      //update the index
      balanceMap[balance] = i;
    }
  }

  return maxLen;
};



/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j
in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

given an array, and an integer - k
see if there are 2 values that are the same AND the index at of those values fits criteria
abs(i - j) <= k

find all the values and the index of those values:

{1: [0, 3],
 2: [1],
 3: [2]}

{1: [0,3]
 2: [1,4]
 3: [2,5]}

 if arr.length > 1:
 check for the difference

 difference check

*/

var containsNearbyDuplicate = function (nums, k) {
  //[1,2,3,1,1,2,3], 0

  let indexOfVals = {};

  for (let i = 0; i < nums.length; i++) {

    if (!(nums[i] in indexOfVals)) {
      indexOfVals[nums[i]] = [i];
    } else {
      indexOfVals[nums[i]].push(i);
    }
  }

  for (let key in indexOfVals) {

    if (indexOfVals[key].length > 1) {

      let i = 0;
      let j = i + 1;

      while (i < indexOfVals[key].length - 1) {
        if (indexOfVals[key][j] !== undefined) {
          if (Math.abs(Number(indexOfVals[key][i], indexOfVals[key][j])) <= k) {
            return true;
          }
          j++;
        } else {
          i++;
          j = i;
        }
      }
    }
  }
  return false;
};


/*
You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key.
For example, s = "ab" has a change of a key while s = "bBBb" does not have any.

Return the number of times the user had to change the key.

Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a'
and then the letter 'A' then it will not be considered as a changing of key.


Example 1:

Input: s = "aAbBcC"
Output: 2
Explanation:
From s[0] = 'a' to s[1] = 'A', there is no change of key as caps lock or shift is not counted.
From s[1] = 'A' to s[2] = 'b', there is a change of key.
From s[2] = 'b' to s[3] = 'B', there is no change of key as caps lock or shift is not counted.
From s[3] = 'B' to s[4] = 'c', there is a change of key.
From s[4] = 'c' to s[5] = 'C', there is no change of key as caps lock or shift is not counted.

Example 2:

Input: s = "AaAaAaaA"
Output: 0
Explanation: There is no change of key since only the letters 'a' and 'A' are pressed which does not require change of key.


Constraints:

1 <= s.length <= 100
s consists of only upper case and lower case English letters.

note the starting letter
if the letter changes, count as 1
store the prev letter
do for entire string
*/

var countKeyChanges = function (s) {
  let startKey = s[0].toLowerCase();
  let count = 0;

  let i = 1;
  while (i < s.length) {

    if (s[i].toLowerCase() === startKey) {
      i++;

    } else {
      count++;
      startKey = s[i].toLowerCase();
    }
  }
  return count;

};

/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n]
and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []


Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.

count up the appearances of ea number

*/

var findDuplicates = function (nums) {
  let output = [];
  for (let val of nums) {
    if (!(val in counter)) {
      counter[val] = 1;
    } else {
      output.push(val);
    }
  }
  return output;
};