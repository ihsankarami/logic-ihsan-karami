// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*.
function validAnagram(str1, str2) {
  // Write your code here
  // check string length, anagram should be in same length
  if (str1.length !== str2.length) return false;

  // sort() helps because it places the characters of both strings in the same order
  const a = str1.split("").sort().join("");
  const b = str2.split("").sort().join("");

  return a == b;
}

module.exports = validAnagram;
