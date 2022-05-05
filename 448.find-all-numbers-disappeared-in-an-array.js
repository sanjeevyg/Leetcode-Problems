/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let arr = [];

    for(let i = 1; i <= n; i++) {
        if(!nums.includes[i]) arr.push(i)
    }

    return arr
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// console.log(findDisappearedNumbers([1, 1]))
// @lc code=end

