/*
convert all letters to lowercase and remove non-alpha chars (letters/numbers)
reads same forward and backwards

input: str

output: T/F

given str, determine if str reads the same forwards and backwards

s = "race a car" -> false
s = "racecar" -> true
s = "" -> true

looping through with 2 pointers
- if pointer is on the same letter at the end, that's ok
- stop looping when pointers cross

steps:
1- declare left and right pointer
left = 0
right = s.length-1

2- declare alphanumeric characters

3 - loop through the word - while left <= right
  -- make letter lower case

  -- if the letter is not alphanumeric, skip it

  -- if left === right pointers, return true

  -- if left letter !== right letter, return false

  -- if left and right letters match,
    left++
    right--

4- return true
*/

function isPalindrome(s: string): boolean { //s = "racecar" -> true
  const alphanumerics = "abcdefghijklmnopqrstuvwxyz1234567890";
  let left = 0; //4
  let right = s.length - 1; //2

  while (left <= right) { //3 <=  3
    const leftChar = s[left].toLowerCase(); //e
    const rightChar = s[right].toLowerCase(); //3

    if (!(alphanumerics.includes(leftChar))) {
      left++;

    } else if (!(alphanumerics.includes(rightChar))) {
      right--;

    } else if (leftChar === rightChar) {
      left++;
      right--;

    } else if (leftChar !== rightChar) {
      return false;
    }

  }
  return true;

};