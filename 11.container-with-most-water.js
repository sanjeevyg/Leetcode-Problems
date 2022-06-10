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
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let width = right - left;
        let minSide = Math.min(height[right], height[left]);
        let area = minSide*width;
        maxArea = Math.max(area, maxArea);
        if(minSide === height[right]) {
            right--
        } else {
            left++
        }
    }
    return maxArea
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1,1]))
// console.log(maxArea([1,2,1]))
// console.log(maxArea([4,3,2,1,4]))
// console.log(maxArea([1,2,4,3]))
// @lc code=end

