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
    let position = nums[nums.length - 2];
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] >= goal - i)  {
            goal = i;
        }
        position = nums[i]
    }
    console.log("[position, goal]", [position, goal])

    if(position - goal === 0 || position - goal > 0) return true;
    return false;
};

// console.log(canJump([2,3,1,1,4]))
// console.log(canJump([3,2,1,0,4]))
// console.log(canJump([0,2,3]))
// @lc code=end

