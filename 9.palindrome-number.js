/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = parseInt(String(x).split("").reverse().join(""))
    return rev === x ? true : false;
};
// @lc code=end

