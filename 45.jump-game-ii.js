/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let goal = nums.length - 1;
    let count = 0;
    for(let i = 0; i < goal; i++) {
        if(nums[i] + i >= goal) {
            count++
            goal = i;
            i = 0;
        }
        // console.log("[i, count]", [i, count])
    }
    return count;
};

// console.log(jump([2,3,1,1,4]))
// console.log(jump([2,3,0,1,4]))
// @lc code=end

