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
    let map = new Map();
    let ans = [];

    for(let i = 0; i < n; i++) {
        map.set(nums[i], true)
    }

    for(let j = 1; j <= n; j++) {
        if(!map.has(j)) ans.push(j)
    }
    return ans
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// console.log(findDisappearedNumbers([1, 1]))
// @lc code=end

