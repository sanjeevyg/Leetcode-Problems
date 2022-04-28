/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in obj) {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i;
    } 
};
// @lc code=end

