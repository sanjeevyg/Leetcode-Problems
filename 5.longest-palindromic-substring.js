/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = "";
    for(let i = 0; i < s.length; i++) {
        for(let j of [0, 1]) {
            let left = i;
            let right = i + j; 
        
            while(s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            if((right - left - 1)  > max.length) {
            max = s.substring(left + 1, right);
        }
        }
    }
    return max;
}

// console.log(longestPalindrome("cbbd"))
// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("abcda"))
// @lc code=end

