/*
 Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list. [Kuya]

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
Example:
- abcd

The next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.
*/

function biggerIsGreater(word) {
  // Write your code here

  // make string to array
  let chars = word.split("");
  let n = chars.length;
  let i, x;

  for (i = n - 2; i >= 0; i--) {
    if (chars[i] < chars[i + 1]) {
      break;
    }
  }

  if (i === -1) {
    return "no answer";
  }

  for (x = n - 1; x > 1; x--) {
    if (chars[x] > chars[i]) {
      break;
    }
  }

  [chars[i], chars[x]] = [chars[x], chars[i]];

  let a = chars.slice(i + 1).reverse();
  chars = chars.slice(0, i + 1).concat(a);

  return chars.join("");
}
