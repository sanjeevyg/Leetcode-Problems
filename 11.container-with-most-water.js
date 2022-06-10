/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxA = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let area = minHeight * (right - left);
        maxA = Math.max(area, maxA);
        minHeight === height[right] ? right-- : left++;
    }
    return maxA;
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1,1]))
// console.log(maxArea([1,2,1]))
// console.log(maxArea([4,3,2,1,4]))
// @lc code=end

