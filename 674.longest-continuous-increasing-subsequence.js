/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let anchor = 0;
    let ans = 0;

    for(let i = 0; i < nums.length; i++) {
        if( i > 0 && nums[i - 1] >= nums[i]) anchor = i;
        ans = Math.max(ans, i - anchor + 1)
    }
    return ans
};
// console.log(findLengthOfLCIS([1,3,5,7]))
// console.log(findLengthOfLCIS([1,3,5,4,7]))
// console.log(findLengthOfLCIS([2,2,2,2,2]))
// @lc code=end

