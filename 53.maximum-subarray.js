/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let maxSoFar = -Infinity;

    for(let num of nums) {
        maxSum = Math.max(maxSum + num, num);
        maxSoFar = Math.max(maxSoFar, maxSum)
    }
    return maxSoFar;
};
// @lc code=end

