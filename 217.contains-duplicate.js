/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let check = {};

    for(let num of nums) {
        check[num] = check[num] ? check[num] + 1 : 1
        if(check[num] > 1) return true;
    }
    return false;
};
// console.log(containsDuplicate([1,2,3,1]))
// @lc code=end

