/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length/2;
    let obj = {};

    for(let i = 0; i < nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
        }
        if (obj[nums[i]] > n) return nums[i]
    }
};

// @lc code=end

