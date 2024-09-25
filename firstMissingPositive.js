/*
Given an unsorted integer array nums, find the smallest missing positive integer.
Input: An unsorted array of integers nums[] which may contain both positive and negative numbers.
Output: Return the smallest missing positive integer.

Example:
Input: [1, 2, 0]
Output: 3
Explanation: The numbers 1 and 2 are present, so the smallest missing positive integer is 3.

Input: [3, 4, -1, 1]
Output: 2
Explanation: The smallest missing positive integer is 2.

Input: [7, 8, 9, 11, 12]
Output: 1
Explanation: The smallest missing positive integer is 1 since none of the positive integers starting from 1 are present.
*/

function firstMissingPositive(numbers) {
  // Write your code here

  // Filter positive numbers and sort the array
  let positiveNums = numbers.filter((num) => num > 0).sort((a, b) => a - b);
  // Start looking the smallest missing positive from 1
  let smallestMissing = 1;

  for (let i = 0; i < positiveNums.length; i++) {
    // If the current number equals the smallestMissing, move to the next
    if (positiveNums[i] === smallestMissing) {
      smallestMissing++;
    }
  }

  return smallestMissing;
}

module.exports = firstMissingPositive;
