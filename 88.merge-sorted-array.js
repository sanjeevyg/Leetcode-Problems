/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let counter = m + n - 1
    m -= 1;
    n -= 1;

    while(n >= 0) {
        if(nums1[m] > nums2[n]) {
            nums1[counter] = nums1[m]
            m--
        } else {
            nums1[counter] = nums2[n]
            n--
        }
        counter--
    }
};
// @lc code=end

