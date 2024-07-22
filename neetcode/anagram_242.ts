/*
words are anagrams if all letters in 1 word can construct other word with no repeats

fail fast:
- if strs are diff sizes

input: 2 strings (s & t)
output: T/F

Return True if t string has all the letters to construct s string

s = anagram
t = nagaram
True

s = rat
t = car
False

s = a
t = ab
False

Freq counter for t string
Loop through s and check if the letter exists within t
- if so, check if the count of letter within t is greater than 0,
if so, -1
- if not, return False


n: 0
a: 0
g: 0
r: 0
m: 0

*/

function isAnagram(s: string, t: string): boolean {
  //s = anagram  t = nagaram

  if (s.length !== t.length) return false;

  const tStrLetterCount = countLetterFreq(t);
  //O(n)
  for (const letter of s) { //a
    if (!(letter in tStrLetterCount) || tStrLetterCount[letter] < 1) {
      return false;
    }
    tStrLetterCount[letter]--;
  }
  //O(n)
  for (const key in tStrLetterCount) {
    if (tStrLetterCount[key] > 0) return false;
  }

  return true;
};

function countLetterFreq(inputStr: string): Record<string, number> {
  //t = nagaram
  const letterCounter: Record<string, number> = {};
  //O(n)
  for (const letter of inputStr) {
    if (letter in letterCounter) {
      letterCounter[letter] += 1;
    } else {
      letterCounter[letter] = 1;
    }

  }

  return letterCounter;
}

