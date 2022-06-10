/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    let goal = nums.length - 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] >= goal - i)  {
            goal = i;
        }
    }
    return goal ? false : true;
};

// @lc code=end

