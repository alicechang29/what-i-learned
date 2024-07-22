/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

---
Q: given array of numbers, find the index of 2 numbers that add up to the target
There will always be an answer.

Better than O(n^2), numbers given are not sorted

nums = [6,3,1,8], target = 4
Output: [1,2]

loop through with 2 pointers
while left pointer < right pointer

dont increment left until reach end of array length

length = 4

left = 0
right = 3 (n-1)

if left === right, reset right and increment left

*/

function twoSum(nums: number[], target: number): number[] {

  //[3,2,4], 6
  let left = 0; //1
  let right = nums.length - 1; //2
  const output: number[] = [];

  while (left < nums.length - 1) {
    if (left === right) {
      left++;
      right = nums.length - 1;
    }
    if (nums[left] + nums[right] === target) { //1,3 = 4
      return [left, right];
    }

    right--;

  }
  return output;
};