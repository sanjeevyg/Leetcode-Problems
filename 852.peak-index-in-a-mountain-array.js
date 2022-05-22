/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    //Find the middle index 
    //If element with middle index < element with middle index + 1, low index = middle index + 1 else hiIndex = middleIndex
    let loIndex = 0; 
    let hiIndex = arr.length - 1;

    while(loIndex < hiIndex) {
        let middleIndex = Math.floor((hiIndex + loIndex)/2)
        if(arr[middleIndex] < arr[middleIndex + 1]) {
            loIndex = middleIndex + 1
        } else {
            hiIndex = middleIndex
        }
    }
    return loIndex
};
// @lc code=end

