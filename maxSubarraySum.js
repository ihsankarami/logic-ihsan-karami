// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

function maxSubarraySum(arr, num) {
  // initialize the maximum sum and the current sum
  let maxSum = 0;
  let currentSum = 0;

  // calculate the sum of the first 'length' elements
  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  // iterate through the rest of the array
  for (let i = num; i < arr.length; i++) {
    // update current sum by adding the next element and removing the first element of the previous subarray
    currentSum += arr[i] - arr[i - num];
    // update maxSum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
